import { TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Send from "../../assets/send.png";
import appStore from "../../assets/appstore.png";
import googlePlay from "../../assets/googlePlay.png";
import facebook from "../../assets/iconFacebook.png";
import instagram from "../../assets/iconinstagram.png";
import Linkedin from "../../assets/iconLinkedin.png";
import twitter from "../../assets/iconTwitter.png";
import qrcode from "../../assets/QrCode.png";
import styles from "../StylingFiles/footer.module.css";
export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.contentDiv}>
          <div>
            <p className={styles.forny}>Exclusive</p>
            <p className={styles.detailHeader}>Subscribe</p>
            <p className={styles.detailPoints}>Get 10% off your first order</p>

            <TextField
              hiddenLabel
              size={"small"}
              sx={{
                border: "1px solid white",
                borderRadius: "6px",
                outlineColor: "white",
                placeholder: "white",
              }}
              className={styles.textfield}
              placeholder="Enter you Email"
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <img src={Send} alt="Custom Icon" />
                  </IconButton>
                ),
              }}
            />
          </div>
          <div>
            <p className={styles.detailHeader}>Support</p>
            <p className="font-sans mb-1 mt-5">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </p>
            <p className="">exclusive@gmail.com</p>
            <p className={styles.detailPoints}>+88015-88888-9999</p>
          </div>
          <div>
            <p className={styles.detailHeader}>Account</p>
            <p className={styles.detailPoints}>My Account</p>
            <p className={styles.detailPoints}>Login / Register</p>
            <p className={styles.detailPoints}>Cart</p>
            <p className={styles.detailPoints}>Wishlist</p>
            <p className={styles.detailPoints}>Shop</p>
          </div>
          <div>
            <p className={styles.detailHeader}>Quick Link</p>
            <p className={styles.detailPoints}>Privacy Policy</p>
            <p className={styles.detailPoints}>Terms Of Use</p>
            <p className={styles.detailPoints}>FAQ</p>
            <p className={styles.detailPoints}>Contact</p>
          </div>
          <div>
            <p className={styles.detailHeader}>Download App</p>
            <p className={styles.detailPoints}>
              Save $3 with App New User Only
            </p>
            <div className={styles.downloadIcons}>
              <IconButton>
                <img src={qrcode} alt="qrcode" />
              </IconButton>
              <div>
                <IconButton>
                  <img src={googlePlay} alt="googlePlay" />
                </IconButton>
                <IconButton>
                  <img src={appStore} alt="appStore" />
                </IconButton>
              </div>
            </div>
            <div className={styles.socialIcons}>
              <IconButton>
                <img src={facebook} alt="facebook" />
              </IconButton>
              <IconButton>
                <img src={twitter} alt="twitter" />
              </IconButton>
              <IconButton>
                <img src={instagram} alt="instagram" />
              </IconButton>
              <IconButton>
                <img src={Linkedin} alt="Linkedin" />
              </IconButton>
            </div>
          </div>
        </div>
        <p className="text-[#FFFFFF] m-5">
          Copyright Rimel 2022. All right reserved
        </p>
      </footer>
    </>
  );
}
