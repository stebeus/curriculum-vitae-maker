function Link({ to = '/index.html', children }) {
  const isExternal = to.includes('https://');

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
