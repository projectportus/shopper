const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const maxVisiblePages = 3;
  const group = Math.ceil(currentPage / maxVisiblePages);
  const startPage = (group - 1) * maxVisiblePages + 1;
  const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

  const visiblePages = [];
  for (let i = startPage; i <= endPage; i++) {
    visiblePages.push(i);
  }

  return (
    <div className="flex items-center gap-2">
      {startPage > 1 && (
        <button
          className="px-4 py-2 rounded bg-[#F9F1E7] text-black"
          onClick={() => onPageChange(currentPage - 1)}
        >
          Back
        </button>
      )}
      {visiblePages.map((page) => (
        <button
          key={page}
          className={`px-4 py-2 rounded ${
            currentPage === page ? "bg-[#B88E2F] text-white" : "bg-[#F9F1E7]"
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      {endPage < totalPages && (
        <button
          className="px-4 py-2 rounded bg-[#F9F1E7] text-black"
          onClick={() => onPageChange(currentPage + 1)}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
