import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../services/operations/auth";
import image from "../assets/image.png";

const Nav = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout(navigate));
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar bg-base-100 shadow-lg sticky top-0 z-50 h-5">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img src={image} className="w-10 h-10 rounded-full" alt="Logo" />
          </Link>
        </div>

        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/" className="btn btn-ghost rounded-btn">
                Home
              </Link>
            </li>
            <li>
              <Link to="/lms" className="btn btn-ghost rounded-btn">
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/risk" className="btn btn-ghost rounded-btn">
                Risk & Analysis
              </Link>
            </li>
            <li>
              <Link to="/guidex" className="btn btn-ghost rounded-btn">
                AI
              </Link>
            </li>
            <li>
              <Link to="/search" className="btn btn-ghost rounded-btn">
                Resource Finder
              </Link>
            </li>
            <li tabIndex={0} className="relative">
              <button
                onClick={toggleDropdown}
                className="btn btn-ghost rounded-btn"
              >
                Community
              </button>
              {isDropdownOpen && (
                <ul className="p-2 bg-base-100 shadow-lg rounded-box absolute top-full mt-2 w-52">
                  <li>
                    <Link to="/AskQuestion">Ask a Question</Link>
                  </li>
                  <li>
                    <Link to="/ViewQuestion">View Questions</Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-4">
          {!token ? (
            <Link to="/login" className="btn btn-primary">
              Sign In
            </Link>
          ) : (
            <button onClick={handleLogout} className="btn btn-primary">
              Sign Out
            </button>
          )}
          <div className="dropdown lg:hidden">
            <button tabIndex={0} className="btn btn-ghost">
              <span className="sr-only">Open Menu</span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-3"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/lms">Blogs</Link>
              </li>
              <li>
                <Link to="/risk">Risk & Analysis</Link>
              </li>
              <li>
                <Link to="/guidex">AI</Link>
              </li>
              <li>
                <Link to="/search">Resource Finder</Link>
              </li>
              <li>
                <Link to="/AskQuestion">Ask a Question</Link>
              </li>
              <li>
                <Link to="/ViewQuestion">View Questions</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
