import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
        <Outlet />
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/ActiveSession">Active Session</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
            </ul>
        </nav>
    </>
  )
};

export default Layout;