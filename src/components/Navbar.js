import { useState, useRef, useEffect } from "react";
import Logo from "../images/logo.svg";
import CartImage from "../images/icon-cart.svg";
import Avatar from "../images/image-avatar.png";
import Hamburger from "../images/icon-menu.svg";
import Close from "../images/icon-close.svg";
import CartContainer from "./CartContainer";
import { useGlobalContext } from "../context";
const Navbar = () => {
  const { totalItem, list } = useGlobalContext();
  const [showCart, setShowCart] = useState(true);
  const [showMenu,setShowMenu] = useState(true);
  const cartRef = useRef(null);
  const menuRef = useRef(null);
  useEffect(() => {
    if (showCart) {
      cartRef.current.style.display = "none";
    } else {
      cartRef.current.style.display = "block";
    }
  }, [showCart]);
  useEffect(() => {
    if (showMenu) {
      menuRef.current.style.display = "none";
    } else {
      menuRef.current.style.display = "block";
    }
  }, [showMenu]);
  return (
    <div className="nav-container">
      <div className="navbar">
        <div className="nav-left">
          <div className="hamburger">
            <img onClick={()=>{setShowMenu(!showMenu)}} src={showMenu?Hamburger:Close} alt="hbg-icon"></img>
          </div>
          <div className="logo">
            <img src={Logo} alt="logo"></img>
          </div>
          <div className="links">
            <ul>
              <li>
                <a href="#collections">Collections</a>
              </li>
              <li>
                <a href="#men">Men</a>
              </li>
              <li>
                <a href="#women">Women</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="mobile-list">
            <ul ref={menuRef}>
              <li>
                <a href="#collections">Collections</a>
              </li>
              <li>
                <a href="#men">Men</a>
              </li>
              <li>
                <a href="#women">Women</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="nav-right">
          <div onClick={() => setShowCart(!showCart)} className="cart">
            <img src={CartImage} alt="cart"></img>
            <div className={list < 1 ? "hidden" : "item-count "}>{totalItem}</div>
          </div>
          <div className="avatar">
            <img src={Avatar} alt="avatar"></img>
          </div>
        </div>
      </div>
      <div ref={cartRef}>
        <CartContainer />
      </div>
    </div>
  );
};

export default Navbar;
