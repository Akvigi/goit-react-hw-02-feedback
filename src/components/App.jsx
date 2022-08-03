import React, {Component} from "react";
import FeedbackOptions from "./Statistics/Feedbackoptions/FeedbackOptions";
import Rating from "./Statistics/Rating/Rating";
import { PageContainer, ContentContainer } from "./styled-comp/styled"
import Section from "./Section/Section";



// let array = [{ name: "Kar", id: nanoid() }, { name: "Kar", id: nanoid() }, { name: "Kar", id: nanoid() }]
class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0,
    }

    onFeedback = (e) => {
        const toChange = e.target.textContent;
        this.setState(prevState => ({
            total: prevState.total + 1,
            [toChange]: prevState[toChange] + 1,
        }))
    }

    countPositivePercent = () => {
        const perc = (this.state.good * 100) / this.state.total
        if (this.state.good === 0) return "0"
        return perc.toFixed(1)
    }

    render() {
        return (
            <PageContainer>
                <ContentContainer>
                    <Section title="Please leave feedback">
                        <FeedbackOptions toDo={this.onFeedback}/>
                        <Rating
                            {...this.state}
                            positivePercentage= {this.countPositivePercent()}
                            />
                    </Section>
                </ContentContainer>
            </PageContainer>  
        );
    }
}



export default App;

