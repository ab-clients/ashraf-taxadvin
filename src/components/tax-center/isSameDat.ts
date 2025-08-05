export function isSameDay(date1: Date, dateString: string): boolean {
  const [year, month, day] = dateString.split("-").map(Number);
  return (
    date1.getFullYear() === year &&
    date1.getMonth() + 1 === month &&
    date1.getDate() === day
  );
}
