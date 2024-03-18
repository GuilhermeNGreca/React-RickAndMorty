import React from "react";
import "./Pagination.css";

const Pagination = ({ page, totalPages, handlePageChange }) => {
  const renderPagination = () => {
    const pages = [];
    const max_pages = 5;

    let startPage = Math.max(1, page - Math.floor(max_pages / 2));
    let endPage = Math.min(totalPages, startPage + max_pages - 1);

    if (endPage - startPage < max_pages - 1) {
      startPage = Math.max(1, endPage - max_pages + 1);
    }

    if (startPage > 1) {
      pages.push(
        <button
          key={1}
          onClick={() => handlePageChange(1)}
          className={page === 1 ? "active" : ""}
          id="pagination_numbers"
        >
          {1}
        </button>
      );
      if (page > 2) {
        pages.push(
          <span key="dots1" className="pagination-dots">
            ...
          </span>
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={page === i ? "active" : ""}
          id="pagination_numbers"
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
      if (totalPages - page > 2) {
        pages.push(
          <span key="dots2" className="pagination-dots">
            ...
          </span>
        );
      }
      pages.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className={page === totalPages ? "active" : ""}
          id="pagination_numbers"
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="pagination">
      <button
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
        className={`pagination-button ${page === 1 ? "invisible" : ""}`}
      >
        <svg
          width="9"
          height="19"
          viewBox="0 0 11 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 1L1 10.5L10 20"
            stroke="#909090"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="bevel"
          />
        </svg>
      </button>
      {renderPagination()}
      <button
        onClick={() => handlePageChange(page + 1)}
        disabled={page === totalPages}
        className={`pagination-button ${
          page === totalPages ? "invisible" : ""
        }`}
      >
        <svg
          width="9"
          height="19"
          viewBox="0 0 11 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.999999 20L10 10.5L1 0.999998"
            stroke="#909090"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="bevel"
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
