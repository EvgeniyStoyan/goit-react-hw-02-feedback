import React from 'react';
import PropTypes from 'prop-types';
import s from './Section.module.css';

function Section({ children }) {
  return <section className={s.container_reviews}>{children}</section>;
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
