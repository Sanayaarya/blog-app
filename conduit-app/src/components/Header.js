import { Link } from 'react-router-dom';
let user = JSON.parse(localStorage.getItem('user'));

function Header() {
  return (
    <div className="flex justify-between py-4 px-44">
      <Link to="/" className="flex-1 text-2xl font-bold text-green font-Roboto">
        conduit
      </Link>
      <nav className="flex-1 text-right">
        <Link to="/" className="mx-3">
          Home
        </Link>
        <Link to="/login" className={!user ? 'mx-3' : 'mx-0'}>
          {!user ? 'Sign in' : ''}
        </Link>
        <Link to="/register" className={!user ? 'mx-3' : 'mx-0'}>
          {!user ? 'Sign up' : ''}
        </Link>
        <Link to="/new" className="mx-3">
          {user ? 'New Article' : ''}
        </Link>
        <Link to="/profile" className="mx-3">
          {user ? 'Profile' : ''}
        </Link>
      </nav>
    </div>
  );
}

export default Header;