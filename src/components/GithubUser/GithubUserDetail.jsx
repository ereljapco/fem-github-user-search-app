import { ReactComponent as IconLocation } from '../../assets/icons/icon-location.svg';
import { ReactComponent as IconWebsite } from '../../assets/icons/icon-website.svg';
import { ReactComponent as IconTwitter } from '../../assets/icons/icon-twitter.svg';
import { ReactComponent as IconCompany } from '../../assets/icons/icon-company.svg';

export default function GithubUserDetail({ type, detail }) {
  if (type === 'twitter' && detail) {
    var twitterUrl = `https://twitter.com/${detail}`;
  }

  if (type === 'company' && detail) {
    const companyName = detail.slice(1);
    var companyUrl = `https://github.com/${companyName}`;
  }

  return (
    <li className="github-user__detail">
      {type === 'location' ? (
        <IconLocation className="github-user__detail-icon" />
      ) : type === 'blog' ? (
        <IconWebsite className="github-user__detail-icon" />
      ) : type === 'twitter' ? (
        <IconTwitter className="github-user__detail-icon" />
      ) : (
        <IconCompany className="github-user__detail-icon" />
      )}

      {type === 'location' ? (
        detail
      ) : type === 'blog' ? (
        <a className="github-user__website-url" href={detail}>
          {detail}
        </a>
      ) : type === 'twitter' ? (
        <a className="github-user__website-url" href={twitterUrl}>
          @{detail}
        </a>
      ) : (
        <a className="github-user__company-url" href={companyUrl}>
          {detail}
        </a>
      )}
    </li>
  );
}
