function Link({ to, isExternal, children }) {
  const targetBlank = isExternal && {
    target: '_blank',
    rel: 'noopener noreferrer',
  };

  return (
    <a href={to} {...targetBlank}>
      {children}
    </a>
  );
}

export { Link };
