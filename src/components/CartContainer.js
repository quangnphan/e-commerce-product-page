import { useGlobalContext } from "../context";
import ItemImage from "../images/image-product-1-thumbnail.jpg";
import TrashImg from "../images/icon-delete.svg";

const CartContainer = () => {
  const { list, handleRemove, handleChange } = useGlobalContext();
  return (
    <div className="cart-container">
      <div className="cart-heading">Cart</div>
      <div className="cart-list">
        {list < 1 ? (
          <div>Your cart is empty.</div>
        ) : (
          list.map((item, key) => {
            return (
              <div className="item-wrapper" key={key}>
                <div className="item-img">
                  <img src={ItemImage} alt=""></img>
                </div>
                <div className="product">
                  <div className="product-name">
                    Fall Limited Edition Sneakers
                  </div>
                  <div className="price">
                    $125 x {item.amount}{" "}
                    <div className="total">${125 * item.amount}</div>
                  </div>
                </div>
                <div className="trash">
                  <button
                    onClick={() => {
                      handleRemove(item.id);
                      handleChange(item.amount);
                    }}
                  >
                    <img src={TrashImg} alt=""></img>
                  </button>
                </div>
              </div>
            );
          })
        )}
        {list < 1 ? "" : <button className="checkout">Checkout</button>}
      </div>
    </div>
  );
};

export default CartContainer;
