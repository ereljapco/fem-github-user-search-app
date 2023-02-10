import { ReactComponent as IconLocation } from '../../assets/icons/icon-location.svg';
import { ReactComponent as IconWebsite } from '../../assets/icons/icon-website.svg';
import { ReactComponent as IconTwitter } from '../../assets/icons/icon-twitter.svg';
import { ReactComponent as IconCompany } from '../../assets/icons/icon-company.svg';

import '../../assets/styles/githubuser.css';

function GithubUser(user) {
  const {
    name,
    login,
    avatar_url,
    html_url,
    created_at,
    bio,
    public_repos,
    followers,
    following,
    location,
    blog,
    twitter,
    company,
  } = user;

  if (twitter) {
    var twitterUrl = `https://twitter.com/${twitter}`;
  }

  if (company) {
    const companyName = company.slice(1);
    var companyUrl = `https://github.com/${companyName}`;
  }

  return (
    <section className="github-user">
      <img className="github-user__avatar" src={avatar_url} alt={name} />
      <header className="github-user__header">
        <h2 className="github-user__username">{name}</h2>
        <a className="github-user__link" href={html_url}>
          @{login}
        </a>
        <p className="github-user__joined-date">{created_at}</p>
      </header>
      <div className="github-user__info">
        <p className="github-user__bio">
          {bio ? (
            `${bio}`
          ) : (
            <span className="github-user__no-bio">This profile has no bio</span>
          )}
        </p>
        <div className="github-user__stats">
          <div className="github-user__stat">
            <h3 className="github-user__stat-title">Repos</h3>
            <p className="github-user__stat-count">{public_repos}</p>
          </div>
          <div className="github-user__stat">
            <h3 className="github-user__stat-title">Followers</h3>
            <p className="github-user__stat-count">{followers}</p>
          </div>
          <div className="github-user__stat">
            <h3 className="github-user__stat-title">Following</h3>
            <p className="github-user__stat-count">{following}</p>
          </div>
        </div>
        <ul className="github-user__details">
          <li className="github-user__detail">
            <IconLocation className="github-user__detail-icon" />
            {location}
          </li>
          <li className="github-user__detail">
            <IconWebsite className="github-user__detail-icon" />
            {blog ? (
              <a className="github-user__website-url" href={blog}>
                {blog}
              </a>
            ) : (
              'Not Available'
            )}
          </li>
          <li className="github-user__detail">
            <IconTwitter className="github-user__detail-icon" />
            {twitter ? (
              <a className="github-user__website-url" href={twitterUrl}>
                @{twitter}
              </a>
            ) : (
              'Not Available'
            )}
          </li>
          <li className="github-user__detail">
            <IconCompany className="github-user__detail-icon" />
            {company ? (
              <a className="github-user__company-url" href={companyUrl}>
                {company}
              </a>
            ) : (
              'Not Available'
            )}
          </li>
        </ul>
      </div>
    </section>
  );
}

export default GithubUser;
