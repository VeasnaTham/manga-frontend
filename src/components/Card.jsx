const Card = ({ img, title, price, onTap }) => {
  return (
    <>
      <div onClick={onTap}>
        <section className="card">
          <img src={img} alt={title} className="card-img" />
          <div className="card-details">
            <h3 className="card-title font-bold">{title}</h3>
            <section className="card-price">
              <div className="price">
                ${price}
              </div>
            </section>
          </div>
        </section>
      </div>
    </>
  );
};

export default Card;