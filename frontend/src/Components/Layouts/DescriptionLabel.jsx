export default function DescriptionLabel({ children }) {
  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <label className="text-lg sm:text-2xl md:text-4xl font-bold">
          {children}
        </label>
      </div>
    </>
  );
}
