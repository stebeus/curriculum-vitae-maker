function Button({ label, dataAttrName = 'action', dataAttrValue }) {
  const dataAttribute = { [`data-${dataAttrName}`]: dataAttrValue };

  return (
    <button type="button" {...dataAttribute} onClick={dataAttrValue}>
      {label}
    </button>
  );
}

export { Button };
