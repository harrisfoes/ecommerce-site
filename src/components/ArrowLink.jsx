import React from "react";
import arrowRight from "../assets/Elements/Icon/arrow-right.svg";

function ArrowLink({ text }) {
  return (
    <>
      <a href="#">
        <div className="flex gap-2 justify-around border-b-2 border-b-primary max-w-fit mt-1 text-sm">
          {text} <img src={arrowRight} alt="arrow right" />
        </div>
      </a>
    </>
  );
}

export default ArrowLink;
