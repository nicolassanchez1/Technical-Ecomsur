import React from "react";
import "./CheckboxItem.scss";

const CheckboxItem = ({ name = "", checked = false, onChange = () => {} }) => (
  <div className="checkboxItem pointer">
    <input
      className="checkboxItem__checkbox pointer"
      type="checkbox"
      id={name}
      name={name}
      onChange={onChange}
      checked={checked}
    />
    <label htmlFor={name} className="checkboxItem__label pointer">
      {name}
    </label>
  </div>
);

export default CheckboxItem;
