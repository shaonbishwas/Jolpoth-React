import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  let links = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Home
      </NavLink>
      
      <NavLink
        to="/blogs"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Blogs
      </NavLink>
      
      <NavLink
        to="/about"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        About Us
      </NavLink>
      
      <NavLink
        to="/ourtours"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Our Tours
      </NavLink>
      
      <NavLink
        to="/travelstory"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Travel Story
      </NavLink>
      
      <NavLink
        to="/contact"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Contact Us
      </NavLink>
      
    </>
  );
  return (
    <div className="right-0 left-0 mx-auto fixed z-50 bg-black bg-opacity-20">
      <div className="navbar max-w-[1400px] mx-auto text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="flex gap-3 menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl font-extrabold font-sans">
            Jolpoth
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-16">{links}</ul>
        </div>
        <div className="navbar-end hidden">
          <Link
            className="btn bg-transparent text-white"
           to="register"
          >
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
};
