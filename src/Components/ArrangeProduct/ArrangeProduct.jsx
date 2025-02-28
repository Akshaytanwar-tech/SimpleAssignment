import React, { useEffect, useState } from "react";
import fetchProducts from "../../Apis/fetchProducts";

const ArrangeProduct = ({ setproducts }) => {
  const [products, setProducts] = useState([]);

  const HandleFilterAss = async () => {
    const res = await fetchProducts();
    const sortedList = res.sort((a, b) => a.price - b.price);
    setproducts(sortedList);
  };
  const HandleFilterDess = async () => {
    const res = await fetchProducts();
    const sortedList = res.sort((a, b) => b.price - a.price);
    setproducts(sortedList);
  };
  return (
    <>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          value="Above200"
          onClick={HandleFilterAss}
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          Ascending
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          value="Above200"
          onClick={HandleFilterDess}
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          Descending
        </label>
      </div>
    </>
  );
};

export default ArrangeProduct;
