import React, { useContext } from "react";
import "./DragMouse.css";
import drag from '../assets/images/drag.svg';
import useMousePosition from "./useMousePosition";
import { MouseContext } from "../App";

const DragMouse = () => {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  const { x, y } = useMousePosition();
  return (
    <>
      {/* <div
        style={{ left: `${x}px`, top: `${y}px` }}
        className={"ring " + cursorType}
      >
        <img src={drag} />
      </div> */}
      <div
        className={"dot " + cursorType}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </>
  );
};

export default DragMouse;