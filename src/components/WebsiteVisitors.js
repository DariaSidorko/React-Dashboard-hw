import { useState } from "react"

export default () => {
  const [counter, setCounter] = useState(0);

  const addOne = () => {
  // sets counter to its current value + 1
    setCounter(counter + 1)
  }
  let time = 2000;
  setTimeout(addOne, time < 4000 ? time += 3000 : time -=3000);

  // The h1 display the counter and button runs addOne function
    return (
      <div className="WebsiteVisitors">
        <h3>Website Visitors</h3>
        <h1 className="visitors">{counter}</h1>
        {/* <button onClick={addOne}>Click Me to Add One</button> */}
      </div>
  
    )
}
