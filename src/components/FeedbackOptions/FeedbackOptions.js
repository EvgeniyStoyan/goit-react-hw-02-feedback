import React from "react";
import s from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ onClickGood, onClickNeutral, onClickBad }) => (
  <div className={s.container_buttons}>
    <button type="button" onClick={onClickGood}>
      GOOD
    </button>
    <button type="button" onClick={onClickNeutral}>
      NEUTRAL
    </button>
    <button type="button" onClick={onClickBad}>
      BAD
    </button>
  </div>
);

export default FeedbackOptions;
