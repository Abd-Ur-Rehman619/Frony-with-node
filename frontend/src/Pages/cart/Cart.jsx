import { Button, Input } from "@mui/material";
import styles from "./Cart.module.css";
import CartData from "./CartData";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);

  const calculateProductSubtotal = (product) => {
    return product.price * product.quantity;
  };

  const calculateTotalSubtotal = () => {
    let totalSubtotal = 0;
    cartItems.forEach((product) => {
      totalSubtotal += calculateProductSubtotal(product);
    });
    return totalSubtotal;
  };

  return (
    <>
      {cartItems.length === 0 && (
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

      {cartItems.length > 0 && (
        <main className={styles.main}>
          <table className={styles.table}>
            <CartData />
          </table>

          <div className={styles.cartBtns}>
            <Link to="/">
              <Button>Return to Shop</Button>
            </Link>
            <Button>Update Cart</Button>
          </div>

          <div className={styles.cartFooter}>
            <div className={styles.coupon}>
              <Input type="text" placeholder="Coupon Code" />
              <Button>Apply Coupon</Button>
            </div>

            <div className={styles.cartTotal}>
              <h2>Cart Total</h2>

              <p>
                Subtotal:<span>${calculateTotalSubtotal()}</span>
              </p>
              <p>
                Shipping:<span>Free</span>
              </p>
              <p className="border-none">
                Total:<span>${calculateTotalSubtotal()}</span>
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
