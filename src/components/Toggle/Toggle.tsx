import React from "react";
import "./Toggle.css";

type ToggleEditModeProps = {
  customSetSate: React.Dispatch<React.SetStateAction<boolean>>;
  state: boolean;
  theme?: string;
};

const ToggleEditMode: React.FC<ToggleEditModeProps> = ({
  customSetSate,
  state,
  theme,
}) => {
  return (
    <div className="wrapper-toggle">
      <label className="toggle-switch">
        <input
          type="checkbox"
          checked={state}
          onChange={() => customSetSate(!state)}
        />
        <span className="slider round"></span>
      </label>
      <p>{state ? `${theme} is ON` : `${theme} is OFF`}</p>
    </div>
  );
};

export default ToggleEditMode;
