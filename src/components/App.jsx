import React, { Component } from 'react';

import { Statistics } from './feedback/statistic/statistics';
import { FeedbackOptions } from './feedback/btn/buttonFeedback';
import { Section } from './feedback/section/Sections';
import { Notification } from './feedback/notofication/Notification';

export class App extends Component {
  state = {
    good: 0,
    normal: 0,
    bad: 0,
  };

  handleIncrement = e => {
    const handleIncr = e.target.textContent.toLowerCase();
    this.setState(prevStat => ({ [handleIncr]: prevStat[handleIncr] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, normal, bad } = this.state;
    const total = good + normal + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  };

  render() {
    const keys = Object.keys(this.state);
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            onLeaveFeedback={this.handleIncrement}
            options={keys}
          />
        </Section>
        <Section title={'Statistics'}>
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
              good={this.state.good}
              normal={this.state.normal}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
