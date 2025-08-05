interface CalcButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

export const CalcButton = ({ label, active, onClick }: CalcButtonProps) => {
  return (
    <button
      className={`px-3 py-1 rounded-md text-sm font-medium transition
        ${
          active
            ? "bg-blue-600 text-white dark:bg-blue-400 dark:text-gray-900"
            : "bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-200 hover:bg-blue-100 dark:hover:bg-blue-800"
        }
      `}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
