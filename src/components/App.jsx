import React, { Component } from 'react';
import '../index.css';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import NotificationMessage from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();

    return ((this.state.good / total) * 100).toFixed();
  };

  handleOptionButtons = event => {
    this.setState(prevState => {
      const { name } = event.target;

      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  render() {
    const buttonNames = Object.keys(this.state);

    return (
      <div className={'app'}>
        <Section tittle="Please Leave Feedback">
          <FeedbackOptions
            onLeaveFeedback={this.handleOptionButtons}
            options={buttonNames}
          />
        </Section>
        <Section tittle="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <NotificationMessage message="There is no Feedback !" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={
                this.countTotalFeedback()
                  ? this.countPositiveFeedbackPercentage() + '%'
                  : ''
              }
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
