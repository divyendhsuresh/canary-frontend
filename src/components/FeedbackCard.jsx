const FeedbackCard = ({ name, comments, rating }) => {
  return (
    <div className="card">
      <h5 className="card-title">{comments}</h5>
      <div className="card-footer">
        <span>{name}</span>
        <span className="card-rating">{rating} star</span>
      </div>
    </div>
  );
};

export default FeedbackCard;
