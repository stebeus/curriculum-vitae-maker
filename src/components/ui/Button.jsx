function Button({ label, handler }) {
  return (
    <button type="button" data-action={`"${handler}"`} onClick={handler}>
      {label}
    </button>
  );
}

export { Button };
