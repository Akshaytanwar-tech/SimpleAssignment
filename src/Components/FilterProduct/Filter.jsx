import React from "react";
import fetchProducts from "../../Apis/fetchProducts";

const Filter = ({ setproducts }) => {
  const range = ["0-50", "50-100", "100-150", "150-200"];
  const HandleFilter = async (e) => {
    const allProducts = await fetchProducts();
    if (e.target.value == "Above200") {
      const products = allProducts.filter((e) => {
        return e.price > 200;
      });
      setproducts(products);
    } else if (e.target.value == "All") {
      setproducts(allProducts);
    } else {
      const str = e.target.value.split("-");
      const products = allProducts.filter((e) => {
        return e.price > str[0] && e.price < str[1];
      });
      setproducts(products);
    }
  };
  return (
    <>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          value="All"
          onClick={HandleFilter}
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          All
        </label>
      </div>
      {range.map((range) => {
        const str = range.split("-");
        return (
          <>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                value={range}
                onClick={HandleFilter}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                {`₹${str[0]} - ₹${str[1]}`}
              </label>
            </div>
          </>
        );
      })}
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          value="Above200"
          onClick={HandleFilter}
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          Above ₹200
        </label>
      </div>
    </>
  );
};

export default Filter;
