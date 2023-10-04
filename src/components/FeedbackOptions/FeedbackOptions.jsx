import {ButtonDiv} from './FeedbackOptions.styled'

export const FeedbackOptions = ({onLeaveFeedback}) => {
    return (
        <ButtonDiv>
            <button onClick={() => onLeaveFeedback('good')}>Good</button>
            <button onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
            <button onClick={() => onLeaveFeedback('bad')}>Bad</button>
        </ButtonDiv>
    )
}