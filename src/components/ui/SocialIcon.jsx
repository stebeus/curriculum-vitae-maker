import { BASE_URL } from '../../constants.js';

export function SocialIcon({ brand, alt }) {
  return (
    <svg className="social-icon" role="img" aria-label={alt}>
      <use href={`${BASE_URL}social-icons.svg#${brand}`}></use>
    </svg>
  );
}
