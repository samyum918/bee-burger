const BackDrop = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="backdrop-blur-sm w-screen h-screen z-50">{children}</div>
  );
};

export default BackDrop;
