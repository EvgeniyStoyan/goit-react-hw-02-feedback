import React from "react";
import PropTypes from "prop-types";
import Notification from "../Notification/Notification";
import s from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <h2 className={s.statistics_title}>Statistics</h2>
    {total === 0 ? (
      <Notification message="No feedback given" />
    ) : (
      <div>
        <p className={s.statistics_text}>Good: {good}</p>
        <p className={s.statistics_text}>Neutral: {neutral}</p>
        <p className={s.statistics_text}>Bad: {bad}</p>
        <p className={s.statistics_text}>Total: {total}</p>
        <p className={s.statistics_text}>
          Positive feedback:{positivePercentage}%
        </p>
      </div>
    )}
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
