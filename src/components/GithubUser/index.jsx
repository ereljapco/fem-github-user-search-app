import '../../assets/styles/githubuser.css';
import GithubUserDetailNa from './GithubUserDetailNa';
import GithubUserDetail from './GithubUserDetail';
import GithubUserJoinedDate from './GithubUserJoinedDate';

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

  return (
    <section className="github-user">
      <img className="github-user__avatar" src={avatar_url} alt={name} />
      <header className="github-user__header">
        <h2 className="github-user__username">{name}</h2>
        <a className="github-user__link" href={html_url}>
          @{login}
        </a>
        <GithubUserJoinedDate date={created_at} />
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
          {location ? (
            <GithubUserDetail type="location" detail={location} />
          ) : (
            <GithubUserDetailNa type="location" />
          )}
          {blog ? (
            <GithubUserDetail type="blog" detail={blog} />
          ) : (
            <GithubUserDetailNa type="blog" />
          )}
          {twitter ? (
            <GithubUserDetail type="twitter" detail={twitter} />
          ) : (
            <GithubUserDetailNa type="twitter" />
          )}
          {company ? (
            <GithubUserDetail type="company" detail={company} />
          ) : (
            <GithubUserDetailNa type="company" />
          )}
        </ul>
      </div>
    </section>
  );
}

export default GithubUser;
