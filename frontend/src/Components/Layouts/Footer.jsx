import IconButton from "@mui/material/IconButton";
import appStore from "../../assets/appstore.png";
import googlePlay from "../../assets/googlePlay.png";
import facebook from "../../assets/iconfacebook.png";
import instagram from "../../assets/iconinstagram.png";
import Linkedin from "../../assets/iconlinkedin.png";
import twitter from "../../assets/icontwitter.png";
import qrcode from "../../assets/QrCode.png";

import styles from "../StylingFiles/footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.contentDiv}>
          <div className="w-full">
            <p className={styles.forny}>Exclusive</p>
            <p className={styles.detailHeader}>Subscribe</p>
            <p className={styles.detailPoints}>Get 10% off your first order</p>
          </div>

          <div className="w-full">
            <p className={styles.detailHeader}>Support</p>
            <p className="hidden md:block md:font-sans md:mb-1 md:mt-5">
              F8, Islamabed, Pakistan.
            </p>
            <p className="hidden md:block">forny@gmail.com</p>
            <p className={styles.detailPoints}>+920101010101</p>
          </div>

          <div className="w-full">
            <p className={styles.detailHeader}>Account</p>
            <p className={styles.detailPoints}>My Account</p>
            <p className={styles.detailPoints}>Login / Register</p>
            <p className={styles.detailPoints}>Cart</p>
            <p className={styles.detailPoints}>Wishlist</p>
            <p className={styles.detailPoints}>Shop</p>
          </div>

          <div className="w-full">
            <p className={styles.detailHeader}>Quick Link</p>
            <p className={styles.detailPoints}>Privacy Policy</p>
            <p className={styles.detailPoints}>Terms Of Use</p>
            <p className={styles.detailPoints}>FAQ</p>
            <p className={styles.detailPoints}>Contact</p>
          </div>

          <div className="w-full">
            <p className={styles.detailHeader}>Download App</p>
            <p className={styles.detailPoints}>
              Save $3 with App New User Only
            </p>
            <div className={styles.downloadIcons}>
              <IconButton>
                <img src={qrcode} alt="qrcode" />
              </IconButton>
              <div className="flex flex-col w-full">
                <IconButton>
                  <img loading="lazy" src={googlePlay} alt="googlePlay" />
                </IconButton>
                <IconButton>
                  <img loading="lazy" src={appStore} alt="appStore" />
                </IconButton>
              </div>
            </div>
            <div className={styles.socialIcons}>
              <IconButton>
                <img loading="lazy" src={facebook} alt="facebook" />
              </IconButton>
              <IconButton>
                <img loading="lazy" src={twitter} alt="twitter" />
              </IconButton>
              <IconButton>
                <img loading="lazy" src={instagram} alt="instagram" />
              </IconButton>
              <IconButton>
                <img loading="lazy" src={Linkedin} alt="Linkedin" />
              </IconButton>
            </div>
          </div>
        </div>

        <p className="text-[#FFFFFF] m-5">
          Copyright Forny 2024. All right reserved
        </p>
      </footer>
    </>
  );
}
