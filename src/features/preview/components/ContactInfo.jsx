const createUrlSchemes = (...urlSchemes) =>
  urlSchemes.map(([type, scheme]) => ({
    key: crypto.randomUUID(),
    type,
    scheme,
  }));

function ContactInfo({ channel, value }) {
  const urlSchemes = createUrlSchemes(['email', 'mailto'], ['phone', 'tel']);

  const isUrlScheme = ({ type }) => type === channel;

  const urlScheme = urlSchemes.find(isUrlScheme).scheme;

  return (
    <p className="contact-info">
      {channel}: <a href={`${urlScheme}:${value}`}>{value}</a>
    </p>
  );
}

export { ContactInfo };
