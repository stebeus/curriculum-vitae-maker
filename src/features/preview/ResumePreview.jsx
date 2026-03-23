import { ContactInfo } from './components/ContactInfo.jsx';
import { ResumeSection } from './components/ResumeSection.jsx';

function ResumePreview() {
  return (
    <article id="preview">
      <header id="personal-details">
        <h3>Stefan</h3>
        <address>
          <ContactInfo channel="email" value="stef@example.com" />
          <ContactInfo channel="phone" value="+15555551212" />
        </address>
      </header>
      <ResumeSection
        nameId="education"
        subtitle="TOP"
        dates={['01-09-2025', '01-03-2026']}
      >
        <p id="field-of-study">Fullstack web dev</p>
      </ResumeSection>
      <ResumeSection
        nameId="experience"
        subtitle="TOP"
        dates={['01-09-2025', '01-03-2026']}
      >
        <p id="position">Student</p>
        <p id="responsibilities">Reading lessons and building projects.</p>
      </ResumeSection>
    </article>
  );
}

export { ResumePreview };
