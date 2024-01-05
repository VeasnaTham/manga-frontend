const Button = ({ onClickHandler, title }) => {
    return (
      <button onClick={onClickHandler} className="btns">
        {title}
      </button>
    );
  };
  
  export default Button;