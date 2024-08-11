import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "../../api/axios";
import "../home/Home.css"; // Import the CSS file

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios('/products').then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div className='home'>
      <ul className='product-list'>
        {
          products.map((product) => (
            <li key={product.id}>
              <Link to={`/single/${product.id}`}>
                <img src={product.image} alt={product.title} />
              </Link>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <strong>${product.price}</strong>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Home;
