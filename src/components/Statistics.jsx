export const Statistics = ({good, bad, neutral, total, positivePercentage}) => {
    return (
        <ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positiv feedback: {positivePercentage}%</li>
        </ul>
    )
}