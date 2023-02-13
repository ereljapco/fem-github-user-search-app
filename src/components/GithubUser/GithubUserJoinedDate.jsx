import formatDate from '../../utils/formatDate';

export default function GithubUserJoinedDate({ date }) {
  if (!date) {
    return <div></div>;
  }

  const formattedDate = formatDate(date);

  return (
    <p className="github-user__joined-date">
      Joined <time dateTime={date}>{formattedDate}</time>
    </p>
  );
}
