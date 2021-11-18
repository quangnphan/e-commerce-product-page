import CartImage from "../images/icon-cart.svg";
import Minus from "../images/icon-minus.svg";
import Plus from "../images/icon-plus.svg";
import { useGlobalContext } from "../context";
const Counter = () => {
  const { handleAdd, amount, setAmount } = useGlobalContext();
  return (
    <div className="counter-wrapper">
      <div className="counter">
        <button
          onClick={() => {
            if (amount === 1) {
              return;
            } else {
              setAmount(amount - 1);
            }
          }}
        >
          <img src={Minus} alt="minus-img"></img>
        </button>
        <div className="amount">{amount}</div>
        <button onClick={() => setAmount(amount + 1)}><img src={Plus} alt="plus-img"></img></button>
      </div>
      <div className="add-cart">
        <button onClick={(item)=>{
            setAmount(1);
            handleAdd({id: item.id,amount:amount})
        }}>
          <img src={CartImage} alt="icon-cart"></img> Add to cart
        </button>
      </div>
    </div>
  );
};

export default Counter;
