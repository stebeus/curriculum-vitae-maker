function createResumeSectionData(...resumeSections) {
  const createResumeSection = ([title, subtitle, dates, ...children]) => ({
    key: crypto.randomUUID(),
    title,
    subtitle,
    dates,
    ...children,
  });

  return resumeSections.map(createResumeSection);
}

function ResumeSection({ title, subtitle, dates, children }) {
  const [startDate, endDate] = dates;

  return (
    <section id={title}>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      {children}
      <p class="dates">
        {startDate} – {endDate}
      </p>
    </section>
  );
}

export { createResumeSectionData, ResumeSection };
