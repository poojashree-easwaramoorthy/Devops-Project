import React from 'react';
import '../components/Product.css'; // Make sure to include your custom styles here

function Products({ addToCart }) {
  const products = [
    { id: 1, name: 'OPPO Reno7', price: 35000, image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnMPmLnWRyel4WxarzIGRsT5xyBQl2PMhF0g&s' },
    { id: 2, name: 'hp Pavillion Laptop', price:100000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAUhswUCYEs71IoMWCbbMms9ph0JH2VCg2kw&s' },
    { id: 3, name: 'Moong Dal', price: 130, image: 'https://5.imimg.com/data5/SELLER/Default/2022/8/SH/BZ/WW/130757619/pulses.jpg' },
    { id: 4, name: 'Saree', price: 800, image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQckA8ackSaZVlV8PmogeWFyXpTSx6j0isr7zO7GKi3Z-cQDSA7Gox8FkNv-Df9rF-uA10RRC3xh2NajE8CL4o75RtgOexzFX150dUEKMRxlM3oV9SdQKyK&usqp=CAE' },
    { id: 5, name: 'Jewels', price: 2193, image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRtlbloVFEqvJY2QgEE68JIgzShasCC2EcRkueZdZ85nW-uDS8bWa8YZ5LgWLxW4vbVO974AkVxO-yPnV0DJI2lsjdSYXjT_EjmCLDEjp0ciLylwrzMkUnE&usqp=CAE' },
    { id: 6, name: 'Boat Airpods', price: 899, image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTe_rVSqAp0ZYT159k8-AllmyYpfcQCa0PSlG6krCFeLjYMCKDifNPYXwGfcvW1tHf18JZZPtJbjIAw9F1yWvDSmYqd_HuIOfZPQVT9j1LvAuoFpsL-ApsDmA&usqp=CAE' },
  ];

  return (
    <div className="product-grid">
      <h1>Products</h1>
      <div className="grid-container">
        {products.map((product) => (
          <div key={product.id} className="card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="card-body">
              <h2>{product.name}</h2>
              <span>Rs.{product.price}</span>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
