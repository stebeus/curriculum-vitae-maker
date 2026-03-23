const createButtonData = (...buttons) =>
  buttons.map(([dataAttrName, attrValue, handler, children]) => ({
    key: crypto.randomUUID(),
    dataAttrName,
    attrValue,
    handler,
    children,
  }));

function Button({ dataAttrName, attrValue, handler, children }) {
  const dataAttr = { [`data-${dataAttrName}`]: attrValue };

  return (
    <button type="button" {...dataAttr} onClick={handler}>
      {children}
    </button>
  );
}

export { Button, createButtonData };
