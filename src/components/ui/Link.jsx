export function Link({ to = '/', children }) {
  const urlScheme = /http|https/;
  const isExternal = urlScheme.test(`${to}//:`);

  const hasTargetBlank = isExternal && {
    target: '_blank',
    rel: 'noopener noreferrer',
  };

  return (
    <a href={to} {...hasTargetBlank}>
      {children}
    </a>
  );
}
