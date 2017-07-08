import React from "react";
import { deleteMeals, updateMeals } from "../utils/helpers";

export const Day = props => {
  const handleDelete = () => {
    let user = props.user.data["0"].userID;
    let meal = props.meal;
    deleteMeals(user, meal);
  };

  const handleUpdate = () => {
    let user = props.user.data["0"].userID;
    let meal = props.meal;
    updateMeals(user, meal);
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
