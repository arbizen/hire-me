export default function Button({ children, ...rest }) {
  return (
    <button
      className="block bg-[#3D13FF] py-2 px-6 rounded-md mx-auto text-white"
      {...rest}
    >
      {children}
    </button>
  );
}
