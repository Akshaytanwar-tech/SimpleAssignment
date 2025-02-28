import React, { useEffect, useState } from "react";
import "./Products.css";
import fetchProducts from "../../Apis/fetchProducts";
import fetchCategories from "../../Apis/fetchCategories";
import Filter from "../FilterProduct/Filter";
import { useNavigate } from "react-router-dom";
const Products = () => {
  const [products, setproducts] = useState([]);
  const [categories, setcategories] = useState([]);
  const [search, setsearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts().then((res) => {
      setproducts(res);
    });
    fetchCategories().then((res) => {
      setcategories(res);
    });
  }, []);

  const HandleCategory = async (e, cat) => {
    e.preventDefault();
    const res = await fetchProducts();
    // console.log(res);
    if (cat == "All") {
      setproducts(res);
    } else {
      const categoryProd = res.filter((e) => {
        return e.category == cat;
      });

      setproducts(categoryProd);
    }
  };

  const HandleSearchChange = (e) => {
    setsearch(e.target.value);
  };

  const HandleSearch = async () => {
    const res = await fetchProducts();
    const products = res.filter((e) => {
      return e.title.toLowerCase().includes(search.toLowerCase());
    });
    setproducts(products);
  };

  const HandleSingleProduct = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <>
      <div class="container mt-4">
        <div class="row">
          <aside class="col-lg-3">
            <div class="mb-4 d-flex">
              <input
                type="text"
                class="form-control"
                placeholder="Search..."
                onChange={HandleSearchChange}
              />
              <button className="decoration-none" onClick={HandleSearch}>
                <i class="bi bi-search"></i>
              </button>
            </div>

            <div class="mb-4">
              <h5 class="fw-bold">CATEGORIES</h5>
              <div class="category-list">
                <p
                  style={{ cursor: "pointer" }}
                  onClick={(e) => {
                    HandleCategory(e, "All");
                  }}
                >
                  All
                </p>
                {categories &&
                  categories.map((cat) => {
                    const str = cat.charAt(0).toUpperCase() + cat.slice(1);
                    return (
                      <p
                        onClick={(e) => {
                          HandleCategory(e, cat);
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        {str}
                      </p>
                    );
                  })}
              </div>
            </div>

            <div>
              <h5 class="fw-bold">FILTER PRICE</h5>
              <div class="price-filter">
                <Filter setproducts={setproducts} />
              </div>
            </div>
          </aside>

          <section class="col-lg-9">
            <div class="row">
              {products &&
                products.map((e) => {
                  return (
                    <>
                      <div
                        class="col-md-4"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          HandleSingleProduct(e.id);
                        }}
                      >
                        <div class="product-card position-relative">
                          <img
                            src={e.image}
                            style={{ height: "200px", width: "200px" }}
                            alt="Jacket"
                          />
                          <h6>{e.title}</h6>

                          <div class="fw-bold" className="d-flex justify-content-between">
                            ₹{e.price}
                            <div class="icons">
                              <i class="bi bi-heart"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Products;
