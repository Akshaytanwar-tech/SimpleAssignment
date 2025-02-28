import React, { useEffect, useState } from "react";
import fetchProductWithId from "../../Apis/fetchProductWithId";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const [product, setproduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetchProductWithId(id).then((res) => {
      setproduct(res);
    });
  }, []);
  return (
    <>
      <div>
        <div className="container mt-3 card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={product.image}
                className="img-fluid rounded-start"
                alt="This is the of the product details"
                style={{ maxHeight: "20rem" }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <p className="card-title">{product.category}</p>
                <h5 className="card-text">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="h2">₹{product.price}</p>
                <button
                  type="button"
                  className="btn btn-primary px-3 mx-2 btn-lg"
                  onClick={"handleBuyProduct"}
                >
                  Buy Now
                </button>
                <button
                  type="button"
                  onClick={"HandleAdditemCart"}
                  className="btn btn-warning px-3 mx-2 btn-lg"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
