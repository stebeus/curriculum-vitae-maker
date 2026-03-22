import { Form } from './components/Form.jsx';
import { UserActions } from './components/UserActions.jsx';

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
    </>
  );
}
