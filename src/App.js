import React, { Component } from "react";
import Section from "./components/Section";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
// import "./App.css";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickGood = () => {
    this.setState((prevState) => ({
      good: prevState.good + 1,
    }));
  };

  onClickNeutral = () => {
    this.setState((prevState) => ({
      neutral: prevState.neutral + 1,
    }));
  };

  onClickBad = () => {
    this.setState((prevState) => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return Math.round((this.state.good * 100) / total);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const { onClickGood, onClickNeutral, onClickBad } = this;
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onClickGood={onClickGood}
            onClickNeutral={onClickNeutral}
            onClickBad={onClickBad}
          ></FeedbackOptions>

          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          ></Statistics>
        </Section>
      </div>
    );
  }
}

export default App;
