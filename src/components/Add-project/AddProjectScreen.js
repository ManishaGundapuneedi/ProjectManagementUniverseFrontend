import React, { useEffect } from 'react'
import * as fieldTypes from '../../common/FormComponents/fieldTypes';
import * as validators from '../../common/FormComponents/validators';

const fields = [
  {
    key: "rightData",
    type: fieldTypes.TEXT,
    label: "Right Data",
    placeholder: " ",
    className: "",
    validators: [validators.nonEmpty],
    value: "right_data",
    filtersArray: [""]
  },
  {
    key: "newteledoc",
    type: fieldTypes.TEXT,
    label: "New Tele Doc",
    placeholder: "",
    className: "",
    validators: [validators.nonEmpty],
    value: "new_tele_doc",
    filtersArray: [""]
  },
  {
    key: "exlai",
    type: fieldTypes.TEXT,
    label: "EXL AI",
    placeholder: "",
    className: "",
    validators: [validators.nonEmpty],
    value: "exl_ai",
    filtersArray: [""]
  },
  {
    key: "timesad",
    type: fieldTypes.TEXT,
    label: "Times Ads",
    placeholder: "",
    className: "",
    validators: [validators.nonEmpty],
    value: "times_ad",
    filtersArray: [""]
  }
]
// project name, resources, team size, estimated eod, skills set, tye
// type*

export const AddProjectScreen = () => {

  return (
    <div>
      {
        fields.map(
          (each) => {
            return <div key={each.key} className>
              {each.value}
              <input type="text"/>
            </div>
          }
        )
      }
    </div>
  )
}
