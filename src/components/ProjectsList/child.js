import React from "react";
import deleteImage from "../../../src/assets/images/pngs/delete.svg"

const child = ({onDelete}) => {
  return (
    <form>
      <div className="form-section-block">
      <div className="skills-section">
      <img className="delete-image-section" onClick={onDelete} src={deleteImage} alt="logo-image" />
        <label>Skills Required</label>
        <select className="skills-option-section" >
          <option>Html</option>
          <option>CSS</option>
          <option>JavaScript</option>
          <option>Angular</option>
          <option>React Js</option>
          <option>TypeScript</option>
          <option>Python</option>
          <option>Node Js</option>
        </select>
      </div>
      <div className="experience-section">
        <label>Experience</label>
        <input type="number" class="experience-number" />
      </div>
      </div>
    </form>
  );
};

export default child;
