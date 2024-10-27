import { Link } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";
import { FaUser } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="border-b  bg-[#FCFBFB] px-3 w-full ">
      <div className="flex  justify-between   mx-auto py-3    items-center ">
        <Link to="/">
          <h1 className="text-[48px]   font-bold">
            <span className="text-primary">Velo</span>Cart
          </h1>
        </Link>

        <form className="w-[400px] mx-auto">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none"
              placeholder="Search Mockups, Logos..."
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5  bottom-4  "
            >
              <FaBarsStaggered className="text-primary  text-2xl" />
            </button>
          </div>
        </form>
        <ul className="lg:flex justify-between text-secondary hidden items-center gap-6">
          <li className="text-md flex items-center gap-1">
            <FaUser className="text-primary text-md" />

            <Link to="/login">Sign Up / Sign In</Link>
          </li>
          <li className="text-md flex items-center gap-1">
            <IoMdCart className="text-primary text-md" />
            <Link to="/Register">Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
