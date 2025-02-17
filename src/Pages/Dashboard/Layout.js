import React, { useEffect, useState } from "react";
import MyHelmet from "../../Components/MyHelmet/MyHelpmet";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/Logos/Group 2859890.png";
import users from "../../assets/PointsRedemptions/users.svg";
import enroll from "../../assets/PointsRedemptions/enroll.svg";
import book from "../../assets/PointsRedemptions/book.svg";
import dollar from "../../assets/PointsRedemptions/dollar.svg";
import message from "../../assets/PointsRedemptions/message.svg";
import shield from "../../assets/PointsRedemptions/shield.svg";
import sliders from "../../assets/PointsRedemptions/sliders.svg";
import award from "../../assets/PointsRedemptions/award.svg";
import pentool from "../../assets/PointsRedemptions/pen-tool.svg";
import gift from "../../assets/PointsRedemptions/gift.svg";
import feather from "../../assets/PointsRedemptions/feather.svg";
import DashboardIconLight from "../../assets/Dashboard/DashboardIconLight.svg";
import DashboardIconDark from "../../assets/Dashboard/DashboardIconDark.svg";
import LeaderBoardIconLight from "../../assets/Dashboard/LeaderBoardIconLight.svg";
import LeaderBoardIconDark from "../../assets/Dashboard/LeaderBoardIconDark.svg";
import EarningIconLight from "../../assets/Dashboard/EarningIconLight.svg";
import EarningIconDark from "../../assets/Dashboard/EarningIconDark.svg";
import RedemptionIconLight from "../../assets/Dashboard/RedemptionIconLight.svg";
import RedemptionIconDark from "../../assets/Dashboard/RedemptionIconDark.svg";
import SkillAnalysisIconLight from "../../assets/Dashboard/SkillAnalysisIconLight.svg";
import SkillAnalysisIconDark from "../../assets/Dashboard/SkillAnalysisIconDark.svg";
import CareerAnalysisIconLight from "../../assets/Dashboard/CareerAnalysisIconLight.svg";
import CareerAnalysisIconDark from "../../assets/Dashboard/CareerAnalysisIconDark.svg";
import CourseAccessIconLight from "../../assets/Dashboard/CourseAccessIconLight.svg";
import CourseAccessIconDark from "../../assets/Dashboard/CourseAccessIconDark.svg";
import userPhoto from "../../assets/Dashboard/UserImage.png";
import liveClass from "../../assets/ExecutionMentor/liveClass.svg";
import liveClass1 from "../../assets/ExecutionMentor/liveClass1.svg";
import Schedule from "../../assets/ExecutionMentor/Schedule.svg";
import Schedule1 from "../../assets/ExecutionMentor/Schedule1.svg";
import dashboard from "../../assets/ExecutionMentor/dashboard.svg";
import Quizzes from "../../assets/ExecutionMentor/Quizzes.svg";
import Exams from "../../assets/ExecutionMentor/Exams.svg";
import Assignments from "../../assets/ExecutionMentor/Assignments.svg";
import Assignments1 from "../../assets/ExecutionMentor/Assignments1.svg";
import Batches from "../../assets/ExecutionMentor/Batches.svg";
import Doubts from "../../assets/ExecutionMentor/Doubts.svg";
import Doubts1 from "../../assets/ExecutionMentor/Doubts1.svg";
import redemption from "../../assets/UnpaidStudentDashboard/redemption.svg";
import redemption1 from "../../assets/UnpaidStudentDashboard/redemption1.svg";
import courseAccess from "../../assets/UnpaidStudentDashboard/courseAccess.svg";
import courseAccess1 from "../../assets/UnpaidStudentDashboard/courseAccess1.svg";
import resourceCenter from "../../assets/ExpertMentorDashboard/resourceCenter.svg";
import resourceCenter1 from "../../assets/ExpertMentorDashboard/resourceCenter1.svg";
import ShowcasePage from "../../assets/ExpertMentorDashboard/ShowcasePage.svg";
import ShowcasePage1 from "../../assets/ExpertMentorDashboard/ShowcasePage1.svg";
import Feedback from "../../assets/ExpertMentorDashboard/Feedback.svg";
import Feedback1 from "../../assets/ExpertMentorDashboard/Feedback1.svg";
import MentorClub from "../../assets/ExpertMentorDashboard/MentorClub.svg";
import incomeGateway from "../../assets/ExpertMentorDashboard/IncomeGateway.svg";
import StudentProgress from "../../assets/ExpertMentorDashboard/StudentProgress.svg";
import StudentProgress1 from "../../assets/ExpertMentorDashboard/StudentProgress1.svg";
import back from "../../assets/ContentManagement/back.svg";
import ArrowLeftIcon from "../../assets/Dashboard/dashboard_arrow-left.png";
import { Badge } from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';

const Layout = ({ children }) => {
  const [toggleButton, setToggleButton] = useState(true);
  const [screenSmall, setScreenSmall] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const Role = localStorage.getItem("role");
  const createCoursePage = localStorage.getItem("createCoursePage");
  //console.log(Role);
  const location = useLocation();
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
    if (windowWidth >= 1024) {
      setScreenSmall(false);
    } else {
      setScreenSmall(true);
    }
  }, [windowWidth]);

  const handleClick = () => {
    setToggleButton(!toggleButton);
  };


  return (
    <>
      <MyHelmet>Dashboard</MyHelmet>
      <div>
        <div className=" font-sansita">

          <nav
            className={`bg-[#25282c] border-b border-gray-200 fixed z-30 w-full lg:hidden ${toggleButton ? "" : "hidden"
              }`}
          >
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
              <div
                className={`flex items-center justify-between ${toggleButton ? "" : "hidden"
                  }`}
              >
                <button
                  id="toggleSidebarMobile"
                  ariaExpanded="true"
                  ariaControls="sidebar"
                  className="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"
                  onClick={handleClick}
                >
                  <svg
                    id="toggleSidebarMobileHamburger"
                    className={`w-6 h-6 ${toggleButton ? "" : "hidden"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <div>
                  <img className="h-6 lg:h-8" src={logo} alt="icon" />
                </div>
              </div>
            </div>
          </nav>


          <div className="flex overflow-hidden">

            <aside
              id="sidebar"
              className={`fixed ${toggleButton ? "hidden" : ""
                } z-20 h-full top-0 bg-[#141414] shadow-lg left-0 flex lg:flex flex-shrink-0 flex-col w-[324px] transition duration-500 ease-in-out delay-150`}
              aria-label="Sidebar"
            >
              <div className=" flex-1 flex flex-col min-h-0 pt-0">
                <div className="flex-1 flex flex-col pb-4 overflow-y-auto">
                  <div className="flex-1 space-y-1">
                    <div className="py-8 border-b border-[#303031] flex items-center justify-between lg:justify-center">
                      <Link className="hidden lg:block" to={"/"}>
                        <img className="h-6 lg:h-8" src={logo} alt="icon" />
                      </Link>
                      <p className="text-[#676767] ml-[27px] lg:hidden">Menu</p>
                      <button
                        id="toggleSidebarMobile"
                        ariaExpanded="true"
                        ariaControls="sidebar"
                        className="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"
                        onClick={handleClick}
                      >
                        <img src={ArrowLeftIcon} alt="icon" />
                      </button>
                    </div>
                    {Role === "user" && (
                      <ul className="space-y-2 px-[22px] py-2 text-white">
                        <li>
                          <Link
                            style={
                              location.pathname === "/dashboard"
                                ? {
                                  background:
                                    "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                }
                                : {}
                            }
                            to="/dashboard"
                            className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                          >
                            {location.pathname === "/dashboard" ? (
                              <img
                                className=""
                                src={DashboardIconLight}
                                alt="icon"
                              />
                            ) : (
                              <img
                                className=""
                                src={DashboardIconDark}
                                alt="icon"
                              />
                            )}

                            <span
                              className={`${location.pathname === "/dashboard"
                                ? "text-white"
                                : "text-[#8F8F8F]"
                                } ml-3 text-[18px] font-[500]`}
                            >
                              Dashboard
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            style={
                              location.pathname === "/leaderBoard"
                                ? {
                                  background:
                                    "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                }
                                : {}
                            }
                            to="/leaderBoard"
                            className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                          >
                            {location.pathname === "/leaderBoard" ? (
                              <img
                                className=""
                                src={LeaderBoardIconLight}
                                alt="icon"
                              />
                            ) : (
                              <img
                                className=""
                                src={LeaderBoardIconDark}
                                alt="icon"
                              />
                            )}

                            <span
                              className={`${location.pathname === "/leaderBoard"
                                ? "text-white"
                                : "text-[#8F8F8F]"
                                } ml-3 text-[18px] font-[500]`}
                            >
                              Leader Board
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            style={
                              location.pathname === "/earning"
                                ? {
                                  background:
                                    "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                }
                                : {}
                            }
                            to="/earning"
                            className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                          >
                            {location.pathname === "/earning" ? (
                              <img
                                className=""
                                src={EarningIconLight}
                                alt="icon"
                              />
                            ) : (
                              <img
                                className=""
                                src={EarningIconDark}
                                alt="icon"
                              />
                            )}

                            <span
                              className={`${location.pathname === "/earning"
                                ? "text-white"
                                : "text-[#8F8F8F]"
                                } ml-3 text-[18px] font-[500]`}
                            >
                              Earning
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            style={
                              location.pathname === "/redemption"
                                ? {
                                  background:
                                    "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                }
                                : {}
                            }
                            to="/redemption"
                            className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                          >
                            {location.pathname === "/redemption" ? (
                              <img
                                className=""
                                src={RedemptionIconLight}
                                alt="icon"
                              />
                            ) : (
                              <img
                                className=""
                                src={RedemptionIconDark}
                                alt="icon"
                              />
                            )}

                            <span
                              className={`${location.pathname === "/redemption"
                                ? "text-white"
                                : "text-[#8F8F8F]"
                                } ml-3 text-[18px] font-[500]`}
                            >
                              Redemption
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            style={
                              location.pathname === "/skillAnalysis"
                                ? {
                                  background:
                                    "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                }
                                : {}
                            }
                            to="/skillAnalysis"
                            className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                          >
                            {location.pathname === "/skillAnalysis" ? (
                              <img
                                className=""
                                src={SkillAnalysisIconLight}
                                alt="icon"
                              />
                            ) : (
                              <img
                                className=""
                                src={SkillAnalysisIconDark}
                                alt="icon"
                              />
                            )}

                            <span
                              className={`${location.pathname === "/skillAnalysis"
                                ? "text-white"
                                : "text-[#8F8F8F]"
                                } ml-3 text-[18px] font-[500]`}
                            >
                              Skill Analysis
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            style={
                              location.pathname === "/careerAnalysis"
                                ? {
                                  background:
                                    "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                }
                                : {}
                            }
                            to="/careerAnalysis"
                            className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                          >
                            {location.pathname === "/careerAnalysis" ? (
                              <img
                                className=""
                                src={CareerAnalysisIconLight}
                                alt="icon"
                              />
                            ) : (
                              <img
                                className=""
                                src={CareerAnalysisIconDark}
                                alt="icon"
                              />
                            )}

                            <span
                              className={`${location.pathname === "/careerAnalysis"
                                ? "text-white"
                                : "text-[#8F8F8F]"
                                } ml-3 text-[18px] font-[500]`}
                            >
                              Career Analysis
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            style={
                              location.pathname === "/courseAccess"
                                ? {
                                  background:
                                    "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                }
                                : {}
                            }
                            to="/courseAccess"
                            className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                          >
                            {location.pathname === "/courseAccess" ? (
                              <img
                                className=""
                                src={CourseAccessIconLight}
                                alt="icon"
                              />
                            ) : (
                              <img
                                className=""
                                src={CourseAccessIconDark}
                                alt="icon"
                              />
                            )}

                            <span
                              className={`${location.pathname === "/courseAccess"
                                ? "text-white"
                                : "text-[#8F8F8F]"
                                } ml-3 text-[18px] font-[500]`}
                            >
                              Course Access
                            </span>
                          </Link>
                        </li>
                      </ul>
                    )}
                    {Role === "admin" && (
                      <>

                        <ul className="space-y-2 px-[22px] py-2 text-white">
                          <li>
                            <Link
                              style={
                                (location.pathname === "/userManagement")
                                  ? {
                                    background:
                                      "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF"
                                  }
                                  : {}
                              }
                              to=""
                              className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                            >
                              {
                                (location.pathname === "/userManagement")
                                  ? (
                                    <img
                                      className=""
                                      src={users}
                                      alt="icon"
                                    />
                                  ) : (
                                    <img
                                      className=""
                                      src={DashboardIconDark}
                                      alt="icon"
                                    />
                                  )}

                              <span
                                className={`${(location.pathname === "/userManagement")
                                  ? "text-white"
                                  : "text-[#8F8F8F]"
                                  } ml-3 text-[18px] font-[500]`}
                              >
                                User Management
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              style={
                                location.pathname === "/enrollRegistration"
                                  ? {
                                    background:
                                      "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                  }
                                  : {}
                              }
                              to="/enrollRegistration"
                              className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                            >
                              {location.pathname === "/enrollRegistration" ? (
                                <img
                                  className=""
                                  src={enroll}
                                  alt="icon"
                                />
                              ) : (
                                <img
                                  className=""
                                  src={enroll}
                                  alt="icon"
                                />
                              )}

                              <span
                                className={`${location.pathname === "/enrollRegistration"
                                  ? "text-white"
                                  : "text-[#8F8F8F]"
                                  } ml-3 text-[18px] font-[500]`}
                              >
                                Enroll & Registration
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              style={
                                location.pathname === "/contentManagement"
                                  ? {
                                    background:
                                      "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                  }
                                  : {}
                              }
                              to="/contentManagement"
                              className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                            >
                              {location.pathname === "/contentManagement" ? (
                                <img
                                  className=""
                                  src={book}
                                  alt="icon"
                                />
                              ) : (
                                <img
                                  className=""
                                  src={book}
                                  alt="icon"
                                />
                              )}

                              <span
                                className={`${location.pathname === "/contentManagement"
                                  ? "text-white"
                                  : "text-[#8F8F8F]"
                                  } ml-3 text-[18px] font-[500]`}
                              >
                                Content Management
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              style={
                                location.pathname === "/finance "
                                  ? {
                                    background:
                                      "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                  }
                                  : {}
                              }
                              to="/finance "
                              className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                            >
                              {location.pathname === "/finance " ? (
                                <img
                                  className=""
                                  src={dollar}
                                  alt="icon"
                                />
                              ) : (
                                <img
                                  className=""
                                  src={dollar}
                                  alt="icon"
                                />
                              )}

                              <span
                                className={`${location.pathname === "/finance "
                                  ? "text-white"
                                  : "text-[#8F8F8F]"
                                  } ml-3 text-[18px] font-[500]`}
                              >
                                Finance
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              style={
                                location.pathname === "/communication "
                                  ? {
                                    background:
                                      "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                  }
                                  : {}
                              }
                              to="/communication "
                              className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                            >
                              {location.pathname === "/communication " ? (
                                <img
                                  className=""
                                  src={message}
                                  alt="icon"
                                />
                              ) : (
                                <img
                                  className=""
                                  src={message}
                                  alt="icon"
                                />
                              )}

                              <span
                                className={`${location.pathname === "/communication "
                                  ? "text-white"
                                  : "text-[#8F8F8F]"
                                  } ml-3 text-[18px] font-[500]`}
                              >
                                communication
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              style={
                                location.pathname === "/dataSecurity "
                                  ? {
                                    background:
                                      "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                  }
                                  : {}
                              }
                              to="/dataSecurity "
                              className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                            >
                              {location.pathname === "/dataSecurity " ? (
                                <img
                                  className=""
                                  src={shield}
                                  alt="icon"
                                />
                              ) : (
                                <img
                                  className=""
                                  src={shield}
                                  alt="icon"
                                />
                              )}

                              <span
                                className={`${location.pathname === "/dataSecurity "
                                  ? "text-white"
                                  : "text-[#8F8F8F]"
                                  } ml-3 text-[18px] font-[500]`}
                              >
                                Data & Security
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              style={
                                location.pathname === "/systemPreference "
                                  ? {
                                    background:
                                      "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                  }
                                  : {}
                              }
                              to="/systemPreference "
                              className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                            >
                              {location.pathname === "/systemPreference " ? (
                                <img
                                  className=""
                                  src={sliders}
                                  alt="icon"
                                />
                              ) : (
                                <img
                                  className=""
                                  src={sliders}
                                  alt="icon"
                                />
                              )}

                              <span
                                className={`${location.pathname === "/systemPreference "
                                  ? "text-white"
                                  : "text-[#8F8F8F]"
                                  } ml-3 text-[18px] font-[500]`}
                              >
                                System & Preference
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              style={
                                (location.pathname === "/studentControl" || location.pathname === "/unpaidDashboard")
                                  ? {
                                    background:
                                      "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                  }
                                  : {}
                              }
                              to="/studentControl "
                              className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                            >
                              {(location.pathname === "/studentControl" || location.pathname === "/unpaidDashboard") ? (
                                <img
                                  className=""
                                  src={award}
                                  alt="icon"
                                />
                              ) : (
                                <img
                                  className=""
                                  src={award}
                                  alt="icon"
                                />
                              )}

                              <span
                                className={`${(location.pathname === "/studentControl" || location.pathname === "/unpaidDashboard")
                                  ? "text-white"
                                  : "text-[#8F8F8F]"
                                  } ml-3 text-[18px] font-[500]`}
                              >
                                Student Control
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              style={
                                location.pathname === "/mentorControl "
                                  ? {
                                    background:
                                      "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                  }
                                  : {}
                              }
                              to="/mentorControl "
                              className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                            >
                              {location.pathname === "/mentorControl " ? (
                                <img
                                  className=""
                                  src={pentool}
                                  alt="icon"
                                />
                              ) : (
                                <img
                                  className=""
                                  src={pentool}
                                  alt="icon"
                                />
                              )}

                              <span
                                className={`${location.pathname === "/mentorControl"
                                  ? "text-white"
                                  : "text-[#8F8F8F]"
                                  } ml-3 text-[18px] font-[500]`}
                              >
                                Mentor Control
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              style={
                                (location.pathname === "/pointsAndRedemptions" || location.pathname === '/gamifiedSettings' || location.pathname === '/earningLogics' || location.pathname === '/redemptionLogics')
                                  ? {
                                    background:
                                      "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                  }
                                  : {}
                              }
                              to="/pointsAndRedemptions "
                              className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                            >
                              {location.pathname === "/pointsAndRedemptions" ? (
                                <img
                                  className=""
                                  src={gift}
                                  alt="icon"
                                />
                              ) : (
                                <img
                                  className=""
                                  src={gift}
                                  alt="icon"
                                />
                              )}

                              <span
                                className={`${(location.pathname === "/pointsAndRedemptions" || location.pathname === '/gamifiedSettings' || location.pathname === '/earningLogics' || location.pathname === '/redemptionLogics')
                                  ? "text-[#fff]"
                                  : "text-[#8F8F8F]"
                                  } ml-3 text-[18px] font-[500]`}
                              >
                                Points & Redemptions
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              style={
                                (location.pathname === "/skillsManagement" || location.pathname === "/skillsCreations" || location.pathname === "/skillsImprovementEngine")
                                  ? {
                                    background:
                                      "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                  }
                                  : {}
                              }
                              to="/skillsManagement "
                              className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                            >
                              {location.pathname === "/skillsManagement" ? (
                                <img
                                  className=""
                                  src={users}
                                  alt="icon"
                                />
                              ) : (
                                <img
                                  className=""
                                  src={users}
                                  alt="icon"
                                />
                              )}

                              <span
                                className={`${(location.pathname === "/skillsManagement" || location.pathname === "/skillsCreations" || location.pathname === "/skillsImprovementEngine")
                                  ? "text-[#fff]"
                                  : "text-[#8F8F8F]"
                                  } ml-3 text-[18px] font-[500]`}
                              >
                                Skills Management
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              style={
                                (location.pathname === "/feedback ")
                                  ? {
                                    background:
                                      "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                  }
                                  : {}
                              }
                              to="/feedback "
                              className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                            >
                              {location.pathname === "/feedback " ? (
                                <img
                                  className=""
                                  src={feather}
                                  alt="icon"
                                />
                              ) : (
                                <img
                                  className=""
                                  src={feather}
                                  alt="icon"
                                />
                              )}

                              <span
                                className={`${(location.pathname === "/feedback")
                                  ? "text-[#2EB0FB]"
                                  : "text-[#8F8F8F]"
                                  } ml-3 text-[18px] font-[500]`}
                              >
                                Feedback
                              </span>
                            </Link>
                          </li>
                          {/* <li>
                          <Link
                            style={
                              location.pathname === "/earning"
                                ? {
                                    background:
                                      "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                  }
                                : {}
                            }
                            to="/earning"
                            className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                          >
                            {location.pathname === "/earning" ? (
                              <img
                                className=""
                                src={EarningIconLight}
                                alt="icon"
                              />
                            ) : (
                              <img
                                className=""
                                src={EarningIconDark}
                                alt="icon"
                              />
                            )}

                            <span
                              className={`${
                                location.pathname === "/earning"
                                  ? "text-white"
                                  : "text-[#8F8F8F]"
                              } ml-3 text-[18px] font-[500]`}
                            >
                              Earning
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            style={
                              location.pathname === "/redemption"
                                ? {
                                    background:
                                      "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                  }
                                : {}
                            }
                            to="/redemption"
                            className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                          >
                            {location.pathname === "/redemption" ? (
                              <img
                                className=""
                                src={RedemptionIconLight}
                                alt="icon"
                              />
                            ) : (
                              <img
                                className=""
                                src={RedemptionIconDark}
                                alt="icon"
                              />
                            )}

                            <span
                              className={`${
                                location.pathname === "/redemption"
                                  ? "text-white"
                                  : "text-[#8F8F8F]"
                              } ml-3 text-[18px] font-[500]`}
                            >
                              Redemption
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            style={
                              location.pathname === "/skillAnalysis"
                                ? {
                                    background:
                                      "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                  }
                                : {}
                            }
                            to="/skillAnalysis"
                            className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                          >
                            {location.pathname === "/skillAnalysis" ? (
                              <img
                                className=""
                                src={SkillAnalysisIconLight}
                                alt="icon"
                              />
                            ) : (
                              <img
                                className=""
                                src={SkillAnalysisIconDark}
                                alt="icon"
                              />
                            )}

                            <span
                              className={`${
                                location.pathname === "/skillAnalysis"
                                  ? "text-white"
                                  : "text-[#8F8F8F]"
                              } ml-3 text-[18px] font-[500]`}
                            >
                              Skill Analysis
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            style={
                              location.pathname === "/careerAnalysis"
                                ? {
                                    background:
                                      "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                  }
                                : {}
                            }
                            to="/careerAnalysis"
                            className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                          >
                            {location.pathname === "/careerAnalysis" ? (
                              <img
                                className=""
                                src={CareerAnalysisIconLight}
                                alt="icon"
                              />
                            ) : (
                              <img
                                className=""
                                src={CareerAnalysisIconDark}
                                alt="icon"
                              />
                            )}

                            <span
                              className={`${
                                location.pathname === "/careerAnalysis"
                                  ? "text-white"
                                  : "text-[#8F8F8F]"
                              } ml-3 text-[18px] font-[500]`}
                            >
                              Career Analysis
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            style={
                              location.pathname === "/courseAccess"
                                ? {
                                    background:
                                      "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                  }
                                : {}
                            }
                            to="/courseAccess"
                            className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                          >
                            {location.pathname === "/courseAccess" ? (
                              <img
                                className=""
                                src={CourseAccessIconLight}
                                alt="icon"
                              />
                            ) : (
                              <img
                                className=""
                                src={CourseAccessIconDark}
                                alt="icon"
                              />
                            )}

                            <span
                              className={`${
                                location.pathname === "/courseAccess"
                                  ? "text-white"
                                  : "text-[#8F8F8F]"
                              } ml-3 text-[18px] font-[500]`}
                            >
                              Course Access
                            </span>
                          </Link>
                        </li> */}
                        </ul>
                      </>

                    )}


                    {Role === "execution mentor" && (
                      <>

                        <ul className="space-y-2 px-[22px] py-2 text-white">
                          <li>
                            <Link
                              style={
                                (location.pathname === "/executionMentorDashboard" || location.pathname === "/performanceFeedback" || location.pathname === "/students" || location.pathname === "/studentsWhoNeedMoreGuidance" || location.pathname === "/studentFeedback" || location.pathname === "/departmentEvaluation")
                                  ? {
                                    background:
                                      "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF"
                                  }
                                  : {}
                              }
                              to="/executionMentorDashboard"
                              className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                            >
                              {
                                (location.pathname === "/executionMentorDashboard" || location.pathname === "/performanceFeedback" || location.pathname === "/students" || location.pathname === "/studentsWhoNeedMoreGuidance" || location.pathname === "/studentFeedback" || location.pathname === "/departmentEvaluation")
                                  ? (
                                    <img
                                      className=""
                                      src={dashboard}
                                      alt="icon"
                                    />
                                  ) : (
                                    <img
                                      className=""
                                      src={DashboardIconDark}


                                      alt="icon"
                                    />
                                  )}

                              <span
                                className={`${(location.pathname === "/executionMentorDashboard" || location.pathname === "/performanceFeedback" || location.pathname === "/students" || location.pathname === "/studentsWhoNeedMoreGuidance" || location.pathname === "/studentFeedback" || location.pathname === "/departmentEvaluation")
                                  ? "text-white"
                                  : "text-[#8F8F8F]"
                                  } ml-3 text-[18px] font-[500]`}
                              >
                                Dashboard
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              style={
                                (location.pathname === "/liveClasses" || location.pathname === "/upcomingClasses")
                                  ? {
                                    background:
                                      "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                  }
                                  : {}
                              }
                              to="/liveClasses"
                              className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                            >
                              {(location.pathname === "/liveClasses" || location.pathname === "/upcomingClasses") ? (
                                <img
                                  className=""
                                  src={liveClass}
                                  alt="icon"
                                />
                              ) : (
                                <img
                                  className=""
                                  src={liveClass1}
                                  alt="icon"
                                />
                              )}

                              <span
                                className={`${(location.pathname === "/liveClasses" || location.pathname === "/upcomingClasses")
                                  ? "text-white"
                                  : "text-[#8F8F8F]"
                                  } ml-3 text-[18px] font-[500]`}
                              >
                                Live Classes
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              style={
                                location.pathname === "/schedule"
                                  ? {
                                    background:
                                      "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                  }
                                  : {}
                              }
                              to="/schedule"
                              className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                            >
                              {location.pathname === "/schedule" ? (
                                <img
                                  className=""
                                  src={Schedule}
                                  alt="icon"
                                />
                              ) : (
                                <img
                                  className=""
                                  src={Schedule1}
                                  alt="icon"
                                />
                              )}

                              <span
                                className={`${location.pathname === "/schedule"
                                  ? "text-white"
                                  : "text-[#8F8F8F]"
                                  } ml-3 text-[18px] font-[500]`}
                              >
                                Schedule
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              style={
                                location.pathname === "/quizzes"
                                  ? {
                                    background:
                                      "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                  }
                                  : {}
                              }
                              to="/quizzes "
                              className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                            >
                              {location.pathname === "/quizzes" ? (
                                <img
                                  className=""
                                  src={Quizzes}
                                  alt="icon"
                                />
                              ) : (
                                <img
                                  className=""
                                  src={Quizzes}
                                  alt="icon"
                                />
                              )}

                              <span
                                className={`${location.pathname === "/quizzes "
                                  ? "text-white"
                                  : "text-[#8F8F8F]"
                                  } ml-3 text-[18px] font-[500]`}
                              >
                                Quizzes
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              style={
                                location.pathname === "/exams"
                                  ? {
                                    background:
                                      "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                  }
                                  : {}
                              }
                              to="/exams"
                              className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                            >
                              {location.pathname === "/exams" ? (
                                <img
                                  className=""
                                  src={Exams}
                                  alt="icon"
                                />
                              ) : (
                                <img
                                  className=""
                                  src={Exams}
                                  alt="icon"
                                />
                              )}

                              <span
                                className={`${location.pathname === "/exams"
                                  ? "text-white"
                                  : "text-[#8F8F8F]"
                                  } ml-3 text-[18px] font-[500]`}
                              >
                                Exams
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              style={
                                (location.pathname === "/mentorAssignments" || location.pathname === "/assignmentEvaluation1" || location.pathname === "/assignmentEvaluation2")
                                  ? {
                                    background:
                                      "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                  }
                                  : {}
                              }
                              to="/mentorAssignments"
                              className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                            >
                              {(location.pathname === "/mentorAssignments" || location.pathname === "/assignmentEvaluation1" || location.pathname === "/assignmentEvaluation2") ? (
                                <img
                                  className=""
                                  src={Assignments}
                                  alt="icon"
                                />
                              ) : (
                                <img
                                  className=""
                                  src={Assignments1}
                                  alt="icon"
                                />
                              )}

                              <span
                                className={`${(location.pathname === "/mentorAssignments" || location.pathname === "/assignmentEvaluation1" || location.pathname === "/assignmentEvaluation2")
                                  ? "text-white"
                                  : "text-[#8F8F8F]"
                                  } ml-3 text-[18px] font-[500]`}
                              >
                                Assignments
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              style={
                                location.pathname === "/batches"
                                  ? {
                                    background:
                                      "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                  }
                                  : {}
                              }
                              to="/batches"
                              className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                            >
                              {location.pathname === "/batches" ? (
                                <img
                                  className=""
                                  src={Batches}
                                  alt="icon"
                                />
                              ) : (
                                <img
                                  className=""
                                  src={Batches}
                                  alt="icon"
                                />
                              )}

                              <span
                                className={`${location.pathname === "/batches"
                                  ? "text-white"
                                  : "text-[#8F8F8F]"
                                  } ml-3 text-[18px] font-[500]`}
                              >
                                Batches
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              style={
                                location.pathname === "/doubts"
                                  ? {
                                    background:
                                      "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                  }
                                  : {}
                              }
                              to="/doubts"
                              className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                            >
                              {location.pathname === "/doubts" ? (
                                <img
                                  className=""
                                  src={Doubts}
                                  alt="icon"
                                />
                              ) : (
                                <img
                                  className=""
                                  src={Doubts1}
                                  alt="icon"
                                />
                              )}

                              <span
                                className={`${location.pathname === "/doubts"
                                  ? "text-white"
                                  : "text-[#8F8F8F]"
                                  } ml-3 text-[18px] font-[500]`}
                              >
                                Doubts
                              </span>
                            </Link>
                          </li>

                        </ul>
                      </>

                    )}

                    {Role === "unpaid student" && (
                      <>

                        <ul className="space-y-2 px-[22px] py-2 text-white">
                          <li>
                            <Link
                              style={
                                (location.pathname === "/unpaidStudentDashboard")
                                  ? {
                                    background:
                                      "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF"
                                  }
                                  : {}
                              }
                              to="/unpaidStudentDashboard"
                              className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                            >
                              {
                                (location.pathname === "/unpaidStudentDashboard")
                                  ? (
                                    <img
                                      className=""
                                      src={dashboard}
                                      alt="icon"
                                    />
                                  ) : (
                                    <img
                                      className=""
                                      src={DashboardIconDark}


                                      alt="icon"
                                    />
                                  )}

                              <span
                                className={`${(location.pathname === "/unpaidStudentDashboard")
                                  ? "text-white"
                                  : "text-[#8F8F8F]"
                                  } ml-3 text-[18px] font-[500]`}
                              >
                                Dashboard
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              style={
                                (location.pathname === "/redemption")
                                  ? {
                                    background:
                                      "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                  }
                                  : {}
                              }
                              to="/unpaidStudentRedemption"
                              className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                            >
                              {(location.pathname === "/redemption") ? (
                                <img
                                  className=""
                                  src={redemption1}
                                  alt="icon"
                                />
                              ) : (
                                <img
                                  className=""
                                  src={redemption}
                                  alt="icon"
                                />
                              )}

                              <span
                                className={`${(location.pathname === "/redemption")
                                  ? "text-white"
                                  : "text-[#8F8F8F]"
                                  } ml-3 text-[18px] font-[500]`}
                              >
                                redemption
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              style={
                                location.pathname === "/coursesAccess"
                                  ? {
                                    background:
                                      "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                  }
                                  : {}
                              }
                              to="/coursesAccess"
                              className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                            >
                              {location.pathname === "/coursesAccess" ? (
                                <img
                                  className=""
                                  src={courseAccess1}
                                  alt="icon"
                                />
                              ) : (
                                <img
                                  className=""
                                  src={courseAccess}
                                  alt="icon"
                                />
                              )}

                              <span
                                className={`${location.pathname === "/coursesAccess"
                                  ? "text-white"
                                  : "text-[#8F8F8F]"
                                  } ml-3 text-[18px] font-[500]`}
                              >
                                Courses Access
                              </span>
                            </Link>
                          </li>

                        </ul>
                      </>

                    )}

                    {Role === "expert mentor" && (
                      <>

                        <ul className="space-y-2 px-[22px] py-2 text-white">
                          <li>
                            <Link
                              style={
                                (location.pathname === "/expertMentorDashboard")
                                  ? {
                                    background:
                                      "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF"
                                  }
                                  : {}
                              }
                              to="/expertMentorDashboard"
                              className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                            >
                              {
                                (location.pathname === "/expertMentorDashboard")
                                  ? (
                                    <img
                                      className=""
                                      src={dashboard}
                                      alt="icon"
                                    />
                                  ) : (
                                    <img
                                      className=""
                                      src={DashboardIconDark}


                                      alt="icon"
                                    />
                                  )}

                              <span
                                className={`${(location.pathname === "/expertMentorDashboard")
                                  ? "text-white"
                                  : "text-[#8F8F8F]"
                                  } ml-3 text-[18px] font-[500]`}
                              >
                                Dashboard
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              style={
                                (location.pathname === "/expertMentorResourceCentre")
                                  ? {
                                    background:
                                      "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                  }
                                  : {}
                              }
                              to="/expertMentorResourceCentre"
                              className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                            >
                              {(location.pathname === "/expertMentorResourceCentre") ? (
                                <img
                                  className=""
                                  src={resourceCenter1}
                                  alt="icon"
                                />
                              ) : (
                                <img
                                  className=""
                                  src={resourceCenter}
                                  alt="icon"
                                />
                              )}

                              <span
                                className={`${(location.pathname === "/expertMentorResourceCentre")
                                  ? "text-white"
                                  : "text-[#8F8F8F]"
                                  } ml-3 text-[18px] font-[500]`}
                              >
                                Resource Centre
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              style={
                                (location.pathname === "/expertMentorStudentProgress")
                                  ? {
                                    background:
                                      "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                  }
                                  : {}
                              }
                              to="/expertMentorStudentProgress"
                              className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                            >
                              {(location.pathname === "/expertMentorStudentProgress") ? (
                                <img
                                  className=""
                                  src={StudentProgress1}
                                  alt="icon"
                                />
                              ) : (
                                <img
                                  className=""
                                  src={StudentProgress}
                                  alt="icon"
                                />
                              )}

                              <span
                                className={`${(location.pathname === "/expertMentorStudentProgress")
                                  ? "text-white"
                                  : "text-[#8F8F8F]"
                                  } ml-3 text-[18px] font-[500]`}
                              >
                                Student Progress
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              style={
                                location.pathname === "/showcasePage"
                                  ? {
                                    background:
                                      "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                  }
                                  : {}
                              }
                              to="/showcasePage"
                              className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                            >
                              {location.pathname === "/showcasePage" ? (
                                <img
                                  className=""
                                  src={ShowcasePage1}
                                  alt="icon"
                                />
                              ) : (
                                <img
                                  className=""
                                  src={ShowcasePage}
                                  alt="icon"
                                />
                              )}

                              <span
                                className={`${location.pathname === "/showcasePage"
                                  ? "text-white"
                                  : "text-[#8F8F8F]"
                                  } ml-3 text-[18px] font-[500]`}
                              >
                                Showcase Page
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              style={
                                location.pathname === "/expertMentorStudentFeedback"
                                  ? {
                                    background:
                                      "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                  }
                                  : {}
                              }
                              to="/expertMentorStudentFeedback"
                              className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                            >
                              {location.pathname === "/expertMentorStudentFeedback" ? (
                                <img
                                  className=""
                                  src={Feedback1}
                                  alt="icon"
                                />
                              ) : (
                                <img
                                  className=""
                                  src={Feedback}
                                  alt="icon"
                                />
                              )}

                              <span
                                className={`${location.pathname === "/expertMentorStudentFeedback"
                                  ? "text-white"
                                  : "text-[#8F8F8F]"
                                  } ml-3 text-[18px] font-[500]`}
                              >
                                Feedback
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              style={
                                location.pathname === "/mentorClub"
                                  ? {
                                    background:
                                      "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                  }
                                  : {}
                              }
                              to="/mentorClub"
                              className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                            >
                              {location.pathname === "/mentorClub" ? (
                                <img
                                  className=""
                                  src={courseAccess1}
                                  alt="icon"
                                />
                              ) : (
                                <img
                                  className=""
                                  src={MentorClub}
                                  alt="icon"
                                />
                              )}

                              <span
                                className={`${location.pathname === "/mentorClub"
                                  ? "text-white"
                                  : "text-[#8F8F8F]"
                                  } ml-3 text-[18px] font-[500]`}
                              >
                                Mentor Club
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              style={
                                location.pathname === "/incomeGateway"
                                  ? {
                                    background:
                                      "linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.274309) 35.55%, rgba(0, 0, 0, 0) 100%), #6278FF",
                                  }
                                  : {}
                              }
                              to="/incomeGateway"
                              className={`text-white font-normal rounded-[15px] flex items-center px-[20px] py-[13px]  group`}
                            >
                              {location.pathname === "/incomeGateway" ? (
                                <img
                                  className=""
                                  src={courseAccess1}
                                  alt="icon"
                                />
                              ) : (
                                <img
                                  className=""
                                  src={incomeGateway}
                                  alt="icon"
                                />
                              )}

                              <span
                                className={`${location.pathname === "/incomeGateway"
                                  ? "text-white"
                                  : "text-[#8F8F8F]"
                                  } ml-3 text-[18px] font-[500]`}
                              >
                                Income Gateway
                              </span>
                            </Link>
                          </li>

                        </ul>
                      </>

                    )}


                    <div className="pt-[90px] flex items-center px-[42px]">
                      <img
                        className="w-[37px] h-[56px] mr-[10px]"
                        src={userPhoto}
                        alt="user"
                      />
                      <div>
                        <h2 className="text-white text-[16px]">Akash Tiwari</h2>
                        <p className="text-[#747475] text-[14px]">
                          atiwari@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
            <div
              className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"
              id="sidebarBackdrop"
            ></div>
            <div
              id="main-content"
              className="h-full w-full relative lg:ml-[324px]"
            >
              <main className="min-h-[100vh]">
                <div className="">{children}</div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
