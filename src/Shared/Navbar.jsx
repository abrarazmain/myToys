import { Link } from "react-router-dom";

const Navbar = () => {
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
              <Link>Home</Link>
            </li>

            <li>
              <Link>All Toys</Link>
            </li>
            <li>
              <Link>My Toys</Link>
            </li>

            <li>
              <Link>Add A Toy</Link>
            </li>
            <li>
              <Link>Blog</Link>
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
          <li>
            <Link>My Toys</Link>
          </li>

          <li>
            <Link>Add A Toy</Link>
          </li>
          <li>
            <Link>Blog</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to='/login' className="btn hover:bg-[#f2f7f2] bg-white text-black font-bold  border-none">
         Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
