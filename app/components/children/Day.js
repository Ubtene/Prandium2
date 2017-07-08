import React from "react";
import { deleteMeals } from "../utils/helpers";

export const Day = props => {
  const handleClick = () => {
    let day = props.day;
    let user = props.user.data["0"].userID;
    console.log("DAY:", day);
    console.log("USER:", user);
    deleteMeals(user, day);
  };

  return (
    <div className="day-wrapper">
    
      <div className="day-name">
        {props.day}
      </div>
      <div className="meal">
          {props.meal}
      </div>

      <div className='refresh-meal-btn'><i className="fa fa-refresh" aria-hidden="true"></i></div>
      <img className="meal-img" alt="Image of meal" src={props.image} />
    </div>
  );
};

export default Day;
