import { PAGE_SIZE } from "../../constants/common.constant";
import "./Pagination.css";

export const Pagination = ({
  totalPage,
  currentPage,
  setCurrentPage,
  setRowPerPage,
}) => {
  // Event Handlers
  const onClickPage = (page) => {
    setCurrentPage(page - 1);
  };

  const onClickPrev = () => {
    setCurrentPage(currentPage - 1);
  };

  const onClickNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const onChangeRowPerPage = (rowPerPage) => {
    setRowPerPage(rowPerPage);
    setCurrentPage(0);
  };

  return (
    <div>
      <div className="dropdown">
        <select
          name="pageSize"
          id="pageSize"
          onChange={(e) => {
            onChangeRowPerPage(e.target.value);
          }}
        >
          {PAGE_SIZE.map((size) => (
            <option value={size}>{size}</option>
          ))}
        </select>
      </div>
      <div className="pagination">
        <button onClick={() => setCurrentPage(0)} disabled={currentPage === 0}>
          {"<<"}
        </button>
        <button disabled={currentPage === 0} onClick={onClickPrev}>
          Prev
        </button>
        {[...Array(totalPage)].map((_, index) => (
          <button
            style={{
              background: currentPage === index ? "green" : "white",
            }}
            onClick={() => onClickPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button disabled={currentPage === totalPage - 1} onClick={onClickNext}>
          Next
        </button>
        <button
          onClick={() => setCurrentPage(totalPage - 1)}
          disabled={currentPage === totalPage - 1}
        >
          {">>"}
        </button>
      </div>
    </div>
  );
};
