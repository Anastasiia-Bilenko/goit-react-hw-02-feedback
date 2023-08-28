export const Statistics = ({ good, neutral, bad, total, positivefeedback }) => {
  return (
    <ul>
      <li>
        <p>Good : {good}</p>
      </li>
      <li>
        <p>Neutral : {neutral}</p>
      </li>
      <li>
        <p>Bad : {bad}</p>
      </li>
      <li>
        <p>Total : {total} </p>
      </li>

      <li>
        <p>Positive Feedback : {positivefeedback} %</p>
      </li>
    </ul>
  );
};
