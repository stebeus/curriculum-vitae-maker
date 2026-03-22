function Link({ to = '/', isExternal, children }) {
  const path = { href: isExternal ? `https://${to}` : to };

  const targetBlank = isExternal && {
    target: '_blank',
    rel: 'noopener noreferrer',
  };

  return (
    <a {...path} {...targetBlank}>
      {children}
    </a>
  );
}

export { Link };
