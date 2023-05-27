import { Radio, Button } from "antd";
import { useState } from "react";
import PollDisplay from "./PollDisplay";
import ThankYouMessage from "./ThankYouMessage";
import AnotherUserParticipation from "./AnotherUserParticipation";

function UserParticipation({ qna }) {
  const [value, setValue] = useState("");
  const [show, setShow] = useState(true);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const handleClick = () => {
    setShow(true);
    setValue("");
  };

  const handleSubmit = () => {
    if (value !== "") {
      let selection = qna.choices.find((choice) => choice.label === value);
      console.log(selection);
      selection.votes++;
      console.log(selection);
      setShow(false);
    }
  };

  return (
    <div>
      <PollDisplay qna={qna} />
      {show && (
        <>
          <h3>{qna.question}</h3>
          <Radio.Group onChange={onChange} value={value}>
            {qna.choices.map((choice) => (
              <Radio key={choice.id} value={choice.label}>
                {choice.label}
              </Radio>
            ))}
          </Radio.Group>
          <br />
          <br />
          <Button onClick={handleSubmit}>Submit</Button>
        </>
      )}
      {!show && (
        <>
          <br />
          <ThankYouMessage />
          <br />
          <AnotherUserParticipation clickMethod={handleClick} />
        </>
      )}
    </div>
  );
}

export default UserParticipation;
