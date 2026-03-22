import { Form } from './components/Form.jsx';
import { UserActions } from './components/UserActions.jsx';
import { Link } from './components/ui/Link.jsx';

export function App() {
  return (
    <>
      <header>
        <h1 className="logo">
          <Link>Curriculum vitae maker</Link>
        </h1>
      </header>
      <main>
        <UserActions />
        <Form />
      </main>
      <footer>
        <p>
          © Stebeus 2025.
          <Link to="opensource.org/license/mit" isExternal={true}>
            MIT License
          </Link>
          <Link to="github.com/stebeus" isExternal={true}>
            GitHub
          </Link>
        </p>
      </footer>
    </>
  );
}
