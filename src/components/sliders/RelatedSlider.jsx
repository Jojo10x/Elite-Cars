import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import productsData from '../../data/productsData';
import ProductCard from '../product/ProductCard';
import PropTypes from 'prop-types';

import 'swiper/scss';
import 'swiper/scss/pagination';


SwiperCore.use([]);

const RelatedSlider = (props) => {

    const { category } = props;

    const relatedProduct = productsData.filter(item => item.category === category);

    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={"auto"}
            breakpoints={{
                480: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 4,
                },
            }}
            className="related_swiper"
        >
            {
                relatedProduct.map(item => (
                    <SwiperSlide key={item.id}>
                        <ProductCard {...item} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
};
RelatedSlider.propTypes = {
    category: PropTypes.any.isRequired, // Validate the 'category' prop
};

export default RelatedSlider;