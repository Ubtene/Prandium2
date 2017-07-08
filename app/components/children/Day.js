import React from "react";
import { deleteMeals, updateMeals } from "../utils/helpers";

export const Day = props => {
  const handleDelete = () => {
    let day = props.day;
    let meal = props.meal;
    let user = props.user.data["0"].userID;
    deleteMeals(user, { day, meal });
    console.log("DELETE", { day, meal });
  };

  const handleUpdate = () => {
    let day = props.day;
    let meal = props.meal;
    let user = props.user.data["0"].userID;
    updateMeals(user, {day, meal});
    console.log("UPDATE", { day, meal });
  };

  return (
    <div className="day-wrapper">
      <div className="delete-meal-btn" onClick={handleDelete}>
        <i className="fa fa-times" aria-hidden="true" />
      </div>

      <div className="day-name">
        {props.day}
      </div>
      <div className="meal">
        {props.meal}
      </div>

      <img className="meal-img" alt="Image of meal" src={props.image} />
      <div className="refresh-meal-btn" onClick={handleUpdate}>
        <i className="fa fa-refresh" aria-hidden="true" />
      </div>
    </div>
  );
};

export default Day;
