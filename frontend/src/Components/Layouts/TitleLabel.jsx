import rectangle from "../../assets/Rectangle.png";

export default function TitleLabel({ children }) {
  return (
    <>
      <div className="flex flex-row items-center gap-5">
        <img src={rectangle} alt="rectengle" />
        <label className="font-bold text-[#DB4444]">{children}</label>
      </div>
    </>
  );
}
