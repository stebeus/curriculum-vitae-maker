export function Field({ label, type, isReadOnly }) {
  const readOnly = { readOnly: isReadOnly };

  const input = <input type={type} {...readOnly} />;
  const textArea = <textarea {...readOnly}></textarea>;

  const control = type === 'textarea' ? textArea : input;

  return (
    // biome-ignore lint/a11y/noLabelWithoutControl: The control is defined conditionally.
    <label className="field">
      {label}: {control}
    </label>
  );
}

export function createFieldData([label, type]) {
  const state = { label, type, key: crypto.randomUUID() };

  return Object.freeze({ ...state });
}
