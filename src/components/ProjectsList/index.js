import React, { useState } from "react";
import CustomPopupContext from "../../common/CustomPopupContext/CustomPopupContext";
import Child from "./child";

import "./index.scss"


function ProjectsList({}) {
  const [formView, setFormView] = useState(false);
  const [arrayData, setArrayData] = useState([{ skillsReq: "", exp: "", key: 1 }]);
  const handleClick = () => {
    setArrayData((prev) => {
      return [...prev, { skillsReq: "", exp: "", key: arrayData[arrayData.length - 1].key+1 }];
    });
  };

  console.log("*************   RESOURCES STYLING ***********");
  
const localfun = (index) => {
  console.log(index)
  let arr = arrayData.splice(index, 1)
  let arr1 = arrayData.filter((each) => arr.key !== each.key);
console.log(arr1)
  setArrayData(arr1)
  // Delete the specific index obj from the array
}
  return (
    <CustomPopupContext
      title={"Request a resource"}
      buttons={[
        {
          label: "Request",
          /* onClick: this.requestResource,*/
          type: "primary",
        },
      ]} /*open={this.state.showPopup}*/
      open={true}
      onClickClose={() => {}}
    >
      {" "}
      {
        <div className="request-resources">
          <div className="main-heading">
            <div className={"project-name-block"}>
              <div className="project-name">
                <p>Project Name:</p>
                <p>RightData</p>
              </div>
              <button className="addrow-btn" onClick={handleClick}>
               + Add Row
              </button>
            </div>
            {arrayData.map((item,index) => {
              return <Child onDelete={() => {localfun(index)}} />;
            })}
          </div>
        </div>
      }
    </CustomPopupContext>
  );
}

export default ProjectsList;
