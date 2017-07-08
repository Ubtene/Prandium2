import React from "react";
import { deleteMeals, updateMeals } from "../utils/helpers";

export const Day = props => {
  
  const handleDelete = () => {
 let day = props.day;
    let user = props.user.data["0"].userID;
    console.log("DAY:", day);
    console.log("USER:", user);
    deleteMeals(user, day);
    console.log('dlt clicked');

  }; 
  const handleUpdate = () => {
     let day = props.day;
    let user = props.user.data["0"].userID;
    console.log("DAY:", day);
    console.log("USER:", user);
    updateMeals(user, day);
    console.log('update clicked');
  }; 

  return (
    <div className="day-wrapper">
      <div className='delete-meal-btn' onClick={handleDelete}><i className="fa fa-times" aria-hidden="true"></i></div>
    
      <div className="day-name">
        {props.day}
      </div>
      <div className="meal">
          {props.meal}
      </div>

      <img className="meal-img" alt="Image of meal" src={props.image} />
      <div className='refresh-meal-btn' onClick={handleUpdate}><i className="fa fa-refresh" aria-hidden="true"></i></div>
    </div>
  );
};

export default Day;
