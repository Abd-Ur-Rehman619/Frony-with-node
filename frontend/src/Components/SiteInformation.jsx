import CustomerSite from "../assets/Customer-site.png";
import SellerSite from "../assets/Seller-site.png";
import GrossSale from "../assets/Gross-sale.png";

import SiteInformationLayout from "./Layouts/SiteInformationLayout";

export default function SiteInformation() {
  return (
    <div className="grid grid-cols-4 justify-between gap-10">
      <SiteInformationLayout
        img={SellerSite}
        title={"10.5k"}
        description={"Sellers active our site"}
      />
      <SiteInformationLayout
        img={GrossSale}
        title={"33k"}
        description={"Monthly Product Sale"}
      />
      <SiteInformationLayout
        img={CustomerSite}
        title={"45.5k"}
        description={"Customer active in our site"}
      />
      <SiteInformationLayout
        img={GrossSale}
        title={"25k"}
        description={"Annual gross sale in our site"}
      />
    </div>
  );
}
