function createButtonData([dataAttrName, dataAttrValue, handler, children]) {
  const state = { dataAttrName, dataAttrValue, handler, children };
  return { ...state };
}

const createManyButtons = (...buttons) => buttons.map(createButtonData);

function Button({ dataAttrName, dataAttrValue, handler, children }) {
  const dataProps = { [`data-${dataAttrName}`]: dataAttrValue };

  return (
    <button type="button" {...dataProps} onClick={handler}>
      {children}
    </button>
  );
}

export { Button, createManyButtons };
