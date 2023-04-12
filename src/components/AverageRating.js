
import ReviewsData from "./Data";

// Sory, didnt want to restructure all the files, decided to output all the 
// everage rating info inside of the Review componnent

export default () => {

  console.log(ReviewsData);
  return (
    <div className="AverageRating">
      <h3 > Average rating {} </h3>
    </div>
  )
}
