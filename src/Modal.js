import { React, useState } from "react";
import "./modal.scss";

const Modal = () => {
  const [modal, setModals] = useState(false);
  const [change, setChange] = useState(false);
  const [saveChange, setSaveChange] = useState(false);

  const showModal = () => {
    setModals(!modal);
  };

  const hideModal = () => {
    setModals(false);
  };
  const changeColor = () => {
    setChange(!change);
  };
  const saveClolorChange = () => {
    setModals(false);
    setSaveChange(change);
  };
  const closeChange = () => {
    setChange(saveChange);
    setModals(false);
  };

  return (
    <div className="modal-container">
      <div className="click">
        <button type="button" onClick={showModal}>
          Show Modal
        </button>
      </div>

      <div className="modal" style={{ display: modal ? "block" : "none" }}>
        <div className="header">
          <h6>Theme Color</h6>
          <span onClick={changeColor}> Change Theme</span>
        </div>
        <div className="row">
          <p>Font Color</p>
          <div className="color">
            #444444
            <div className={change ? "color1-change" : "color1"} />
          </div>
        </div>
        <div className="row">
          <p>Background Color</p>
          <div className="color">
            #FFFFFF
            <div className={change ? "color2-change" : "color2"} />
          </div>
        </div>
        <div className="row">
          <p>Button Color</p>
          <div className="color">
            {change ? "#960018" : "#2072EF"}
            <div className={change ? "color3-change" : "color3"} />
          </div>
        </div>
        <div className="row">
          <p>Button Border Color</p>
          <div className="color">
            {change ? "#960018" : "#2072EF"}
            <div className={change ? "color4-change" : "color4"} />
          </div>
        </div>
        <div className="row">
          <p>Button Mouseover Color</p>
          <div className="color">
            {change ? "#e81919" : "#0053D1"}
            <div className={change ? "color5-change" : "color5"} />
          </div>
        </div>
        <div className="buttons">
          <button className="btn1" onClick={closeChange}>
            Cancel
          </button>
          <button
            className={change ? "btn2-change" : "btn2"}
            onClick={saveClolorChange}
          >
            Save
          </button>
        </div>
      </div>
      <div
        className="modal-backdrop"
        style={{ display: modal ? "block" : "none" }}
        onClick={closeChange}
      ></div>
    </div>
  );
};

export default Modal;
