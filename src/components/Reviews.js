import { useState } from "react";
import React, { useRef } from "react";
//import AverageRating from "./AverageRating";
import ReviewsData from "./Data";
//import ReviewsData from "./Data";

export default () => {
  const [reviews, setReviews] = useState(ReviewsData);
  const [rating, setRaiting] = useState("null");
  const [content, setContent] = useState("null");
  const [averageRating, setTotalRating] = useState(avRatingCalculator(reviews));
  const ratingInput = useRef(null);
  const contentInput = useRef(null);


  function avRatingCalculator(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
      sum += arr[i].rating;
    }
    console.log('averageRating: ' + sum/arr.length);
    return (sum/arr.length).toFixed(1);
  }

  function addReview() {
    if (rating === null || content === null){
      return
    }
    //console.log(rating);
    //console.log(content);
    let newId = reviews.length+1;
    const newReview = {
      id: newId,
      rating: rating > 10 ? 10 : parseInt(rating),
      content: content,
    };
    let newReviews = [newReview, ...reviews]
    setReviews(newReviews);
    //console.log(reviews);
    //setTotalRating(totalRating + rating);
    //setCounter(counter + 1);
    setTotalRating(avRatingCalculator(newReviews));
    console.log('averageRating: ' + averageRating)
    ratingInput.current.value = "";
    contentInput.current.value = "";
  }

  // The h1 display the counter and button runs addOne function
    return (
      <div className="Reviews">
        <h3>Reviews</h3>
        <h4> Total of {reviews.length} Reviews with avarage raiting of  {averageRating} ★</h4>
      <label for="rating">Raiting(1 - 10):</label>
      <input
      onChange={(e) => {
        setRaiting(e.target.value);
      }}
      type="number" id="quantity" name="quantity" min="1" max="10"
      ref = {ratingInput}
      />
      <input
        onChange={(e) => {
          setContent(e.target.value);
        }}
        ref = {contentInput}
      />
        <button onClick={addReview}>add review</button>
        {reviews.map((item) => (
        <div key={item.id || 0}>
          <div className="review">
            <span className="star">{item.raiting !== "null" ? item.rating : ''} ★ </span>
            <span> "{item.content !== "null" ? item.content : ''}"</span>
         </div>
        </div>
      ))}

      </div>
  
    )

      }