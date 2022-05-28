import React from 'react'
import pmuLogo from '../../assets/images/pngs/pmu.jpg'
import './header.css'

export const HeaderComponent = () => {

    // console.log("************  HEADER STYLES **************");
    // console.log(styles);
    // console.log(styles.header);
  return (
    <div className={"header"}>
      <div >
        <img src={pmuLogo} className={"header_logo"} alt="im"/>
      </div>
    </div>
  )
}
