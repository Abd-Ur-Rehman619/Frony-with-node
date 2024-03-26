export default function SizeButton({ children }) {
  return (
    <>
      <button className="bg-white hover:bg-[#DB4444] hover:text-white text-gray-800 font-semibold  border rounded shadow m-1 h-8 w-8">
        {children}
      </button>
    </>
  );
}
