const Button = ({ className, children }) => {
  return (
    <button
      className={`bg-chineseViolet px-3 py-2 text-white text-xs sm:text-base font-semibold rounded-sm
          hover:text-chineseViolet hover:bg-white cursor-pointer hover:scale-110 
          duration-400 border-2 border-chineseViolet ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
