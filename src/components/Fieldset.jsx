function Fieldset({ legend, children }) {
  return (
    <fieldset>
      <legend>{legend}</legend>
      {children}
    </fieldset>
  );
}

export { Fieldset };
