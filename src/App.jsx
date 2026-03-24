import { Footer } from './components/Footer.jsx';
import { Header } from './components/Header.jsx';
import { ResumeForm } from './components/ResumeForm.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <ResumeForm />
      </main>
      <Footer />
    </>
  );
}

export { App };
