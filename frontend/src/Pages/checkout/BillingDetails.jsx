import { Button } from "@mui/material";
import styles from "./BillingDetails.module.css";
import { useEffect, useState } from "react";

export default function BillingDetails({ detail }) {
  const [products, setproducts] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/cart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setproducts(data);
    }
    fetchData();
  }, [token]);
  async function handleOrder() {
    const response = await fetch("http://localhost:3000/orders", {
      method: "POST",
      body: JSON.stringify({
        address: detail.address,
        town: detail.town,
        phone: detail.phone,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  }
  console.log(products);
  const total = products.reduce(
    (accumulator, item) => accumulator + item.quantity * item.productId.price,
    0
  );
  return (
    <>
      <div>
        {products.map((product) => (
          <tr key={product.productId.name}>
            <td className={styles.product}>
              <span className={styles.productImage}>
                <img
                  src={`../${product.productId.imageURL}`}
                  alt="img"
                  className={styles.image}
                />
                {product.name}
              </span>
              <span>${product.productId.price}</span>

              <span>${product.quantity * product.productId.price}</span>
            </td>
          </tr>
        ))}

        <div className={styles.cartTotal}>
          <p>
            Shipping:<span>Free</span>
          </p>
          <p className="border-none">
            Total:<span>{total}</span>
          </p>
        </div>

        <div className={styles.checkbox}>
          <input type="checkbox" />
          <label>Cash on delivery</label>
        </div>
      </div>

      <div className={styles.coupon}>
        <input type="text" placeholder="Coupon Code" />
        <Button>Apply Coupon</Button>
      </div>

      <div className={styles.orderBtn}>
        <Button onClick={handleOrder}>Place Order</Button>
      </div>
    </>
  );
}
