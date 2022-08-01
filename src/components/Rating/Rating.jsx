import { FeedBackCont } from "components/styled-comp/styled";
import React from "react";



const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {    
    
        return (
            <FeedBackCont>
                <h1>Please leave feedback</h1>
                <div>
                    <button onClick={this.onFeedback}>good</button>
                    <button onClick={this.onFeedback}>neutral</button>
                    <button onClick={this.onFeedback}>bad</button>
                </div>
                <div>
                    <h2>Statistics</h2>
                    <p>Good: { good }</p>
                    <p>Neutral: { neutral }</p>
                    <p>Bad: {bad}</p>
                    <p>Total: {total}</p>
                    <p>Positive feedback: { this.countPositivePercent() }%</p>
                </div>
            </FeedBackCont>
        );
    }


export default Statistics;