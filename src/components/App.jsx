import React, {  useState } from 'react';

import { Statistics } from './feedback/statistic/statistics';
import { FeedbackOptions } from './feedback/btn/buttonFeedback';
import { Section } from './feedback/section/Sections';
import { Notification } from './feedback/notofication/Notification';

export const App = () => {
  const [good, setGood] = useState(0)
  const [normal, setNormal] = useState(0)
  const [bad, setBad] = useState(0)

  const options = ['good', 'normal', 'bad'];

  const handleIncrement = option => {
   console.log(option);
    switch (option) {
      case 'good':
        setGood(good + 1);
        break;
      case 'normal':
        console.log("normal");
        setNormal(normal + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => good + normal + bad;

  const countPositiveFeedbackPercentage = () => {

    return Math.round((good / countTotalFeedback()) * 100);
  }

    return (
      <>
        <Section title={'Please leave feedback'}>
        <FeedbackOptions  onLeaveFeedback={handleIncrement} options={options}/>
        </Section>
        <Section title={'Statistics'}>
          {countTotalFeedback() ? (
            <Statistics
              good={good}
              normal={normal}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
}
