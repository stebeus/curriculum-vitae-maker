import { Link } from './ui/Link.jsx';
import '../assets/styles/Header.css'
;
export function Header() {
  return (
    <header>
      <h1 className="logo">
        <Link>Curriculum vitae maker</Link>
      </h1>
    </header>
  );
}
