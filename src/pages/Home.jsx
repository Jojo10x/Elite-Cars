import SectionsHead from '../components/common/SectionsHead';
import TopProducts from '../components/product/TopProducts';
import Services from '../components/common/Services';
import FullScreenVideo from '../components/common/Video';
import Slider from '../components/sliders/VideoSlider';
import { Link } from 'react-router-dom';
import 'swiper/scss';
import NewsLetter from '../components/common/NewsLetter';

const Home = () => {

    return (
      <main>
        <section id="hero">
          <FullScreenVideo />
        </section>

        <section id="featured" className="section">
          <div className="container">
            <SectionsHead heading="Featured Elite Cars" />
            <Slider />
          </div>
          <Link to="/gallery">
          <button className="featured_btn">Gallery</button>
        </Link>
        </section>

        <section id="products" className="section">
          <div className="container">
            <SectionsHead heading="Top Elite Cars" />
            <TopProducts />
          </div>
        </section>

        <Services />
        <NewsLetter/>
      </main>
    );
};

export default Home;