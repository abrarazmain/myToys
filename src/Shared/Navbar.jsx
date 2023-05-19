import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div className="navbar bg-[#b18aff] rounded my-3">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink>Home</NavLink>
            </li>

            {user && (
              <>
                <li>
                  <NavLink>My Toys</NavLink>
                </li>

                <li>
                  <NavLink>Add A Toy</NavLink>
                </li>
              </>
            )}
            <li>
              <NavLink>Blog</NavLink>
            </li>
          </ul>
        </div>
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-50 rounded-full">
            <img src="https://i.ibb.co/xhLH8Gy/download.png" />
          </div>
        </label>
        <Link className="btn btn-ghost normal-case text-xl text-white">
          myToys
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white">
          <li>
            <Link>Home</Link>
          </li>

          <li>
            <Link>All Toys</Link>
          </li>
          {user && (
            <>
              {" "}
              <li>
                <Link>My Toys</Link>
              </li>
              <li>
                <Link to="/addToys">Add A Toy</Link>
              </li>
            </>
          )}
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user && (
          <div className="w-10 rounded mr-4 group relative  flex justify-center">
            <img src={user.photoURL} />
            <span className="absolute right-10 scale-0 rounded bg-gray-800 p-4 text-xs text-white group-hover:scale-100">
              {user.displayName}{" "}
            </span>
          </div>
        )}
        {user ? (
          <NavLink onClick={logOut} className="btn btn-primary border-none">
            Logout
          </NavLink>
        ) : (
          <NavLink
            to="/login"
            className="btn hover:bg-[#f2f7f2] bg-white text-black font-bold  border-none"
          >
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
