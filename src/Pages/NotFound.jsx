import { Link, useLocation } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  return (
    <div>
      <Link to={backLinkHref}>Back</Link>
      <p>Ops warning please back to Home</p>
    </div>
  );
};
export default NotFound;
