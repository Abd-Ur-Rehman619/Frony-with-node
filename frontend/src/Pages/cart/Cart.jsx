import { Button, Input } from "@mui/material";
import styles from "./Cart.module.css";
import CartData from "./CartData";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Cart() {
  const navigate = useNavigate();
  const [cartData, setCartData] = useState([]);

  const token = localStorage.getItem("token");
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://frony-with-node.vercel.app/cart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (data === "Unauthorized!") {
        navigate("/");
      }
      setCartData(data);
    }
    fetchData();
  }, [token]);
  const total = cartData.reduce(
    (accumulator, item) => accumulator + item.quantity * item.productId.price,
    0
  );
  return (
    <>
      {cartData.length === 0 && (
        <div className="flex flex-col items-center justify-center h-screen gap-20 ">
          <p className="text-6xl font-bold">No Product item in your Cart.</p>

          <Link to="/" className="hover:bg-[#aa4137]">
            <Button
              sx={{
                backgroundColor: "#EA4335",
                width: "234px",
                height: "56px",
                color: "white",
              }}
            >
              Continue Shopping
            </Button>
          </Link>
        </div>
      )}

      {cartData.length > 0 && (
        <main className={styles.main}>
          <table className={styles.table}>
            <CartData
              cartData={cartData}
              token={token}
              setCartData={setCartData}
            />
          </table>

          <div className={styles.cartBtns}>
            <Link to="/">
              <Button>Return to Shop</Button>
            </Link>
          </div>

          <div className={styles.cartFooter}>
            <div className={styles.coupon}>
              <Input type="text" placeholder="Coupon Code" />
              <Button>Apply Coupon</Button>
            </div>

            <div className={styles.cartTotal}>
              <h2>Cart Total</h2>

              {cartData.map((items) => (
                <p key={items.productId._id}>
                  <span>{items.productId.name}</span>
                  <span>${items.quantity * items.productId.price}</span>
                </p>
              ))}
              <p>
                Shipping:<span>Free</span>
              </p>
              <p className="border-none">
                Total:<span>${total}</span>
              </p>

              <div className={styles.checkoutBtn}>
                <Link to="/cart/checkout">
                  <Button>Process to Checkout</Button>
                </Link>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
}
