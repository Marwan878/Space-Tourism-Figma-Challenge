export default function Page({ children, className }) {
  return (
    <div
      className={`container text-white flex flex-col items-center text-center lg:text-start lg:px-0 ${className}`}
      style={{
        flexGrow: 1,
      }}
    >
      {children}
    </div>
  );
}
