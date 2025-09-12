interface CalcButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

export const CalcButton = ({ label, active, onClick }: CalcButtonProps) => {
  return (
    <button
      className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 min-w-[160px]
        ${
          active
            ? "bg-sky-600 text-white shadow-lg shadow-sky-200 dark:shadow-sky-900/50 scale-105"
            : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-sky-50 dark:hover:bg-gray-600 hover:text-sky-700 dark:hover:text-sky-300 hover:scale-102"
        }
      `}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
