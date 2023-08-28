import { Component } from 'react';
import { FeedbackOptions} from './ButtonList/ButtonList';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = option => {
    console.log(option)
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.bad + this.state.neutral;
  };
  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback() === 0
    ? 0
    : Math.round(((this.state.good / this.countTotalFeedback()) * 100));
    ;
  };

  render(){
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
           onLeaveFeedback={this.handleClick}
          
            options={Object.keys(this.state)}
          />
        </Section>
        {this.countTotalFeedback() ? (
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivefeedback={this.countPositiveFeedbackPercentage()}
          />
        </Section>  ) : (
          <h2>There is no feedback</h2>
        )}
      </div>
    );
  }
}
