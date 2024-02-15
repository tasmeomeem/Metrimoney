import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useAdmin from "../../Hook/useAdmin";
import useCart from "../../Hook/useCart";


// import { FaShoppingCart } from 'react-icons/fa';
// import useCart from "../../../hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
    const [cart] = useCart();
  // const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/biodata">Bio_data</Link>
      </li>
      <li>
        <Link to="/about">AboutUs</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>

     
        {user ? (
          <>
            {/* <span>{user?.displayName}</span> */}
            <li onClick={handleLogOut} className="btn btn-ghost">
              LogOut
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
     

      {user && isAdmin && (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}
      {user && !isAdmin && (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}

      <li>
        <Link to="/dashboard/cart">
          <button className="btn">
            <FaShoppingCart className="mr-2"></FaShoppingCart>
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </Link>
      </li>
    </>
  );

  return (
    <>
      <div className="container mx-auto navbar  bg-opacity-30 max-w-screen-xl bg-black text-white">
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
              className="menu menu-compact z-50 dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Metrimony</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end ">
          {user && (
            <img className="rounded-full h-10 w-10" src={user.photoURL} />
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
