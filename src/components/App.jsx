import { Notification } from './Notification';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics';
import { useState } from 'react';

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const handleClick = (type) => {
    setFeedback((preState) => ({...preState, [type]: preState[type] + 1 }))
  };

  const countTotalFeedback = () => {
    const total = Object.values(feedback).reduce((previousValue, number) => {
      return previousValue + number;
    }, 0);
    return total
  };

  const countPositiveFeedbackPercentage = () => {
    let percentage = 0
    let sum = countTotalFeedback()
    percentage = Math.round(feedback.good / sum * 100)
    return percentage
  };
  
  return (
    <div>
      <Section title='Please leave feedback'>
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={handleClick}
        />
      </Section>
      <Section title='Statistics'>
        {countTotalFeedback() === 0 ? (
          <Notification
            message='There is no feedback'
          />
        ) : (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  )
};
