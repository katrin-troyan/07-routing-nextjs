import ReactPaginate from "react-paginate";
import css from "./Pagination.module.css";
import { useQuery } from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";

interface PaginationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, onPageChange }: PaginationProps) => {
  const { data, isSuccess } = useQuery({
    queryKey: ["notes"],
    queryFn: () => fetchNotes({ page: 1, perPage: 12 }),
  });

  const totalPages = data?.totalPages ?? 0;

  return (
    <>
      {isSuccess && totalPages > 1 && (
        <ReactPaginate
          pageCount={totalPages}
          pageRangeDisplayed={5}
          marginPagesDisplayed={1}
          onPageChange={({ selected }) => onPageChange(selected + 1)}
          forcePage={currentPage - 1}
          containerClassName={css.pagination}
          activeClassName={css.active}
          nextLabel="→"
          previousLabel="←"
        />
      )}
    </>
  );
};
export default Pagination;
