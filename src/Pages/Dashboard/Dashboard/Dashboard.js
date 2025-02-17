import React, { useState } from "react";
import Layout from "../Layout";
import Level from "./Level";
import DashboardUserUpdate from "./DashboardUserUpdate";
import TechnicalUpdate from "./TechnicalUpdate";
import UpcomingQuest from "../../../assets/Dashboard/UpcomingQuest.png";
import RightArrowBlack from "../../../assets/Dashboard/RightArrowBlack.png";
import DashboardPrimaryButton from "../Shared/DashboardPrimaryButton";
import "./style.css";
import Lock from "../../../assets/Dashboard/lock.png";

const Dashboard = () => {
  const data = [
    {
      name: "Level - 1",
      status: "Completed",
      score: "20/25",
      expression: "👍",
    },
    {
      name: "Level - 2",
      status: "Completed",
      score: "37/60",
      expression: "🤞",
    },
    {
      name: "Level - 3",
      status: "Completed",
      score: "40/60",
      expression: "🙌",
    },
    {
      name: "Level - 4",
      status: "Ongoing",
      score: "0/60",
    },
    {
      name: "Level - 5",
      status: "Locked",
      score: "0/160",
    },
    {
      name: "Level - 6",
      status: "Locked",
      score: "0/160",
    },
    {
      name: "Level - 7",
      status: "Locked",
      score: "0/160",
    },
    {
      name: "Level - 8",
      status: "Locked",
      score: "0/160",
    },
    {
      name: "Level - 9",
      status: "Locked",
      score: "0/160",
    },
    {
      name: "Level - 10",
      status: "Locked",
      score: "0/160",
    },
    {
      name: "Level - 11",
      status: "Locked",
      score: "0/160",
    },
    {
      name: "Level - 12",
      status: "Locked",
      score: "0/160",
    },
  ];
  const [viewAllLevel, setViewAllLevel] = useState(false);
  // const [length, setLength] = useState(data.length < 5 ? data.length : 5);
  const [length, setLength] = useState(data.length);

  const handleViewAllLevel = () => {
    setViewAllLevel(true);
    setLength(data.length);
  };
  const handleCloseViewAllLevel = () => {
    setViewAllLevel(false);
    setLength(data.length < 5 ? data.length : 5);
  };
  return (
    <div>
      <Layout>
        <div className="">
          <div className="grid grid-col-1 lg:grid-cols-3 gap-2">
            <div className="lg:col-span-2 pt-20 lg:pt-10 px-4">
              <DashboardUserUpdate />
            </div>
            <div
              className={`lg:border-b-2 lg:border-l-2 lg:border-[#E8E8E8] pt-10 pb-10 px-4 text-center lg:max-h-[732px] overflow-x-scroll lg:overflow-y-scroll ${
                viewAllLevel ? "labJourney" : "labJourneyRemoveScroll"
              } `}
            >
              <h1 className="text-[18px] lg:text-[26px] font-[700]">
                Lab Journey
              </h1>
              <div className="pt-[40px] px-[30px] hidden lg:inline-block relative">
                {data.map((singleData, i) => (
                  <Level
                    viewAllLevel={viewAllLevel}
                    length={length}
                    onClick={handleCloseViewAllLevel}
                    singleData={singleData}
                    i={i}
                    key={singleData?.name}
                  />
                ))}
              </div>
              <div className="mt-[20px] bg-[#D7ECFF] labJourney rounded-lg px-[10px] flex lg:hidden overflow-x-scroll h-[155px]">
                {data.map((singleData, i) => (
                  <div
                    className={`${
                      i % 2 === 0
                        ? "flex-col border-b-white border-b-0 rounded-t-full"
                        : " flex-col-reverse border-t-white border-t-0 rounded-b-full self-end"
                    } h-[92px] relative flex ml-[-5.26px] p-[5px] border-[#0F3934] border-[5px] overflow-visible my-4`}
                  >
                    <div
                      // style={[{ boxShadow: "1.70448px 1.70448px 0px #000000" }]}
                      className={`rounded-[50%] w-[44px] h-[44px] lg:w-[71px] lg:h-[69px] flex flex-col items-center justify-center text-[8px] lg:text-[17px] font-[700] underline underline-offset-4 z-[1] ${
                        singleData?.status === "Completed" &&
                        " decoration-white text-white bg-[#3E4DAC]"
                      } ${
                        singleData?.status === "Ongoing" && "  bg-[#FFDB70]"
                      } ${
                        singleData?.status === "Locked"
                          ? "lockShadow border-x-4 border-y-4 bg-[#D9D9D9] text-[#706F6F]"
                          : "normalShadow"
                      }`}
                    >
                      {singleData?.status === "Ongoing" && (
                        <h1 className="text-[8px] lg:text-[13px] ">Ongoing</h1>
                      )}
                      {singleData?.status === "Locked" && (
                        <img
                          className="w-[12px] h-[10px]"
                          src={Lock}
                          alt="lock"
                        />
                      )}
                      <h1
                        className={`${
                          singleData?.status !== "Completed" &&
                          "text-[8px] lg:text-[13px]"
                        }`}
                      >
                        {singleData?.score}
                      </h1>
                      {singleData?.status === "Completed" && (
                        <h1>{singleData?.expression}</h1>
                      )}
                    </div>
                    <h1
                      className={`underline underline-offset-2 rounded-[9px] z-0 text-[8px] lg:text-[12px] font-[700] py-1 ${
                        singleData?.status === "Completed" && "bg-[#9CAAFF]"
                      } ${singleData?.status === "Ongoing" && "bg-[#FFC13D]"} ${
                        singleData?.status === "Locked" && "bg-[#D9D9D9]"
                      } ${i % 2 === 0 ? "mt-[10px]" : "mb-[10px]"}`}
                    >
                      {singleData?.name}
                    </h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-3 gap-2 mb-[150px] lg:mb-0">
            <div className="lg:col-span-2 pt-10 px-4">
              <TechnicalUpdate />
            </div>
            <div className=" lg:border-b-2 lg:border-l-2 lg:border-[#E8E8E8] pt-10 px-4">
              <div className="w-full flex justify-center">
                <div className="w-full lg:max-w-[355px] lg:h-[515px]">
                  <h1 className="text-[18px] lg:text-[25px] font-[700] text-center pb-[32px]">
                    Upcoming Quest
                  </h1>
                  <div
                    style={{
                      filter: "drop-shadow(3.75217px 3.75217px 0px #000000)",
                    }}
                    className="bg-[#1F093C] w-full h-full rounded-[14px] py-[20px] px-[15px] lg:p-[30px] flex flex-row lg:flex-col lg:justify-between items-center gap-3 lg:gap-5"
                  >
                    <div className="bg-[#FF1B1B] text-center rounded-md w-[75%] lg:w-full">
                      <img
                        className="self-center w-full"
                        src={UpcomingQuest}
                        alt="Challenges"
                      />
                    </div>
                    <h1 className="text-[14px] hidden lg:block lg:text-[18px] text-white font-[700]">
                      Week 5: Networking
                    </h1>
                    <div className="w-full hidden lg:flex justify-around items-center">
                      <button className="bg-[#FFDB70] p-[6px] lg:p-[12px] text-[10px] font-[700] rounded-full">
                        Thursday
                      </button>
                      <button className="bg-[#FFDB70] p-[6px] lg:p-[12px] text-[10px] font-[700] rounded-full">
                        Quest-4
                      </button>
                      <button className="bg-[#FFDB70] p-[6px] lg:p-[12px] text-[10px] font-[700] rounded-full">
                        2 hours
                      </button>
                    </div>
                    <div className="w-full hidden lg:block">
                      <DashboardPrimaryButton
                        bgColor="#FFDB70"
                        shadow="0px 7.50435px 0px #F08323"
                        width="full"
                      >
                        <p className="flex items-center justify-center">
                          Set Reminder{" "}
                          <img
                            className="pl-1 w-[21px] lg:w-[32px]"
                            src={RightArrowBlack}
                            alt="RightArrowBlack"
                          />
                        </p>
                      </DashboardPrimaryButton>
                    </div>
                    <div className="lg:hidden flex flex-col items-center justify-around w-full h-full">
                      <h1 className="text-[14px] lg:text-[18px] text-white font-[700]">
                        Week 5: Networking
                      </h1>
                      <div className="w-full flex justify-around items-center">
                        <button className="bg-[#FFDB70] p-[6px] lg:p-[12px] text-[10px] font-[700] rounded-full">
                          Thursday
                        </button>
                        <button className="bg-[#FFDB70] p-[6px] lg:p-[12px] text-[10px] font-[700] rounded-full">
                          Quest-4
                        </button>
                        <button className="bg-[#FFDB70] p-[6px] lg:p-[12px] text-[10px] font-[700] rounded-full">
                          2 hours
                        </button>
                      </div>
                      <DashboardPrimaryButton
                        bgColor="#FFDB70"
                        shadow="0px 7.50435px 0px #F08323"
                        width="full"
                      >
                        <p className="flex items-center justify-center">
                          Set Reminder{" "}
                          <img
                            className="pl-1 w-[21px] lg:w-[32px]"
                            src={RightArrowBlack}
                            alt="RightArrowBlack"
                          />
                        </p>
                      </DashboardPrimaryButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Dashboard;
