"use client";

import { useState } from "react";
import { useDebounce } from "use-debounce";
import NoteList from "@/components/NoteList/NoteList";
import Pagination from "@/components/Pagination/Pagination";
import Modal from "@/components/Modal/Modal";
import SearchBox from "@/components/SearchBox/SearchBox";
import css from "./Notes.module.css";

function NotesClient() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm] = useDebounce(searchTerm, 500);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        <SearchBox value={searchTerm} onChange={setSearchTerm} />
        <Pagination currentPage={currentPage} onPageChange={setCurrentPage} />
        <button className={css.button} onClick={openModal}>
          Create note +
        </button>
      </header>

      <NoteList currentPage={currentPage} search={debouncedSearchTerm} />

      {isModalOpen && <Modal onClose={closeModal} />}
    </div>
  );
}

export default NotesClient;
