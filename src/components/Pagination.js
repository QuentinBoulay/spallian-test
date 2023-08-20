import React from "react";

function Pagination({ totalPages, currentPage, onPageChange }) {
  return (
    <div className="pagination">
      <button
        className="pagination-button"
        disabled={currentPage <= 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Précédent
      </button>
      <button
        className="pagination-button"
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Suivant
      </button>
    </div>
  );
}

export default Pagination;
