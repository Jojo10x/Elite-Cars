import reviewsData from '../../data/reviewsData';
import useActive from '../../hooks/useActive';
import ProductReviews from './ProductReviews';


const ProductSummary = (props) => {

    const { brand, title, info, category, type, connectivity } = props;

    const { active, handleActive, activeClass } = useActive('specs');


    return (
      <>
        <section id="product_summary" className="section">
          <div className="container">
            {/*===== Product-Summary-Tabs =====*/}
            <div className="prod_summary_tabs">
              <ul className="tabs">
                <li
                  className={`tabs_item ${activeClass("specs")}`}
                  onClick={() => handleActive("specs")}
                >
                  Specifications
                </li>
                <li
                  className={`tabs_item ${activeClass("overview")}`}
                  onClick={() => handleActive("overview")}
                >
                  Overview
                </li>
                <li
                  className={`tabs_item ${activeClass("reviews")}`}
                  onClick={() => handleActive("reviews")}
                >
                  Reviews
                </li>
              </ul>
            </div>

            {/*===== Product-Summary-Details =====*/}
            <div className="prod_summary_details">
              {active === "specs" ? (
                <div className="prod_specs">
                  <ul>
                    <li>
                      <span>Brand</span>
                      <span>{brand}</span>
                    </li>
                    <li>
                      <span>Model</span>
                      <span>{title}</span>
                    </li>
                    <li>
                      <span>Generic Name</span>
                      <span>{category}</span>
                    </li>
                  </ul>
                </div>
              ) : active === "overview" ? (
                <div className="prod_overview">
                  <h3>
                    The <span>{title}</span> {info} delivers unparalleled
                    performance and luxury
                  </h3>
                  <ul>
                    <li>Precision Engineering for Optimal Performance</li>
                    <li>Sumptuous Comfort and Elegance</li>
                    <li>
                      Advanced Technology for a Seamless Driving Experience
                    </li>
                  </ul>
                  <p>
                    Experience the epitome of automotive excellence with the{" "}
                    <b>
                      {title} {info}
                    </b>
                    . Crafted with meticulous attention to detail, this{" "}
                    {category} offers an unparalleled driving experience,
                    combining breathtaking performance with uncompromising
                    luxury. Elevate every journey with exquisite craftsmanship,
                    cutting-edge technology, and unrivaled comfort, making each
                    drive an unforgettable experience.
                  </p>
                </div>
              ) : (
                <div className="prod_reviews">
                  <ul>
                    {reviewsData.map((item) => (
                      <ProductReviews key={item.id} {...item} />
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      </>
    );
};

export default ProductSummary;