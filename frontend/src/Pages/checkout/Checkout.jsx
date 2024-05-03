import styles from "./Checkout.module.css";
import BillingDetails from "./BillingDetails";
import { useState } from "react";

export default function Checkout() {
  const [address, setAddress] = useState("");
  const [town, setTown] = useState("");
  const [phone, setPhone] = useState("");

  function handleAddressChange(event) {
    setAddress(event.target.value);
  }

  function handleTownChange(event) {
    setTown(event.target.value);
  }

  function handlePhoneChange(event) {
    setPhone(event.target.value);
  }

  return (
    <>
      <main className={styles.main}>
        <div className={styles.checkout}>
          <h1>Billing Details</h1>
          <div className={styles.billingForm}>
            <form className={styles.form}>
              <label>Street Address*</label>
              <input
                type="text"
                name="address"
                value={address}
                onChange={handleAddressChange}
                required
              />
              <label>Town City*</label>
              <input
                type="text"
                name="town"
                value={town}
                onChange={handleTownChange}
                required
              />
              <label>Phone Number*</label>
              <input
                type="text"
                name="phone"
                value={phone}
                onChange={handlePhoneChange}
                required
              />
            </form>

            <div className={styles.billingDetail}>
              <BillingDetails detail={{ address, town, phone }} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
