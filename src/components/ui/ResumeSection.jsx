function ResumeSection({ title, subtitle, dates, children }) {
  const [startDate, endDate] = dates;

  return (
    <section id={title}>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      {children}
      <p className="dates">
        {startDate} – {endDate}
      </p>
    </section>
  );
}

export { ResumeSection };
