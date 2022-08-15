import { Box, Input, Select } from "@chakra-ui/react";

export default function Timer({
  minutes,
  seconds,
  setStartTimeValue,
  handleResetTest,
}) {
  return (
    <>
      <div className="">
        <Select
          placeholder="Select time"
          onChange={(e) => {
            const valueCh = parseInt(e.target.value, 10);
            setStartTimeValue(valueCh);
            handleResetTest(valueCh);
          }}
        >
          <option value="1">1 min</option>
          <option value="2">2 mins</option>
          <option value="5">5 mins</option>
        </Select>

        <div className="mx-timer">
          <span>{minutes} </span>:<span> {seconds}</span>
        </div>
      </div>

      <br />

      <style jsx>
        {`
          .mx-timer {
            font-size: 35px;
            font-weight: bold;
            margin-top: 10px;
          }
        `}
      </style>
    </>
  );
}
