import { Link } from "react-router-dom";

const NewsLetter = () => {
  return (
    <>
      <section id="image-bg" className="section">
        <div className="container">
          <Link to="/newsletter">
            <div className="btn-container">
              <h3>STAY UP TO DATE!</h3>
              <button>ELITE CARS NEWS</button>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default NewsLetter;
