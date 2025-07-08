import React from 'react';
import { GrFormPrevious,GrFormNext  } from "react-icons/gr";
import './Pagination.css';

export default function Pagination({ currentPage, totalPages, setPage, pageSize, setPageSize }) {
  return (
    <div className="pagination-wrapper">
      <div className="pagination-left">
        <button
          onClick={() => setPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="pagination-btn"
        >
          <GrFormPrevious />
        </button>
        <span className="page-info">Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="pagination-btn"
        >
          <GrFormNext />
        </button>
      </div>
      <div className="pagination-right">
        <label htmlFor="pageSize">Rows per page:</label>
        <select
          id="pageSize"
          value={pageSize}
          onChange={(e) => {
            setPageSize(+e.target.value);
            setPage(1);
          }}
        >
          {[10, 50, 100].map(size => (
            <option key={size} value={size}>{size}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
