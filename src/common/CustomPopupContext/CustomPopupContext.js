import React, { Component } from "react";
import "./CustomPopupContext.scss";
import closeBtn from "../../assets/images/svgs/close.svg";
import popupLine from "../../assets/images/svgs/popupLine.svg";

export class CustomPopupContext extends Component {
  render() {
    const { title, buttons, children, open, onClickClose } = this.props;
    return (
      <>
        {open && (
          <div className="popupContainer_context__custom">
            <div className="overlay_context" />
            <div className="overlay_context">
              <div className="popup_context">
                <div className="popupHeader_context">
                  <div className="heading_context">{title}</div>
                  <div className="closeButton_context" onClick={onClickClose}>
                    <img src={closeBtn} alt="closeButton" />
                  </div>
                </div>
                <div className="headerBorder_context">
                  <img src={popupLine} alt="popupLine" />
                </div>
                <div className="children_context">{children}</div>
                <div className="actionButtons_context">
                  {buttons.map((btn) => (
                    <div
                      className={`${
                        btn.type === "primary"
                          ? "saveBtn_context"
                          : "deleteBtn_context"
                      }`}
                      onClick={btn.onClick ? btn.onClick : () => false}
                    >
                      <span className="btnTxt_context">{btn.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default CustomPopupContext;
