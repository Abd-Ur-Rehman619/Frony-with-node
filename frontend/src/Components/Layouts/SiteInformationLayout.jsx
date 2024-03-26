export default function SiteInformationLayout({ img, title, description }) {
  return (
    <>
      <div className="flex flex-col items-center gap-3 border-2 border-solid p-4 rounded-md">
        <div>
          <img src={img} alt="img" />
        </div>
        <div className="flex flex-col items-center gap-3">
          <p className="text-xl font-bold">{title}</p>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </>
  );
}
