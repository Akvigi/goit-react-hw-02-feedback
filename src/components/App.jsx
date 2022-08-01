import React, {Component} from "react";
import Rating from "./Rating/Rating";
import { PageContainer, ContentContainer } from "./styled-comp/styled"

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }
    onFeedback = (e) => {
        const toChange = e.target.textContent;
        this.setState(props => ({
            total: props.total + 1,
            [toChange]: props[toChange] + 1,
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
                    <Rating
                        good={0 }
                        neutral={0 }
                        bad={0 }
                        total={0 }
                        positivePercentage={0 } />
                </ContentContainer>
            </PageContainer>  
        );
    }
}

export default App;
// export const App = () => {
    
// };


