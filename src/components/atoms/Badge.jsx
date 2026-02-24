export default function Badge({ children }) {
  return (
    <span className="text-xs px-3 py-1 rounded-2xl bg-gray-200 dark:bg-neutral-700 capitalize text-white">
      {children}
    </span>
  );
}
