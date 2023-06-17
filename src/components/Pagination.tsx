import React from "react";
import "./../styles/pagination.scss";

interface PaginationState {
  totalPages: number;
  handlePagination: (page: number) => void;
  currentPage: number;
}

export const Pagination = ({
  totalPages,
  handlePagination,
  currentPage,
}: PaginationState) => {
  return (
    <div className="pagination">
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page) => (
          <button
            key={page}
            onClick={() => handlePagination(page)}
            className={currentPage === page ? "active" : ""}
          >
            {page}
          </button>
        )
      )}
    </div>
  );
};
