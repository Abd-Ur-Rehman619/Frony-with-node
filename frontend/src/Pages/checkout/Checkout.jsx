import styles from "./Checkout.module.css";

import BillingDetails from "./BillingDetails";

export default function Checkout() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.checkout}>
          <h1>Billing Details</h1>
          <div className={styles.billingForm}>
            <form className={styles.form}>
              <label>First Name*</label>
              <input type="text" required />
              <label>Company Name*</label>
              <input type="text" required />
              <label>Street Address*</label>
              <input type="text" required />
              <label>Apartment, floor, etc.(optional)</label>
              <input type="text" />
              <label>Town City*</label>
              <input type="text" required />
              <label>Phone Number*</label>
              <input type="text" required />
              <span className={styles.checkbox}>
                <input type="checkbox" />
                <label>
                  Save this information for faster check-out next time
                </label>
              </span>
            </form>

            <div className={styles.billingDetail}>
              <BillingDetails />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
