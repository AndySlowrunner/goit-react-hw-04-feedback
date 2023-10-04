import { Notification } from './Notification';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics';
import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  
  handleClick = (type) => {
    this.setState((preState) =>
      ({ [type]: preState[type] + 1 }))
  };
    
  countTotalFeedback = () => {
      const total = Object.values(this.state).reduce((previousValue, number) => {
          return previousValue + number;
      }, 0);
      return total
  }
  
  countPositiveFeedbackPercentage = () => {
      let percentage = 0
      let sum = this.countTotalFeedback()
      percentage = Math.round(this.state.good / sum * 100)
      return percentage
  }

  render() {
    return (
        <div>
          <Section title='Please leave feedback'>
            <FeedbackOptions
              options = {Object.keys(this.state)}
              onLeaveFeedback={this.handleClick}
            />
          </Section>
        <Section title='Statistics'>
          {this.countTotalFeedback() === 0 ? (
            <Notification
              message='There is no feedback'
            />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
          </Section>
        </div>
      )
  }
};
