export default function Paginacion({ page, onPageChange }) {
  return (
    <div className="flex justify-center gap-4 mt-6">
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        className="px-4 py-2 rounded-xl border cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed bg-blue-50 dark:bg-slate-800 text-black dark:text-slate-100 hover:bg-blue-300 dark:hover:bg-neutral-700"
      >
        Anterior
      </button>

      <span className="px-4 py-2">Página {page}</span>

      <button
        onClick={() => onPageChange(page + 1)}
        className="px-4 py-2 rounded-xl border cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed bg-blue-50 dark:bg-slate-800 text-black dark:text-slate-100 hover:bg-blue-300 dark:hover:bg-neutral-700"
      >
        Siguiente
      </button>
    </div>
  );
}
