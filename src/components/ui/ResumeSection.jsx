function ResumeSection({ titleId, subtitle, dates, children }) {
  const [startDate, endDate] = dates;

  return (
    <section id={titleId}>
      <h3>{titleId}</h3>
      <h4>{subtitle}</h4>
      {children}
      <p className="dates">
        {startDate} – {endDate}
      </p>
    </section>
  );
}

export { ResumeSection };
