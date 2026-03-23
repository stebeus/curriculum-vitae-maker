function Pane({ name, children }) {
  return (
    <section className="pane">
      <h2>{name}</h2>
      {children}
    </section>
  );
}

export { Pane };
