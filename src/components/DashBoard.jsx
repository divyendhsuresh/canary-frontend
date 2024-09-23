import { useFetchFeedback } from "../apis/useFetchFeedback";
import FeedbackCard from "./FeedbackCard";
import { useState } from "react";
import { useSubmitForm } from "../apis/useSubmitForm";
import queryClient from "../utils";

const DashBoard = () => {
  const [name, setName] = useState("");
  const [contactNumber, setcontactNumber] = useState("");
  const [emailAddress, setemailAddress] = useState("");
  const [rating, setRating] = useState("");
  const [comments, setComments] = useState("");

  const { data: feedbacks, isFetching } = useFetchFeedback();
  const { mutate } = useSubmitForm();

  const handleSubmit = () => {
    // console.log(name);
    // console.log(contactNumber);
    // console.log(emailAddress);
    // console.log(rating);
    // console.log(comments);

    mutate(
      { name, contactNumber, emailAddress, rating, comments },
      {
        onSuccess: (data) => {
          console.log(data);
          setComments("");
          setName("");
          setRating("");
          setcontactNumber("");
          setemailAddress("");
          queryClient.invalidateQueries({ queryKey: ["FEEDBACKS"] });
        },
        onError: (e) => {
          console.log(e);
          alert(e.response.data.error);
        },
      }
    );
  };

  //   console.log(feedbacks, isFetching);
  if (isFetching) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <h3>Submit Feedback</h3>
      <div>
        <span>Name</span>
        <input
          className="input"
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <span>Contact</span>
        <input
          className="input"
          type="text"
          value={contactNumber}
          placeholder="Contact Number"
          onChange={(e) => setcontactNumber(e.target.value)}
        />
      </div>
      <div>
        <span>Email</span>
        <input
          className="input"
          type="text"
          value={emailAddress}
          placeholder="Email"
          onChange={(e) => setemailAddress(e.target.value)}
        />
      </div>
      <div>
        <span>Rating</span>
        <input
          className="input"
          type="text"
          value={rating}
          placeholder="Rating"
          onChange={(e) => setRating(e.target.value)}
        />
      </div>
      <div>
        <span>Comments</span>
        <input
          className="input"
          type="text"
          value={comments}
          placeholder="Comments"
          onChange={(e) => setComments(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
      <div className="card-wrapper">
        {feedbacks.map((feedback) => {
          return (
            <FeedbackCard
              key={feedback._id}
              name={feedback.name}
              comments={feedback.comments}
              rating={feedback.rating}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DashBoard;
