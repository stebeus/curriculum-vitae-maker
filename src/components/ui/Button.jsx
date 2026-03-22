function createButtonData(...buttons) {
  const createButton = ([dataAttrName, attrValue, handler, children]) => ({
    dataAttrName,
    attrValue,
    handler,
    children,
  });

  return buttons.map(createButton);
}

function Button({ dataAttrName, attrValue, handler, children }) {
  const dataAttr = { [`data-${dataAttrName}`]: attrValue };

  return (
    <button type="button" {...dataAttr} onClick={handler}>
      {children}
    </button>
  );
}

export { Button, createButtonData };
