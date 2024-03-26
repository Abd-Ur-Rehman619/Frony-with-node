import { Button } from "@mui/material";
import lcdMonitor from "../../assets/LCD_Monitor.png";
import styles from "./BillingDetails.module.css";

const products = [
  {
    image: lcdMonitor,
    name: "LCD Monitor",
    price: 123,
  },
  {
    image: lcdMonitor,
    name: "LCD Monitor",
    price: 123,
  },
];

export default function BillingDetails() {
  return (
    <>
      <div>
        {products.map((product) => (
          <tr key={product.name}>
            <td className={styles.product}>
              <span className={styles.productImage}>
                <img src={product.image} alt="img" className={styles.image} />
                {product.name}
              </span>
              <span>${product.price}</span>
            </td>
          </tr>
        ))}

        <div className={styles.cartTotal}>
          <p>
            Subtotal:<span>$123</span>
          </p>
          <p>
            Shipping:<span>Free</span>
          </p>
          <p className="border-none">
            Total:<span>$123</span>
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
        <Button>Place Order</Button>
      </div>
    </>
  );
}
