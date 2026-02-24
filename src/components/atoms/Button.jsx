export default function Button({ onClick, children, variant = "primary" }) {
  const base =
    "px-3 py-1 rounded-2xl font-medium cursor-pointer transition-colors duration-200";

  const style = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    outline: "border dark:border-neutral-600",
  };

  return (
    <button onClick={onClick} className={`${base} ${style[variant]}`}>
      {children}
    </button>
  );
}
