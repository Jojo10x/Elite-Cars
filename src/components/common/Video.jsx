import videoBg from '/Users/joey/Desktop/BestJob/Mine/E-com/Luxcars/Luxcars/src/assets/lambo.mp4'


const FullScreenVideo = () => {

  function scrollToProducts() {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <>
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted />
      <div className="content">
        <h1 className='featured_header' >Elite Car Hub</h1>
        <p className='featured_header' >Explore Our Exquisite Hyper Cars Collection</p>
        <button className='featured_btn' onClick={scrollToProducts}>Explore</button>
      </div>
    </>
  );
};

export default FullScreenVideo;
