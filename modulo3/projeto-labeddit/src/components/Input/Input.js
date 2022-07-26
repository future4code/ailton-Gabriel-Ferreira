import React from "react";
export const Input = ({placeholder, type, name, value, onChange}) => {
  return <input
  placeholder={placeholder}
  type={type}
  name={name}
  value={value}
  onChange={onChange}
/>
};
