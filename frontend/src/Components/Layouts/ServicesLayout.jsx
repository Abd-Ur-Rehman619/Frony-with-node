export default function ServicesLayout({ img, title, description }) {
  return (
    <>
      <div className="flex flex-col items-center gap-5 ">
        <div>
          <img src={img} alt="img" />
        </div>
        <div>
          <p className="text-xl font-semibold">{title}</p>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </>
  );
}
