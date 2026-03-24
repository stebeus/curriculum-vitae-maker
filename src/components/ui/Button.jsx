export function Button({ type = 'button', handler, children }) {
  return (
    <button type={type} onClick={handler}>
      {children}
    </button>
  );
}
