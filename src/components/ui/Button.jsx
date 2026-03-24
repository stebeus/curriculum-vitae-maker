export function Button({ label, type = 'button', handler }) {
  return (
    <button type={type} onClick={handler}>
      {label}
    </button>
  );
}
