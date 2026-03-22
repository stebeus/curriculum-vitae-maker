function Link({ to = '/', children }) {
  const protocols = /http|https/;
  const isExternal = protocols.test(`${to}//:`);

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
