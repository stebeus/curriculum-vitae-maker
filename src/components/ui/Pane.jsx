function Pane({ title, children }) {
  return (
    <section className="pane">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export { Pane };
