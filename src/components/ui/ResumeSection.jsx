function ResumeSection({ nameId, subtitle, dates, children }) {
  const [startDate, endDate] = dates;

  return (
    <section id={nameId}>
      <h3>{nameId}</h3>
      <h4>{subtitle}</h4>
      {children}
      <p className="dates">
        {startDate} – {endDate}
      </p>
    </section>
  );
}

export { ResumeSection };
