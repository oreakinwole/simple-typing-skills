import { Box, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useTimer } from "react-timer-hook";
import TextInput from "../components/TextInput";
import Timer from "../components/Timer";
import TimeUpModal from "../components/TimeUpModal";
import homestyle from "../styles/Home.module.css";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [startTimeValue, setStartTimeValue] = useState(0);

  const [writeUp, setWriteUp] = useState("");
  const [userInput, setUserInput] = useState("");

  let points = 0;
  let totalAvailablePoints = writeUp ? writeUp.length : 0;

  const challengeArray = writeUp ? writeUp.split(" ") : [];

  const fmtTime = new Date();
  fmtTime.setSeconds(fmtTime.getSeconds() + 60 * startTimeValue);

  const {
    minutes,
    seconds,
    isRunning,
    // start: startTimer,
    resume: resumeTimer,
    pause: pauseTimer,
    restart: restartTimer,
  } = useTimer({
    expiryTimestamp: fmtTime,
    autoStart: false,
    onExpire: () => {
      console.info("IS EXPIREDDDDD");
    },
  });

  const handleStartTest = () => {
    if (startTimeValue) resumeTimer();
  };

  const handleResetTest = (tValue = startTimeValue) => {
    const fmtTime2 = new Date();
    fmtTime2.setSeconds(fmtTime2.getSeconds() + 60 * tValue);
    restartTimer(fmtTime2);
    pauseTimer();
  };

  const handleSubmitTest = () => {
    handleResetTest();
    calculateFinalScore();
    setIsModalOpen(true);
  };

  const calculateFinalScore = () => {};

  const handleWriteUpInput = (paragraph) => {
    setWriteUp(paragraph);
  };

  // space key should add to this value
  let currentIndex = 0;

  // TODO::   Fix this function
  const setAccumPoints = () => {
    if (userInput.trim().split(" ").length === 1) {
      // console.log(challengeArray[currentIndex].trim().toLocaleLowerCase());

      userInput.trim().toLocaleLowerCase() ===
        challengeArray[currentIndex].trim().toLocaleLowerCase() &&
        (points += 1);
      console.info("YOUR POINT SO FAR", points);
      return;
    }

    userInput.trim().toLocaleLowerCase() ===
      challengeArray[currentIndex].trim().toLocaleLowerCase() && (points += 1);

    if (
      userInput.trim().split(" ")[currentIndex].toLocaleLowerCase() ===
      challengeArray[currentIndex].trim().toLocaleLowerCase()
    )
      points += 1;
    console.info("YOUR POINT SO FAR", points);
  };

  const handleOnKeyUp = (key) => {
    if (key === " ") {
      setAccumPoints();
      currentIndex += 1;
    }
  };

  const handleUserInput = (val) => {
    setUserInput(val);
  };

  return (
    <>
      <div className={homestyle.main_wrapper}>
        <TimeUpModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          points={points}
          totalAvailablePoints={totalAvailablePoints}
        />

        <h3>Choose your time &rarr; Review your Writeup &rarr; Start !</h3>
        <br />

        <Box
          d="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={30}
        >
          <Timer
            minutes={minutes}
            seconds={seconds}
            setStartTimeValue={setStartTimeValue}
            handleResetTest={handleResetTest}
          />

          <Button
            colorScheme="green"
            type="button"
            onClick={() => (isRunning ? handleSubmitTest() : handleStartTest())}
          >
            {isRunning ? "Finish " : "Start"}
          </Button>
        </Box>

        <TextInput
          heading="Your challenge sample"
          handleWriteUpInput={handleWriteUpInput}
          handleUserInput={() => {}}
          handleOnKeyUp={() => {}}
          startTimeValue={startTimeValue}
        />
        <TextInput
          heading="Your text goes here"
          handleUserInput={handleUserInput}
          handleWriteUpInput={() => {}}
          handleOnKeyUp={handleOnKeyUp}
          startTimeValue={startTimeValue}
        />
      </div>
    </>
  );
}
