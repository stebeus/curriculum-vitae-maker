function Button({ label, dataAttrName = 'action', attrValue }) {
  const dataAttribute = { [`data-${dataAttrName}`]: attrValue };

  return (
    <button type="button" {...dataAttribute} onClick={attrValue}>
      {label}
    </button>
  );
}

export { Button };
