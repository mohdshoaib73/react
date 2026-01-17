import { Outlet ,Link} from "react-router";
export default function Details() {
  return (
    <>
    <nav>
        <Link to="Home"> Home</Link>
        <Link to="Hello"> Hello</Link>
    </nav>
      <h1>Details</h1>
      <p>Welcome to the details page!</p>
      <Outlet />
    </>
  );
}