import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import CongratulationsLeft from "../../../assets/Dashboard/CongratulationsLeft.png";
import CongratulationsRight from "../../../assets/Dashboard/CongratulationsRight.png";
import CongratulationsBatch from "../../../assets/Dashboard/CongratulationsBatch.png";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const questions = [
  {
    id: 1,
    question: "In Figma, What is the use Opt + Cmd + K / Ctrl + Alt + K ?",
    options: [
      "A. Run last plugin",
      "B. Create component",
      "C. Share a file",
      "D. Frame selection",
    ],
    correctAnswer: "Paris",
  },
  {
    id: 2,
    question: 'Which planet is known as the "Red Planet"?',
    options: ["Venus", "Mars", "Jupiter", "Mercury"],
    correctAnswer: "Mars",
  },
  {
    id: 3,
    question: "What is the largest mammal on Earth?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correctAnswer: "Blue Whale",
  },
  {
    id: 4,
    question: "Which scientist developed the theory of relativity?",
    options: [
      "Isaac Newton",
      "Albert Einstein",
      "Galileo Galilei",
      "Marie Curie",
    ],
    correctAnswer: "Albert Einstein",
  },
  {
    id: 5,
    question: "What is the chemical symbol for water?",
    options: ["H2O", "CO2", "O2", "NaCl"],
    correctAnswer: "H2O",
  },
  {
    id: 6,
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    id: 7,
    question: "In Figma, What is the use Opt + Cmd + K / Ctrl + Alt + K ?",
    options: [
      "A. Run last plugin",
      "B. Create component",
      "C. Share a file",
      "D. Frame selection",
    ],
    correctAnswer: "Paris",
  },
  {
    id: 8,
    question: 'Which planet is known as the "Red Planet"?',
    options: ["Venus", "Mars", "Jupiter", "Mercury"],
    correctAnswer: "Mars",
  },
  {
    id: 9,
    question: "What is the largest mammal on Earth?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correctAnswer: "Blue Whale",
  },
  {
    id: 10,
    question: "Which scientist developed the theory of relativity?",
    options: [
      "Isaac Newton",
      "Albert Einstein",
      "Galileo Galilei",
      "Marie Curie",
    ],
    correctAnswer: "Albert Einstein",
  },
  {
    id: 11,
    question: "What is the chemical symbol for water?",
    options: ["H2O", "CO2", "O2", "NaCl"],
    correctAnswer: "H2O",
  },
  {
    id: 12,
    question: "What is the capital of France?",
    correctAnswer: "Paris",
  },
];

const QuizTask = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setSelectedOption("");
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleJumpQuestion = (i) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setSelectedOption("");
    setCurrentQuestion(i);
  };

  if (currentQuestion >= questions.length) {
    return (
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ backgroundColor: "#151718", position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <div className="text-center text-[21px] font-[600] w-full py-[20px] ">
              <h1 className="text-white">Figma</h1>
              <p className="text-[#8595FF]">Quiz - 48 Total points</p>
            </div>
          </Toolbar>
        </AppBar>
        <div>
          <div className=" max-w-[1023px] pt-[80px] mx-auto flex justify-between">
            <img
              className="w-auto h-fit mt-[100px]"
              src={CongratulationsLeft}
              alt="CongratulationsLeft"
            />
            <div className="flex flex-col items-center bg-[#0E0534] p-[32px] w-[520px] rounded-[11px] ">
              <h1 className=" text-[#FFDB70] text-[28px] font-[700] text-center mb-[32px] ">
                Congratulations
              </h1>
              <img src={CongratulationsBatch} alt="CongratulationsBatch" />
              <div className="text-white text-center mt-[22px] text-[20px] font-[700]">
                <p>You answered</p>
                <p>
                  <span className="text-[#21D63E]">40 out of 48</span> questions
                  correctly.{" "}
                </p>
              </div>
              <div className="w-[453.97px] h-[122.47px] bg-yellow-50 rounded-[9.21px] flex items-center justify-between py-[30px] px-[40px] mt-[45px] bg-[#FFFCE0]">
                <div>
                  <div className=" flex-col justify-start items-center  inline-flex">
                    <h1 className="text-zinc-800 text-[16.90px] font-semibold">
                      Your Points Earned
                    </h1>
                    <h1 className="text-rose-400 text-[25.52px] font-semibold">
                      40 Points
                    </h1>
                  </div>
                </div>
                <div className="bg-[#D6D6D6] w-[1px] h-[56.56px]"></div>
                <div>
                  <div className=" flex-col justify-start items-center inline-flex">
                    <h1 className="text-zinc-800 text-[16.90px] font-semibold">
                      Your Quiz Rank
                    </h1>
                    <h1 className="text-[#2F97B7] text-3xl font-semibold">
                      2/20
                    </h1>
                  </div>
                </div>
              </div>
              <button
                onClick={handleNextQuestion}
                className={`bg-[#FFDB70] text-black px-[21px] py-[14px] text-[16px] font-[700] text-center rounded-[8px] z-[1] shadow-[0px_4px_0px_0px_#F08323] lg:shadow-[0px_7px_0px_0px_#F08323] flex items-center gap-[7px] mt-[50px] mb-[20px]`}
              >
                Review Submission
              </button>
            </div>
            <img
              className="w-auto h-fit mt-[100px]"
              src={CongratulationsRight}
              alt="CongratulationsRight"
            />
          </div>
        </div>
      </Dialog>
    );
  }

  const question = questions[currentQuestion];
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="49"
          viewBox="0 0 26 49"
          fill="none"
        >
          <path
            d="M0.382812 48.7921V0.25H25.1492V48.7921H0.382812Z"
            fill="#BA8864"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="202"
          height="56"
          viewBox="0 0 202 56"
          fill="none"
        >
          <path
            d="M201.714 50.2889L3.51277 55.6087L16.8306 29.8516L0.808594 3.89223L189.553 0.934166L201.714 50.2889Z"
            fill="#4D2609"
          />
        </svg>
        <h1 className=" text-[20px] font-[600] mt-[-44px] text-white ">
          48 Points
        </h1>
      </div>
      <div className="px-4 pb-20">
        <h1 className="text-[30px] font-[600] mt-[70px] ">Quiz Name</h1>
        <div className="mt-[95px] flex items-center justify-between">
          <div className="">
            <h1 className="text-[20px] font-[500]">Submit your Quiz</h1>
            <p className="text-[18px] font-[400] text-[#6B6B6B]">
              Attempts: <span className="text-[#3E4DAC]">10</span>
            </p>
          </div>
          <div>
            <button
              onClick={handleClickOpen}
              className={`bg-[#3E4DAC] text-white w-[150px] h-[50px] text-[16px] font-[600] text-center rounded-[8px] z-[1] shadow-[0px_4px_0px_0px_#CA5F98] lg:shadow-[0px_8px_0px_0px_#CA5F98]`}
            >
              Start Quiz
            </button>
          </div>
        </div>
        <hr className="my-[65px]" />
        <div className=" flex items-center justify-between">
          <div className=" flex flex-col justify-between h-full gap-[20px]">
            <h1 className="text-[20px] font-[500]">Results</h1>
            <p className="text-[18px] font-[400] text-[#6B6B6B]">
              To Pass: <span className="text-[#3E4DAC]">75% or more</span>
            </p>
          </div>
          <div className="w-[161px] flex-col justify-start items-center gap-[22.96px] inline-flex">
            <h1 className="text-zinc-800 text-lg font-semibold">
              Your Points Earned
            </h1>
            <h1 className="text-amber-700 text-[26px] font-semibold">
              40 Points
            </h1>
          </div>
          <div className="w-32 flex-col justify-start items-center gap-[22.96px] inline-flex">
            <h1 className="text-zinc-800 text-lg font-semibold">
              Your Quiz Rank
            </h1>
            <h1 className="text-[#2F97B7] text-3xl font-semibold">2/20</h1>
          </div>

          <div>
            <button
              className={`bg-[#FFDB70] text-black px-4 h-[50px] text-[16px] font-[600] text-center rounded-[8px] z-[1] shadow-[0px_4px_0px_0px_#F08323] lg:shadow-[0px_8px_0px_0px_#F08323]`}
            >
              Review Submission
            </button>
          </div>
        </div>
      </div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ backgroundColor: "#151718", position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <div className="text-center text-[21px] font-[600] w-full py-[20px] ">
              <h1 className="text-white">Figma</h1>
              <p className="text-[#8595FF]">Quiz - 48 Total points</p>
            </div>
          </Toolbar>
        </AppBar>
        <div>
          <div className=" max-w-[1262px] pt-[80px] mx-auto flex justify-between">
            <div className="w-[625px]">
              <h1 className="text-[#FF557A] text-center h-[50px] text-[22px] font-[700] ">
                Question {question.id}
              </h1>
              <div className="bg-[#FFFCDE] rounded-[8px] w-full px-[20px] py-[30px] relative">
                <svg
                  className="absolute top-0 right-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="108"
                  height="38"
                  viewBox="0 0 108 38"
                  fill="none"
                >
                  <path
                    d="M98.97 37.4233L9.65459 37.4233C3.30196 37.4233 -1.01009 30.9655 1.42462 25.098L2.5147 22.4709C3.50542 20.0833 3.41044 17.3832 2.2544 15.0711L1.16635 12.895C-1.79591 6.9705 2.51221 -0.000183105 9.13601 -0.000183105L98.97 -0.000183105C103.891 -0.000183105 107.88 3.98912 107.88 8.91017V28.513C107.88 33.434 103.891 37.4233 98.97 37.4233Z"
                    fill="#4D2609"
                  />
                </svg>
                <h1 className=" text-white text-[16px] font-[500] absolute top-[6px] right-0 w-[108px] text-center ">
                  1 points
                </h1>
                <p className=" text-[18px] font-[700] pt-4 ">
                  {question?.question}
                </p>
                <form className="mt-[45px]">
                  {!question?.options && (
                    <input
                      className="w-[435px] p-[24px] text-[20px] font-[500] rounded-[8px] border-[#323232] border-2 bg-transparent "
                      placeholder="Write Here"
                      type="text"
                    />
                  )}
                  {question?.options &&
                    question?.options?.map((option, index) => (
                      <div key={index}>
                        <label className="flex items-center mb-[15px] text-[#3E4DAC] text-[15px] font-[600] ">
                          <input
                            className="form-radio mr-[15px] h-6 w-6  border rounded-full border-gray-400"
                            // className="w-[22px]"
                            type="radio"
                            value={option}
                            checked={selectedOption === option}
                            onChange={handleOptionChange}
                          />
                          {option}
                        </label>
                      </div>
                    ))}
                </form>
                <div className="flex items-center justify-between mt-[40px]">
                  <div></div>
                  <div className="flex items-center gap-[30px]">
                    <button
                      className={`bg-[#FF557A] text-white px-[21px] py-[14px] text-[12px] font-[700] text-center rounded-[8px] z-[1] shadow-[0px_4px_0px_0px_#F08323] lg:shadow-[0px_7px_0px_0px_#F08323] flex items-center gap-[7px]`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M8.58594 4.10726L5.41984 7.27335L8.58594 10.4395"
                          stroke="white"
                          stroke-width="0.903057"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      Back
                    </button>
                    <button
                      onClick={handleNextQuestion}
                      className={`bg-[#FFDB70] text-black px-[21px] py-[14px] text-[12px] font-[700] text-center rounded-[8px] z-[1] shadow-[0px_4px_0px_0px_#F08323] lg:shadow-[0px_7px_0px_0px_#F08323] flex items-center gap-[7px]`}
                    >
                      Next
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M5.1875 10.4416L8.3536 7.27547L5.1875 4.10938"
                          stroke="#282828"
                          stroke-width="1.04683"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[500px]">
              <div className="bg-[#ECF4F7] rounded-[8px] mt-[50px]">
                <h1 className=" text-[#282828] text-[18px] font-[700] text-center py-[30px] ">
                  Question Bank
                </h1>
                <div className="grid grid-cols-8 px-[20px] pb-[20px]">
                  {questions?.map((question, index) => (
                    <div className="flex">
                      <button
                        onClick={() => handleJumpQuestion(index)}
                        className={`${
                          currentQuestion === index
                            ? "bg-[#001246] text-white"
                            : "bg-white text-black"
                        } min-w-[45px] flex items-center justify-center text-[16px] font-[600] rounded-full py-[10px] mb-[28px]`}
                      >
                        {index + 1}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default QuizTask;
