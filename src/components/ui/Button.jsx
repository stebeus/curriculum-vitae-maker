function Button({ label, dataAttrName = 'action', attrValue, handler }) {
  const dataAttribute = { [`data-${dataAttrName}`]: attrValue };

  return (
    <button type="button" {...dataAttribute} onClick={handler}>
      {label}
    </button>
  );
}

export { Button };
