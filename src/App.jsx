import { EditMenu } from './components/EditMenu.jsx';
import { ResumeForm } from './components/ResumeForm.jsx';
import { ResumePreview } from './components/ResumePreview.jsx';
import { Link } from './components/ui/Link.jsx';
import { Pane } from './components/ui/Pane.jsx';

export function App() {
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
