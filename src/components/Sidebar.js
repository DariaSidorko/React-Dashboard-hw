import { useState } from "react"

export default () => {

  let menu = ['Dashboard', 'Wiget', 'Reviews', 'Customers', 'Online Analysis', 'Settings']
  return (
  <div className="Sidebar"> 
  <div> 
    {
      menu.map((items) => (
        <div className="link">{items}</div>
    ))}
  </div>
  </div>
  );
};