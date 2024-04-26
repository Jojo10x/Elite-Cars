import { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from  "/Users/joey/Desktop/BestJob/Mine/E-com/Luxcars/Luxcars/src/app.module.css"


function WhereIs(element) {
  /* Is element visible in viewport? Return "b" if before, "v" if visible and "a" if after */
  const rect = element.getBoundingClientRect();
  if (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
    return "v"; // Visible
  if (rect.top < 0 || rect.left < 0) return "b"; // Before
  return "a"; // After
}

function BarImage({ id, src, alt }) {
  return (
    <li>
      <a href={`#${id}`}>
        <img src={src} alt={alt} />
      </a>
    </li>
  );
}

BarImage.propTypes = {
  id: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

function Bar({ id, imgs, before }) {
  const imgArray = Array.from(imgs);

  return (
    <div id={id} className={styles.bar}>
      <ul>
        {imgArray.map((img, index) => {
          const where_is = WhereIs(img);
          return (
            <BarImage
              key={index}
              id={id + '_' + img.id}
              src={img.src}
              alt={img.alt}
              className={`${styles.barImage} ${where_is === (before ? 'b' : 'a') ? '' : styles.hidden}`}
            />
          );
        })}
      </ul>
    </div>
  );
}

Bar.propTypes = {
  id: PropTypes.string.isRequired,
  imgs: PropTypes.array.isRequired,
  before: PropTypes.bool,
};

function MyComponent() {
  useEffect(() => {
    loadBars();
    window.addEventListener('scroll', refreshBars);
    return () => window.removeEventListener('scroll', refreshBars);
  }, []);

  function loadBars() {
    const imgs = document.querySelectorAll("main img"); // All main images
    const bar_before = document.querySelector("#bar_before ul");
    const bar_after = document.querySelector("#bar_after ul");
    for (let i = 0; i < imgs.length; i++) {
      const img = imgs[i];
      const where_is = WhereIs(img);
      /* Append HTML of image to bars */
      bar_before.insertAdjacentHTML(
        "beforeend",
        `<li ${where_is == "b" ? "" : "class='hidden'"} id="bb_${img.id}"> <a href="#${img.id}"><img src="${img.src}" alt="${img.alt}" /></a></li>`
      ); // Add class as hidden if is not before
      bar_after.insertAdjacentHTML(
        "beforeend",
        `<li ${where_is == "a" ? "" : "class='hidden'"} id="ba_${img.id}"> <a href="#${img.id}"><img src="${img.src}" alt="${img.alt}" /></a></li>`
      );
    }
  }

  function refreshBars() {
    const imgs = document.querySelectorAll("main img"); // All main images

    /* For each img */
    for (let i = 0; i < imgs.length; i++) {
      const img = imgs[i];
      const where_is = WhereIs(img);

      /* Change class of images if needed */
      document.querySelector(`#bb_${img.id}`).className =
        where_is == "b" ? "" : "hidden"; // Visible if before current - show on *before* bar

      document.querySelector(`#ba_${img.id}`).className =
        where_is == "a" ? "" : "hidden"; // Visible if before current - show on *after* bar
    }
  }

  return (
    <>
      <Bar id="bar_before" imgs={document.querySelectorAll("main img")} before />
      <main onScroll={refreshBars}>
        <ul>
          <li> <img id="img_0" src="https://source.unsplash.com/ezSFnAFi9hY/500x500" alt="cut citrus fruits. " /> Cut Citrus Fruits.</li>
          <li> <img id="img_1" src="https://source.unsplash.com/TIGDsyy0TK4/500x500" alt="sliced mango. " />Sliced Mango.</li>
          <li> <img id="img_2" src="https://source.unsplash.com/TdDtTu2rv4s/500x500" alt="a bunch of blueberries. " />A Bunch of Blueberries.</li>
          <li> <img id="img_3" src="https://source.unsplash.com/eudGUrDdBB0/500x500" alt="a pineapple sitting on a table. " />A Pineapple Sitting on a Table.</li>
        </ul>
      </main>
      <Bar id="bar_after" imgs={document.querySelectorAll("main img")} />
    </>
  );
}

export default MyComponent;