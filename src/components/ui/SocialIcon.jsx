import { BASE_URL } from '../../constants.js';

export function SocialIcon({ brand }) {
  return (
    <svg className="social-icon" role="presentation" aria-hidden="true">
      <use href={`${BASE_URL}social-icons.svg#${brand}`}></use>
    </svg>
  );
}
