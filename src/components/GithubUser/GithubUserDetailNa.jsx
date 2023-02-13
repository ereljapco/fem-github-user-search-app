import { ReactComponent as IconLocation } from '../../assets/icons/icon-location.svg';
import { ReactComponent as IconWebsite } from '../../assets/icons/icon-website.svg';
import { ReactComponent as IconTwitter } from '../../assets/icons/icon-twitter.svg';
import { ReactComponent as IconCompany } from '../../assets/icons/icon-company.svg';

export default function GithubUserDetailNa({ type }) {
  return (
    <li className="github-user__detail github-user__detail-na">
      {type === 'location' ? (
        <IconLocation className="github-user__detail-icon" />
      ) : type === 'blog' ? (
        <IconWebsite className="github-user__detail-icon" />
      ) : type === 'twitter' ? (
        <IconTwitter className="github-user__detail-icon" />
      ) : (
        <IconCompany className="github-user__detail-icon" />
      )}
      Not Available
    </li>
  );
}
