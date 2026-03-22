function Button({ dataAttrName, dataAttrValue, handler, children }) {
  const dataProps = { [`data-${dataAttrName}`]: dataAttrValue };

  return (
    <button type="button" {...dataProps} onClick={handler}>
      {children}
    </button>
  );
}

export { Button };
