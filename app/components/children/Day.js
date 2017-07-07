import React from "react";

export const Day = props => {
  return (
    <div className="panel" id="day-wrapper">
      <div className="day-name">
        {props.day}
      </div>

      <div className="meals">
        <div className="lunch">
<<<<<<< HEAD
          {props.meal}
        {/*  <button className="">Delete Meal</button>*/}
=======
          {props.lunch}
          {/*  <button className="">Delete Meal</button>*/}
>>>>>>> styles
        </div>
      </div>

      <img className="meal-img" alt="Image of meal" src={props.image} />
      {/* <button>Update Meals</button>*/}
    </div>
  );
};

export default Day;
