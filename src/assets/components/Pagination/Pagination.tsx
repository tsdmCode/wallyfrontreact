import style from './pagination.module.scss';

interface PaginationProps {
  postsPerPage: number;
  totalPosts: number;
  setCurrentPage: (arg0: number) => void;
  currentPage: number;
  pageNumber: number;
}

export const Pagination = ({ postsPerPage, totalPosts = 1, setCurrentPage, currentPage }: PaginationProps) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber: number, e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentPage(pageNumber - 1);
  };

  return (
    <nav>
      <ul className={style.paginationStyle}>
        {pageNumbers.map((number) => (
          <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
            <a onClick={(e) => paginate(number, e)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
