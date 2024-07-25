import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div>
        <img src="/allbeers.jpg" alt="allbeers" />
        <Link to="/randomproduct">
          <h2>All Beers</h2>
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a,
          eleifend vitae varius venenatis.
        </p>
      </div>
      <div>
        <img src="/beers.png" alt="beers" />
        <h2>Random Beer</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a,
          eleifend vitae varius venenatis.
        </p>
      </div>
    </>
  );
};

export default Home;
