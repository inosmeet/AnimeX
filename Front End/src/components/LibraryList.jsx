import { Link } from 'react-router-dom';

export default function LibraryList() {
  return (
    <>
      <h3 className="description-title">PlayLists</h3>
        <Link to={`/library/all-anime`} className="block btn outside-btn">All Anime</Link>
        <Link to={`/library/currently-watching`} className="block btn outside-btn">Currently Watching</Link>
        <Link to={`/library/want-to-watch`} className="block btn outside-btn">Want to Watch</Link>
        <Link to={`/library/completed`} className="block btn outside-btn">Completed</Link>
        <Link to={`/library/on-hold`} className="block btn outside-btn">On Hold</Link>
        <Link to={`/library/dropped`} className="block btn outside-btn">Dropped</Link>
    </>
  )
}
