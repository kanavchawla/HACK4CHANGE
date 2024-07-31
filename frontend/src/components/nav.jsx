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
    <nav className="navbar fixed top-0 z-50 w-full bg-opacity-60 bg-white backdrop-blur-lg shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-2 px-4">
        <div className="flex items-center">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img src={image} className="w-8 h-8 rounded-full" alt="Logo" />
          </Link>
        </div>

        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                to="/"
                className="btn btn-ghost rounded-btn text-sm px-2 py-1"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/lms"
                className="btn btn-ghost rounded-btn text-sm px-2 py-1"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to="/risk"
                className="btn btn-ghost rounded-btn text-sm px-2 py-1"
              >
                Risk & Analysis
              </Link>
            </li>
            <li>
              <Link
                to="/guidex"
                className="btn btn-ghost rounded-btn text-sm px-2 py-1"
              >
                AI
              </Link>
            </li>
            <li>
              <Link
                to="/search"
                className="btn btn-ghost rounded-btn text-sm px-2 py-1"
              >
                Resource Finder
              </Link>
            </li>
            <li tabIndex={0} className="relative">
              <button
                onClick={toggleDropdown}
                className="btn btn-ghost rounded-btn text-sm px-2 py-1"
              >
                Community
              </button>
              {isDropdownOpen && (
                <ul className="p-2 bg-white bg-opacity-90 shadow-lg rounded-box absolute top-full mt-2 w-52 backdrop-blur-md">
                  <li>
                    <Link to="/AskQuestion" className="text-sm px-2 py-1">
                      Ask a Question
                    </Link>
                  </li>
                  <li>
                    <Link to="/ViewQuestion" className="text-sm px-2 py-1">
                      View Questions
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-2">
          {!token ? (
            <Link to="/login" className="btn btn-primary text-sm px-3 py-1">
              Sign In
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="btn btn-primary text-sm px-3 py-1"
            >
              Sign Out
            </button>
          )}
          <div className="dropdown lg:hidden">
            <button tabIndex={0} className="btn btn-ghost text-sm px-2 py-1">
              <span className="sr-only">Open Menu</span>
              <svg
                className="w-5 h-5"
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
              className="dropdown-content menu p-2 shadow bg-white bg-opacity-90 rounded-box w-40 mt-2 backdrop-blur-md"
            >
              <li>
                <Link to="/" className="text-sm px-2 py-1">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/lms" className="text-sm px-2 py-1">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/risk" className="text-sm px-2 py-1">
                  Risk & Analysis
                </Link>
              </li>
              <li>
                <Link to="/guidex" className="text-sm px-2 py-1">
                  AI
                </Link>
              </li>
              <li>
                <Link to="/search" className="text-sm px-2 py-1">
                  Resource Finder
                </Link>
              </li>
              <li>
                <Link to="/AskQuestion" className="text-sm px-2 py-1">
                  Ask a Question
                </Link>
              </li>
              <li>
                <Link to="/ViewQuestion" className="text-sm px-2 py-1">
                  View Questions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
