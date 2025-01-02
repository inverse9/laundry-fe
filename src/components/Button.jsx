/* eslint-disable react/prop-types */

const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-gray-900 text-white/90 py-2 px-4 w-1/5 shadow-xl text-base ring-offset-2 active:ring ring-gray-900 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
