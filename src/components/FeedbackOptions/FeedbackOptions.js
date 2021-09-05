import React from 'react';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({
  title,
  onClickGood,
  onClickNeutral,
  onClickBad,
}) => {
  return (
    <div className={s.container_buttons}>
      {title && <h2 className={s.title_reviews}>{title}</h2>}
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
};

export default FeedbackOptions;
