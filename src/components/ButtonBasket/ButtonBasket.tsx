function ButtonBasket({ className, onClick, buttonText }: any) {
  return (
    <>
      <button
        className={`buttonbasket ${className}`}
        onClick={onClick}
      >
        {buttonText}
      </button>
    </>
  );
}

export default ButtonBasket;
