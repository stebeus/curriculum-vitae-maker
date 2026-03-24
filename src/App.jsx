import { Footer } from './components/Footer.jsx';
import { Header } from './components/Header.jsx';
import { ResumeForm } from './components/ResumeForm.jsx';

export function App() {
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
