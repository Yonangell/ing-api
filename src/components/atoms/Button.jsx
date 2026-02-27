"use client";

export default function Button({
  children,
  onClick,
  variant = "primary",
  disabled = false,
}) {
  const base =
    "px-3 py-1 rounded font-medium transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

  const styles = {
    primary: "bg-blue-500 text-white hover:bg-blue-700 cursor-pointer",
    outline: "border dark:border-neutral-600",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${styles[variant]}`}
    >
      {children}
    </button>
  );
}
