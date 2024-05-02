import {  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import videoBg from '../assets/lambo.mp4'

const VideoPage = () => {
  const [showModal, setShowModal] = useState(true);

  const navigate = useNavigate();

  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/');
  };
  const [subValue, setSubValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubValue('');
        alert('Thankyou, you are subscribed to receive our daily newsletter');
    };
  return (
    <>
       
        <div className="content_news">
        <video src={videoBg} autoPlay loop muted />
          <div className="container">
            {showModal && (
              <div className="modal_news">
                <div className="modal_content-news">
                  <span className="close_news" onClick={handleCloseModal}>
                    &times;
                  </span>
                  <div className="foot_about">
                    <h1 className='news_header'>ELITE CARS</h1>
                    <div className='img-news'></div>
                    <div className="foot_subs">
                      <p>
                        Subscribe to our Email alerts to receive updates on new
                        hypercars
                      </p>
                      <form onSubmit={handleSubmit}>
                        <input
                          type="email"
                          className="input_field"
                          placeholder="Email Address*"
                          required
                          value={subValue}
                          onChange={(e) => setSubValue(e.target.value)}
                        />
                        <button type="submit" className="btn">
                          Subscribe
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
    </>
  );
};

export default VideoPage;