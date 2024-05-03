import { useState } from "react";

export default function OrdersCard({ orders }) {
  const [showProducts, setShowProducts] = useState(false);

  function handleClick() {
    setShowProducts(!showProducts);
  }

  return (
    <>
      <div
        className="border border-gray-300 rounded-md p-4 mb-4 cursor-pointer"
        onClick={handleClick}
      >
        <div>Name: {orders.user.name}</div>
        <div>Address: {orders.user.address}</div>
        <div>Town: {orders.user.town}</div>
        <div>Phone: {orders.user.phone}</div>
        {showProducts && (
          <div>
            <h4>Products:</h4>
            <ul>
              {orders.products.map((product) => (
                <li key={product._id} className="flex align-center">
                  <img
                    className="w-16 h-16"
                    src={`../${product.product.imageURL}`}
                    alt="img"
                  />
                  <div className="flex flex-col">
                    <span>{product.product.name}</span>
                    <span>{`Quantity: ${product.quantity}`}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
