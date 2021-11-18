import { useState, useEffect } from "react";
import Image1 from "../images/image-product-1.jpg";
import Image2 from "../images/image-product-2.jpg";
import Image3 from "../images/image-product-3.jpg";
import Image4 from "../images/image-product-4.jpg";
import Prev from "../images/icon-previous.svg";
import Next from "../images/icon-next.svg";

const Lightbox = () => {
  const images = [Image1, Image2, Image3, Image4];
  // eslint-disable-next-line
  const [image, setImage] = useState(images);
  const [index, setIndex] = useState(0);
  const handlePrev = () => {
    setIndex(index - 1);
  };
  const handleNext = () => {
    setIndex(index + 1);
  };
  useEffect(() => {
    const lastIndex = image.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, image]);
  return (
      <div className="lightbox">
        <button onClick={handlePrev}>
          <img src={Prev} alt="prev"></img>
        </button>
        <img
          className="lightbox-img"
          src={image[index]}
          alt="lightbox-img"
        ></img>
        <button onClick={handleNext}>
          <img src={Next} alt="next"></img>
        </button>
      </div>
  );
};
export default Lightbox;
