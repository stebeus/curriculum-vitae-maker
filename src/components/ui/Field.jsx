function Field({ name, type }) {
  const props = { name };

  const input = <input type={type} {...props} />;
  const textarea = <textarea {...props}></textarea>;

  const formControl = type === 'textarea' ? textarea : input;

  return (
    // biome-ignore lint/a11y/noLabelWithoutControl: The form control is dynamically inserted.
    <label className="field">
      {name}: {formControl}
    </label>
  );
}

const createFieldData = (...fields) =>
  fields.map(([name, type = name]) => ({
    key: crypto.randomUUID(),
    name,
    type,
  }));

export { createFieldData, Field };
