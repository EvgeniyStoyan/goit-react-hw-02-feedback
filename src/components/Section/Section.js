import React from "react";
import PropTypes from "prop-types";
import s from "./Section.module.css";

function Section({ title, children }) {
  return (
    <div className={s.container_reviews}>
      <h2 className={s.title_reviews}>{title}</h2>
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
