import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <section>
        <Link id="link" to={"/"}>
          Home
        </Link>
        <Link id="link" to={"/saved-recipes"}>
          Saved Recipes
        </Link>
        <Link id="link" to={"/shopping-list"}>
          Shopping List
        </Link>
      </section>
    </nav>
  );
};

export default Nav;
