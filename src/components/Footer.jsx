import { Link } from './ui/Link.jsx';
import { SocialIcon } from './ui/SocialIcon.jsx';

export function Footer() {
  return (
    <footer>
      <p>
        {`© Stebeus 2026. `}
        <Link to="http://opensource.org/license/mit">MIT License</Link>
        <Link to="http://github.com/stebeus">
          <SocialIcon brand="github" />
        </Link>
      </p>
    </footer>
  );
}
