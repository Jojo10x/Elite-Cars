import { useState, useEffect, useRef } from "react";
import videoBg from "../../assets/lambo.mp4";
import videoA from "../../assets/barbus.mp4";
import videoP from "../../assets/pagani.mp4";
import videoBMW from "../../assets/bmw.mp4";
import videoD from "../../assets/por.mp4";
import videoB from "../../assets/vid.mp4";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalVideoIndex, setModalVideoIndex] = useState(0);
  const videos = [
    { index: 0, src: videoBg, text: "Lamborghini" },
    { index: 1, src: videoB, text: "Rolls Royce" },
    { index: 2, src: videoD, text: "Porsche" },
    { index: 3, src: videoBMW, text: "BMW " },
    { index: 4, src: videoP, text: "Pagani" },
    { index: 5, src: videoA, text: "G-Wagon" },
  ];

  const modalRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
    setButtonClicked(true);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
    setButtonClicked(true);
  };

  const openModal = (index) => {
    setModalVideoIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setButtonClicked(false); 
    }, 2000); 

    return () => clearTimeout(timeoutId);
  }, [buttonClicked]);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const generateCarouselIndexes = () => {
    const indexes = [];
    for (let i = currentIndex; i < currentIndex + 3; i++) {
      indexes.push(i % videos.length);
    }
    return indexes;
  };

  return (
    <>
      <div className="slider">
        <div className="video-carousel">
          <div className="video-container">
          {generateCarouselIndexes().map((index) => (
              <div
                key={index}
                className="video-box"
                onClick={() => openModal(index)}
              >
                <video src={videos[index].src} autoPlay loop muted />
                <p>{videos[index].text}</p>
              </div>
            ))}
          </div>
        </div>
        {isModalOpen && (
          <>
            <button className="close" onClick={closeModal}>
              Close
            </button>
            <div className="modal">
              <div ref={modalRef} className="modal-content">
                <video src={videos[modalVideoIndex].src} autoPlay controls />
              </div>
            </div>
          </>
        )}
      </div>
      <div className="controls">
        <button onClick={prevSlide}>Previous</button>
        <span>
          {/* {currentIndex + 1} / {videos.length} */}
        </span>
        <button onClick={nextSlide}>Next</button>
      </div>
    </>
  );
};

export default Slider;
