import React from "react";
import { manageOptions, supportOptions } from "../../config";

const Options = () => {
  return (
    <div>
      <h5 className="sidebar__option">MANAGE</h5>

      {manageOptions.map((option) => (
        <h3 className="options">
          {option.logo}
          <div className="options__name">{option.name}</div>
        </h3>
      ))}

      <h5 className="sidebar__option">SUPPORT</h5>

      {supportOptions.map((option) => (
        <h3 className="options">
          {option.logo}
          <div className="options__name">{option.name}</div>
        </h3>
      ))}
    </div>
  );
};

export default Options;
