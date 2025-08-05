import { taxEvents } from "@/data/tax-center/due-dates";
import { isSameDay } from "./isSameDat";

interface MonthProps {
  month: number;
  year: number;
}

export const MonthGrid = ({ month, year }: MonthProps) => {
  // Determine first day of the month and the number of days in the month.
  const firstDayOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startWeekday = firstDayOfMonth.getDay(); // 0 = Sunday

  // Build an array representing the grid cells for the month.  We pad the
  // beginning of the month with empty slots for days that belong to the
  // previous month so that the first day aligns with its weekday.
  const gridCells: (Date | null)[] = [];
  for (let i = 0; i < startWeekday; i++) {
    gridCells.push(null);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    gridCells.push(new Date(year, month, day));
  }

  // Determine the name of the month for the header.
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-400 mb-2">
        {monthNames[month]}
      </h2>
      {/* Weekday labels */}
      <div className="grid grid-cols-7 text-center text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {gridCells.map((date, idx) => {
          // Determine if the current cell corresponds to an event.
          const event = date
            ? taxEvents.find((e) => isSameDay(date, e.date))
            : undefined;
          return (
            <div
              key={idx}
              className={`relative text-xs h-24 border border-gray-400 dark:border-gray-700 rounded-lg p-1 flex flex-col items-start justify-start ${
                date && event ? "bg-blue-50 dark:bg-blue-900" : ""
              } ${!date ? "bg-transparent border-none" : ""}`}
            >
              {date && (
                <>
                  <span
                    className={`text-xs font-medium ${
                      event
                        ? "text-blue-700 dark:text-blue-300"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {date.getDate()}
                  </span>
                  {/* Render event dot and tooltip if present */}
                  {event && (
                    <div className="mt-1 text-xs leading-snug">
                      <div className="font-semibold text-blue-700 dark:text-blue-300">
                        {event.title}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
