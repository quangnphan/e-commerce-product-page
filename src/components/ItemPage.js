import Pictures from "./Pictures";
import Counter from "./Counter";

const ItemPage = () => {
  return (
    <div className="wrapper">
      <Pictures />
      <div className="info">
        <h3>sneaker company</h3>
        <h1>fall limited edition sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather ccan offer.
        </p>
        <div className="price">$125.00 <span>50%</span></div>
        <div className="discount">$250</div>
        <div>
          <Counter />
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
