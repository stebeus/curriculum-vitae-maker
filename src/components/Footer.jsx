import { Link } from './ui/Link.jsx';
import { SocialIcon } from './ui/SocialIcon.jsx';
import '../assets/styles/Footer.css';

export function Footer() {
  return (
    <footer>
      <p className="copyright">
        {`© Stebeus 2026. `}
        <Link to="http://opensource.org/license/mit">MIT License</Link>
      </p>
      <Link to="http://github.com/stebeus">
        <SocialIcon brand="github" alt="GitHub profile" />
      </Link>
    </footer>
  );
}
