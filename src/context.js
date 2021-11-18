import React, { useContext, useState } from "react";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [list, setList] = useState([]);
  const [amount, setAmount] = useState(1);
  const [totalItem, setTotalItem] = useState(0);
  const handleAdd = (item) => {
    setList([...list, { id: Date.now(), amount: item.amount }]);
    setTotalItem(totalItem + item.amount);
  };
  const handleRemove = (id) => {
      const newList = list.filter((item)=>item.id !== id)
      setList(newList)
  }
  const handleChange = (amount) => {
      setTotalItem(totalItem - amount)
  }
  const value = {
    list,
    setList,
    totalItem,
    setTotalItem,
    handleAdd,
    amount,
    setAmount,
    handleRemove,
    handleChange,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
