import axios from "axios";
import { useEffect, useState } from "react";
import "./Product.css"; // Import the CSS file

function Product() {
  const [product, setProduct] = useState([]);
  const [limit, setLimit] = useState(1);

  const getDataFromServer = () => {
    axios
      .get(`http://localhost:3000/products?_page=${limit}&_limit=4`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDataFromServer();
  }, [limit]);

  return (
    <div className="product-container">
      <div className="product-grid">
        {product.map((el) => (
          <div key={el.id} className="product-card">
            <img src={el.image} alt={el.title} className="product-image" />
            <h1 className="product-title">{el.title}</h1>
            <p className="product-price">${el.price}</p>
            <div className="button-group">
              <button className="btn edit-btn">Edit</button>
              <button className="btn delete-btn">Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button
          className="pagination-btn"
          onClick={() => setLimit(limit - 1)}
          disabled={limit === 1}
        >
          Prev
        </button>
        <span className="page-number">{limit}</span>
        <button className="pagination-btn" onClick={() => setLimit(limit + 1)}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Product;
