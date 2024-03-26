import PersonsInfoLayout from "./Layouts/PersonsInfoLayout";

import Founder from "../assets/Founder.png";
import ManagingDirector from "../assets/Managing-Director.png";
import ProductDesigner from "../assets/ProductDesigner.png";

export default function PersonsInfo() {
  return (
    <div className="grid grid-cols-3 justify-between gap-32">
      <PersonsInfoLayout
        img={Founder}
        title={"William Jonas"}
        description={"Founder & Chairman"}
      />
      <PersonsInfoLayout
        img={ManagingDirector}
        title={"Emma Henry"}
        description={"Managing Director"}
      />
      <PersonsInfoLayout
        img={ProductDesigner}
        title={"Denny Moras"}
        description={"Product Designer"}
      />
    </div>
  );
}
