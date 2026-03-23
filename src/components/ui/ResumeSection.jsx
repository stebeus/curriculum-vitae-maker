function ResumeSection({ titleId, subtitle, dates, children }) {
  const [startDate, endDate] = dates;

  return (
    <section id={titleId}>
      <h2>{titleId}</h2>
      <h3>{subtitle}</h3>
      {children}
      <p className="dates">
        {startDate} – {endDate}
      </p>
    </section>
  );
}

export { ResumeSection };
