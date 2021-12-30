import React from "react";
import "./CheckboxItem.scss";

const CheckboxItem = ({ name }) => {
  
  return (
    <div className="checkboxItem pointer">
      <input
        className="checkboxItem__checkbox"
        type="checkbox"
        name={name}
        id={name}
      />
      <label htmlFor={name} className="checkboxItem__label pointer">
        {name}
      </label>
    </div>
  );
};

export default CheckboxItem;
