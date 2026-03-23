import { Form } from './components/Form.jsx';
import { Link } from './components/ui/Link.jsx';

function App() {
  return (
    <>
      <header>
        <h1 className="logo">
          <Link>Curriculum vitae maker</Link>
        </h1>
      </header>
      <main>
        <Form />
      </main>
      <footer>
        <p>
          {`© Stebeus 2025. `}
          <Link to="https://opensource.org/license/mit">MIT License</Link>
          <Link to="https://github.com/stebeus">GitHub</Link>
        </p>
      </footer>
    </>
  );
}

export { App };
