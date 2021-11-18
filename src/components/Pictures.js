import { useState,useRef } from "react";
import Image1 from "../images/image-product-1.jpg";
import Image2 from "../images/image-product-2.jpg";
import Image3 from "../images/image-product-3.jpg";
import Image4 from "../images/image-product-4.jpg";
import Thumbnail1 from "../images/image-product-1-thumbnail.jpg";
import Thumbnail2 from "../images/image-product-2-thumbnail.jpg";
import Thumbnail3 from "../images/image-product-3-thumbnail.jpg";
import Thumbnail4 from "../images/image-product-4-thumbnail.jpg";
import Lightbox from "./Lightbox";
import Close from "../images/icon-close.svg";

const Pictures = () => {
  const box = useRef(null);
  const [image, setImage] = useState(Image1);
  const changeImage = (e) => {
    if (e.target.id === "img1") {
      setImage(Image1);
    }
    if (e.target.id === "img2") {
      setImage(Image2);
    }
    if (e.target.id === "img3") {
      setImage(Image3);
    }
    if (e.target.id === "img4") {
      setImage(Image4);
    }
  };

  return (
    <div className="pictures">
      <div className="image">
        <img onClick={()=>{
          box.current.style.display = "block"
        }} src={image} alt="thumbnail"></img>
      </div>
      <div className="images">
        <img
          onClick={changeImage}
          id="img1"
          src={Thumbnail1}
          alt="shoes-img"
        ></img>
        <img
          onClick={changeImage}
          id="img2"
          src={Thumbnail2}
          alt="shoes-img"
        ></img>
        <img
          onClick={changeImage}
          id="img3"
          src={Thumbnail3}
          alt="shoes-img"
        ></img>
        <img
          onClick={changeImage}
          id="img4"
          src={Thumbnail4}
          alt="shoes-img"
        ></img>
      </div>
      <div className="lightbox-wrapper" ref={box}>
        <div>
          <img onClick={()=>{
          box.current.style.display = "none"
        }} className="lb-close" src={Close} alt="close"></img>
        </div>
        <Lightbox />
      </div>
    </div>
  );
};

export default Pictures;
