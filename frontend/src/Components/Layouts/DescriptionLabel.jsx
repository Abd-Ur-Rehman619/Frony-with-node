import { IconButton } from "@mui/material";
import leftIcon from "../../assets/icons_arrow-left.png";
import rightIcon from "../../assets/icons_arrow-right.png";

export default function DescriptionLabel({ children }) {
  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <label className="text-lg sm:text-2xl md:text-4xl font-bold">
          {children}
        </label>
        <div>
          <IconButton>
            <img src={leftIcon} alt="LeftIcon" />
          </IconButton>
          <IconButton>
            <img src={rightIcon} alt="RightIcon" />
          </IconButton>
        </div>
      </div>
    </>
  );
}
