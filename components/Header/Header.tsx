import Link from "next/link";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.header_wrapper}>
        <Link href="/" aria-label="Home">
          NoteHub
        </Link>
        <nav aria-label="Main Navigation">
          <ul className={css.navigation}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/notes">Notes</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
