import { Link } from "react-router";

function NotFound({ theme }) {
  return (
    <div className={`d-flex flex-column justify-content-center align-items-center min-vh-100 ${theme === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'}` }>
      <h1 className="display-1 fw-bold">404</h1>
      <p className="fs-3 mb-4">Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-primary px-4 py-2 fw-bold">Go Home</Link>
    </div>
  );
}

export default NotFound;
