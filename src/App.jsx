import { Form } from './components/Form.jsx';
import { UserActions } from './components/UserActions.jsx';
import { Link } from './components/ui/Link.jsx';

export function App() {
  return (
    <>
      <header>
        <h1 className="logo">
          <a href="/">Curriculum vitae maker</a>
        </h1>
      </header>
      <main>
        <UserActions />
        <Form />
      </main>
      <footer>
        <p>
          © Stebeus 2025.
          <Link to="https://opensource.org/license/mit" isExternal={true}>
            MIT License
          </Link>
          <Link to="https://github.com/stebeus" isExternal={true}>
            GitHub
          </Link>
        </p>
      </footer>
    </>
  );
}
