import { Typography } from "antd";

function PollDisplay({ qna }) {
  return (
    <div>
      <h3>User Votes</h3>
      {qna.choices.map((choice) => (
        <Typography key={choice.id}>
          {choice.label} (votes: {choice.votes})
        </Typography>
      ))}
    </div>
  );
}

export default PollDisplay;
