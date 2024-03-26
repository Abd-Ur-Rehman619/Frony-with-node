import { Instagram, LinkedIn, X } from "@mui/icons-material";

export default function PersonsInfoLayout({ img, title, description }) {
  return (
    <div className="flex flex-col gap-5 ">
      <div>
        <img src={img} alt="img" />
      </div>
      <div>
        <p className="text-xl font-semibold">{title}</p>
        <p className="text-sm">{description}</p>
      </div>
      <div className="flex items-center gap-3">
        <X fontSize="small" />
        <Instagram fontSize="small" />
        <LinkedIn fontSize="small" />
      </div>
    </div>
  );
}
