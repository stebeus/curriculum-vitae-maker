import { Link } from './components/Link.jsx';
import { Pane } from './components/Pane.jsx';
import { EditMenu } from './features/editor/EditMenu.jsx';
import { ResumeForm } from './features/editor/ResumeForm.jsx';
import { ResumePreview } from './features/preview/ResumePreview.jsx';

function App() {
  return (
    <>
      <header>
        <h1 className="logo">
          <Link>Curriculum vitae maker</Link>
        </h1>
      </header>
      <main>
        <Pane name="Editor">
          <EditMenu />
          <ResumeForm />
        </Pane>
        <Pane name="Preview">
          <ResumePreview />
        </Pane>
      </main>
      <footer>
        <p>
          © Stebeus 2025.
          <Link to="https://opensource.org/license/mit">MIT License</Link>
          <Link to="https://github.com/stebeus">GitHub</Link>
        </p>
      </footer>
    </>
  );
}

export { App };
