"use client";

import Button from "@/components/atoms/Button";

export default function Paginacion({
  currentPage,
  totalPages,
  onPageChange,
}) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-3 flex-wrap">
      <Button
        variant="outline"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ← Anterior
      </Button>

      <span className="font-medium">
        Página {currentPage} de {totalPages}
      </span>

      <Button
        variant="outline"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Siguiente →
      </Button>
    </div>
  );
}