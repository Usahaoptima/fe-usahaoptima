const CardDashboard = (props) => {
  // eslint-disable-next-line react/prop-types
  const { image, title, description, quantity } = props;
  return (
    <>
      <div className="card" style={{ width: "264px" }}>
        <div className="card-body">
          <img src={image} alt="" className="img-fluid mx-auto d-block" />
          <h5 className="mt-3">{title}</h5>
          <h6 className="card-subtitle mb-2">{description}</h6>
          <p>{quantity}</p>
        </div>
      </div>
    </>
  );
};

export default CardDashboard;
