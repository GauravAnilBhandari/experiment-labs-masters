import { Button } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import Stories from "react-insta-stories";
import OutboundOutlinedIcon from "@mui/icons-material/OutboundOutlined";
import "./style.css";
import logo2 from "../../../assets/Logos/Group 2859890.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y, FreeMode } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CleanHandsTwoToneIcon from "@mui/icons-material/CleanHandsTwoTone";
import CurrencyExchangeTwoToneIcon from "@mui/icons-material/CurrencyExchangeTwoTone";
import MoneyTwoToneIcon from "@mui/icons-material/MoneyTwoTone";
import img from "../../../assets/wepik-export-20230516131526jrNm.png";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HearStraight from "../HearStraight";
import HearFromStudents from "../HearFromStudents/HearFromStudents";

const DualManagement = () => {
  const stickyRef = useRef(null);
  const stickyRef2 = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const containerRect = containerRef.current.getBoundingClientRect();
      const stickyRect = stickyRef.current.getBoundingClientRect();
      const stickyRect2 = stickyRef2.current.getBoundingClientRect();
      const bottomOffset = containerRect.bottom - stickyRect.height;
      const bottomOffset2 = containerRect.bottom - stickyRect2.height;

      // console.log(bottomOffset, bottomOffset2);

      if (bottomOffset < 0 && window.innerWidth > 1024) {
        stickyRef.current.style.position = "block";
        stickyRef2.current.style.position = "block";
        stickyRef.current.style.bottom = "0";
        stickyRef2.current.style.bottom = "0";
      } else {
        stickyRef.current.style.position = "sticky";
        stickyRef2.current.style.position = "sticky";
        stickyRef.current.style.bottom = "auto";
        stickyRef2.current.style.bottom = "auto";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="mt-28 px-5 py-10 lg:px-30 xl:px-32 font" ref={containerRef}>
      {/* <h1 className="font-bold text-4xl font block lg:hidden mb-6 lg:mb-0">
        Curriculum with Dual Focus on Tech And Management
      </h1> */}
      <div
        ref={stickyRef}
        style={{
          top: 80,
          backgroundColor: "#141414",
          padding: "35px 0",
          zIndex: "1000",
          width: "100%",
        }}
        className="hidden lg:block"
      >
        {/* <h1 className="font-bold text-3xl">
          Curriculum with Dual Focus on Tech And Management
        </h1> */}
      </div>
      <div className="flex flex-col lg:flex-row gap-10 items-start w-full">
        <div
          ref={stickyRef2}
          style={{ top: 190, zIndex: "1" }}
          className="hidden lg:flex flex-col gap-5 w-full max-w-[370px] min-w-[300px] sticky"
        >
          <h1 className="text-lg">New Age Concentrations</h1>

          <div className=" p-4 rounded-md lg:w-[370px] w-full">
            <p className="p-1 rounded-full pl-3 text-sm w-[250px] bg-[#9747FF]  font-bold">
              CORE TOPICS
            </p>
            <div className="my-6 flex flex-col gap-y-1">
              <div className="flex flex-row items-start gap-1">
                <span>
                  <PlayArrowRoundedIcon sx={{ color: "#FFFFFF" }} />
                </span>
                <span className="text-sm font-light">
                  Find the Right ideas and problem solving
                </span>
              </div>
              <div className="flex flex-row items-start gap-1">
                <span>
                  <PlayArrowRoundedIcon sx={{ color: "#FFFFFF" }} />
                </span>
                <span className="text-sm font-light">
                  Design Thinking and impact Measurement
                </span>
              </div>
              <div className="flex flex-row items-start gap-1">
                <span>
                  <PlayArrowRoundedIcon sx={{ color: "#FFFFFF" }} />
                </span>
                <span className="text-sm font-light">
                  Getting your first customers and building processes
                </span>
              </div>
              <div className="flex flex-row items-start gap-1">
                <span>
                  <PlayArrowRoundedIcon sx={{ color: "#FFFFFF" }} />
                </span>
                <span className="text-sm font-light">
                  Understanding financial modeling
                </span>
              </div>

              <div className="flex flex-row items-start lg:ml-8 gap-1">
                {/*                                 <span><PlayArrowRoundedIcon sx={{ color: '#FFFFFF' }} /></span>
                 */}{" "}
                <span className="text-sm font-light">And Many More...</span>
              </div>
            </div>
            <p className="p-1 rounded-full pl-3 text-sm w-[250px] bg-[#9747FF]  font-bold">
              SKILL CONCENTRATIONS
            </p>
            <div className="my-6 flex flex-col gap-y-1">
              <div className="flex flex-row items-start gap-1">
                <span>
                  <PlayArrowRoundedIcon sx={{ color: "#FFFFFF" }} />
                </span>
                <span className="text-sm font-light">Critical Thinking</span>
              </div>

              <div className="flex flex-row items-start gap-1">
                <span>
                  <PlayArrowRoundedIcon sx={{ color: "#FFFFFF" }} />
                </span>
                <span className="text-sm font-light">Analytics</span>
              </div>
              <div className="flex flex-row items-start gap-1">
                <span>
                  <PlayArrowRoundedIcon sx={{ color: "#FFFFFF" }} />
                </span>
                <span className="text-sm font-light">Negotiation</span>
              </div>
              <div className="flex flex-row items-start gap-1">
                <span>
                  <PlayArrowRoundedIcon sx={{ color: "#FFFFFF" }} />
                </span>
                <span className="text-sm font-light">Time Management</span>
              </div>
              <div className="flex flex-row items-start gap-1">
                <span>
                  <PlayArrowRoundedIcon sx={{ color: "#FFFFFF" }} />
                </span>
                <span className="text-sm font-light">Leadership</span>
              </div>

              <div className="flex flex-row items-start lg:ml-8 gap-1">
                {/*                                 <span><PlayArrowRoundedIcon sx={{ color: '#FFFFFF' }} /></span>
                 */}{" "}
                <span className="text-sm font-light">And Many More...</span>
              </div>
            </div>
            <p className="p-1 rounded-full pl-3 text-sm w-[250px] bg-[#9747FF]  font-bold">
              EXPLORE CAREERS IN
            </p>
            <div className="mt-6 flex flex-col gap-y-1">
              <div className="flex flex-row items-start gap-1">
                <span>
                  <PlayArrowRoundedIcon sx={{ color: "#FFFFFF" }} />
                </span>
                <span className="text-sm font-light">Entrepreneurship</span>
              </div>
              <div className="flex flex-row items-start gap-1">
                <span>
                  <PlayArrowRoundedIcon sx={{ color: "#FFFFFF" }} />
                </span>
                <span className="text-sm font-light">Consuliting</span>
              </div>
              <div className="flex flex-row items-start gap-1">
                <span>
                  <PlayArrowRoundedIcon sx={{ color: "#FFFFFF" }} />
                </span>
                <span className="text-sm font-light">Finance</span>
              </div>
              <div className="flex flex-row items-start gap-1">
                <span>
                  <PlayArrowRoundedIcon sx={{ color: "#FFFFFF" }} />
                </span>
                <span className="text-sm font-light">Sales</span>
              </div>
              <div className="flex flex-row items-start gap-1">
                <span>
                  <PlayArrowRoundedIcon sx={{ color: "#FFFFFF" }} />
                </span>
                <span className="text-sm font-light">Operations</span>
              </div>
              <div className="flex flex-row items-start lg:ml-8 gap-1">
                {/*                                 <span><PlayArrowRoundedIcon sx={{ color: '#FFFFFF' }} /></span>
                 */}{" "}
                <span className="text-sm font-light">And Many More...</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex lg:hidden flex-col gap-5 w-full">
          <h1 className="text-lg">New Age Concentrations</h1>

          <div className=" p-4 rounded-md lg:w-[370px] w-full">
            <p className="p-1 rounded-full pl-3 text-sm w-[250px] bg-[#9747FF]  font-bold">
              CORE TOPICS
            </p>
            <div className="my-6 flex flex-col gap-y-1">
              <div className="flex flex-row items-start gap-1">
                <span>
                  <PlayArrowRoundedIcon sx={{ color: "#FFFFFF" }} />
                </span>
                <span className="text-sm font-light">
                  What is Innovation and Product Development
                </span>
              </div>
              <div className="flex flex-row items-start gap-1">
                <span>
                  <PlayArrowRoundedIcon sx={{ color: "#FFFFFF" }} />
                </span>
                <span className="text-sm font-light">
                  Finding the Right ideas and problem Solving
                </span>
              </div>
              <div className="flex flex-row items-start gap-1">
                <span>
                  <PlayArrowRoundedIcon sx={{ color: "#FFFFFF" }} />
                </span>
                <span className="text-sm font-light">
                  Design Thinking and impact Measurement
                </span>
              </div>
              <div className="flex flex-row items-start gap-1">
                <span>
                  <PlayArrowRoundedIcon sx={{ color: "#FFFFFF" }} />
                </span>
                <span className="text-sm font-light">
                  Technology 101 and Engineering
                </span>
              </div>
              <div className="flex flex-row items-start gap-1">
                <span>
                  <PlayArrowRoundedIcon sx={{ color: "#FFFFFF" }} />
                </span>
                <span className="text-sm font-light">
                  Understanding Audiences, Case studies & Strategies
                </span>
              </div>
              <div className="flex flex-row items-start lg:ml-8 gap-1">
                {/*                                 <span><PlayArrowRoundedIcon sx={{ color: '#FFFFFF' }} /></span>
                 */}{" "}
                <span className="text-sm font-light">And Many More...</span>
              </div>
            </div>
            <p className="p-1 rounded-full pl-3 text-sm w-[250px] bg-[#9747FF]  font-bold">
              SKILL CONCENTRATIONS
            </p>
            <div className="my-6 flex flex-col gap-y-1">
              <div className="flex flex-row items-start gap-1">
                <span>
                  <PlayArrowRoundedIcon sx={{ color: "#FFFFFF" }} />
                </span>
                <span className="text-sm font-light">Critical Thinking</span>
              </div>
              <div className="flex flex-row items-start gap-1">
                <span>
                  <PlayArrowRoundedIcon sx={{ color: "#FFFFFF" }} />
                </span>
                <span className="text-sm font-light">Tech mindset</span>
              </div>
              <div className="flex flex-row items-start gap-1">
                <span>
                  <PlayArrowRoundedIcon sx={{ color: "#FFFFFF" }} />
                </span>
                <span className="text-sm font-light">Communications</span>
              </div>
              <div className="flex flex-row items-start gap-1">
                <span>
                  <PlayArrowRoundedIcon sx={{ color: "#FFFFFF" }} />
                </span>
                <span className="text-sm font-light">Analytics</span>
              </div>

              <div className="flex flex-row items-start lg:ml-8 gap-1">
                {/*                                 <span><PlayArrowRoundedIcon sx={{ color: '#FFFFFF' }} /></span>
                 */}{" "}
                <span className="text-sm font-light">And Many More...</span>
              </div>
            </div>
            <p className="p-1 rounded-full pl-3 text-sm w-[250px] bg-[#9747FF]  font-bold">
              EXPLORE CAREERS IN
            </p>
            <div className="mt-6 flex flex-col gap-y-1">
              <div className="flex flex-row items-start gap-1">
                <span>
                  <PlayArrowRoundedIcon sx={{ color: "#FFFFFF" }} />
                </span>
                <span className="text-sm font-light">Product Management</span>
              </div>
              <div className="flex flex-row items-start gap-1">
                <span>
                  <PlayArrowRoundedIcon sx={{ color: "#FFFFFF" }} />
                </span>
                <span className="text-sm font-light">Consuliting</span>
              </div>
              <div className="flex flex-row items-start gap-1">
                <span>
                  <PlayArrowRoundedIcon sx={{ color: "#FFFFFF" }} />
                </span>
                <span className="text-sm font-light">Design</span>
              </div>
              <div className="flex flex-row items-start gap-1">
                <span>
                  <PlayArrowRoundedIcon sx={{ color: "#FFFFFF" }} />
                </span>
                <span className="text-sm font-light">Engineering</span>
              </div>
              <div className="flex flex-row items-start gap-1">
                <span>
                  <PlayArrowRoundedIcon sx={{ color: "#FFFFFF" }} />
                </span>
                <span className="text-sm font-light">Research</span>
              </div>
              <div className="flex flex-row items-start lg:ml-8 gap-1">
                {/*                                 <span><PlayArrowRoundedIcon sx={{ color: '#FFFFFF' }} /></span>
                 */}{" "}
                <span className="text-sm font-light">And Many More...</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <VerticalTimeline layout={"1-column-left"} lineColor={"#424242"}>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={{ color: "#397EFB", backgroundColor: "#94A4FF" }}
              contentStyle={{
                backgroundColor: "transparent",
                minWidth: "500px",
                maxWidth: "600px",
                width: "100%",
                border: "none",
              }}
              contentArrowStyle={{ backgroundColor: "transparent" }}
            >
              <div className="w-full">
                <div className="space-y-4 text-white w-full">
                  <span className="font-bold text-white mb-4 text-xl">
                    Week 1
                  </span>

                  <div className="w-full border rounded-2xl">
                    <p className="px-4 py-6 focus:outline-none focus-visible:ring-cyan-600">
                      Introduction - Why this lab? Thinking Big
                    </p>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4">
                      Explore the Introduction - Why This Lab? Apply academics,
                      aspire, and think big to unleash your potential
                    </p>
                  </div>
                  {/* <div className="w-full border rounded-lg">
                                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-cyan-600"><span className='bg-custom-blue p-1 font-bold mr-2 rounded-md bg-opacity-60'>In Class</span>
                                            Core and Skill Concentrations</summary>
                                        <p className="px-4 py-6 pt-0 ml-4 -mt-4">Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna porttitor egestas tincidunt neque vehicula potenti. </p>
                                    </div> */}
                </div>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={{ color: "#397EFB", backgroundColor: "#94A4FF" }}
              contentStyle={{
                background: "#141414",
                minWidth: "500px",
                maxWidth: "600px",
                width: "100%",
              }}
              contentArrowStyle={{ background: "#141414" }}
            >
              <div className="w-full">
                <div className="space-y-4 text-white w-full">
                  <span className="font-bold text-white mb-4 text-xl">
                    Week 2
                  </span>

                  <div className="w-full border rounded-lg">
                    <p className="px-4 py-6 focus:outline-none focus-visible:ring-cyan-600">
                      Approach to Idea Finding
                    </p>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4">
                      Explore the Art of Idea Finding: Embrace structured
                      thinking and unleash creativity by taking calculated risks
                      in learning.
                    </p>
                  </div>
                  {/* <div className="w-full border rounded-lg">
                                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-cyan-600"><span className='bg-custom-blue p-1 font-bold mr-2 rounded-md bg-opacity-60'>In Class</span>
                                            Core and Skill Concentrations</summary>
                                        <p className="px-4 py-6 pt-0 ml-4 -mt-4">Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna porttitor egestas tincidunt neque vehicula potenti. </p>
                                    </div> */}
                </div>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={{ color: "#397EFB", backgroundColor: "#94A4FF" }}
              contentStyle={{
                background: "#141414",
                minWidth: "500px",
                maxWidth: "600px",
                width: "100%",
              }}
              contentArrowStyle={{ background: "#141414" }}
            >
              <div className="w-full">
                <div className="space-y-4 text-white w-full">
                  <span className="font-bold text-white mb-4 text-xl">
                    Week 3
                  </span>

                  <div className="w-full border rounded-lg">
                    <p className="px-4 py-6 focus:outline-none focus-visible:ring-cyan-600">
                      Finalizing the Problem and building solutions
                    </p>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4">
                      Master the art of critical thinking and humility in
                      problem-solving. Eliminate obstacles with effective
                      solutions in our comprehensive course.
                    </p>
                  </div>
                  {/*  <div className="w-full border rounded-lg">
                                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-cyan-600"><span className='bg-custom-blue p-1 font-bold mr-2 rounded-md bg-opacity-60'>In Class</span>
                                            VIP Challenge</summary>
                                        <p className="px-4 py-6 pt-0 ml-4 -mt-4">Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna porttitor egestas tincidunt neque vehicula potenti. </p>
                                    </div> */}
                </div>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={{ color: "#397EFB", backgroundColor: "#94A4FF" }}
              contentStyle={{
                background: "#141414",
                minWidth: "500px",
                maxWidth: "600px",
                width: "100%",
              }}
              contentArrowStyle={{ background: "#141414" }}
            >
              <div className="w-full">
                <div className="space-y-4 text-white w-full">
                  <span className="font-bold text-white mb-4 text-xl">
                    Week 4
                  </span>

                  <div className="w-full border rounded-lg">
                    <p className="px-4 py-6 focus:outline-none focus-visible:ring-cyan-600">
                      Product development and technology 101
                    </p>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4">
                      {" "}
                      Master the essentials of Product Development and
                      Technology 101. Develop an engineering mindset and hone
                      critical thinking skills for innovation.
                    </p>
                  </div>
                  {/*  <div className="w-full border rounded-lg">
                                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-cyan-600"><span className='bg-custom-blue p-1 font-bold mr-2 rounded-md bg-opacity-60'>In Class</span>
                                            VIP Challenge</summary>
                                        <p className="px-4 py-6 pt-0 ml-4 -mt-4">Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna porttitor egestas tincidunt neque vehicula potenti. </p>
                                    </div> */}
                </div>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={{ color: "#397EFB", backgroundColor: "#94A4FF" }}
              contentStyle={{
                background: "#141414",
                minWidth: "500px",
                maxWidth: "600px",
                width: "100%",
              }}
              contentArrowStyle={{ background: "#141414" }}
            >
              <div className="w-full">
                <div className="space-y-4 text-white w-full">
                  <span className="font-bold text-white mb-4 text-xl">
                    Week 5
                  </span>

                  <div className="w-full border rounded-lg">
                    <p className="px-4 py-6 focus:outline-none focus-visible:ring-cyan-600">
                      Team building,Impact measurement & strategy
                    </p>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4">
                      Master the art of team building, impact measurement, and
                      strategy for vision to implementation. Unleash fast
                      mathematics, principles, and gain a strategic perspective.
                    </p>
                  </div>
                  {/*  <div className="w-full border rounded-lg">
                                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-cyan-600"><span className='bg-custom-blue p-1 font-bold mr-2 rounded-md bg-opacity-60'>In Class</span>
                                            VIP Challenge</summary>
                                        <p className="px-4 py-6 pt-0 ml-4 -mt-4">Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna porttitor egestas tincidunt neque vehicula potenti. </p>
                                    </div> */}
                </div>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={{ color: "#397EFB", backgroundColor: "#94A4FF" }}
              contentStyle={{
                background: "#141414",
                minWidth: "500px",
                maxWidth: "600px",
                width: "100%",
              }}
              contentArrowStyle={{ background: "#141414" }}
            >
              <div className="w-full">
                <div className="space-y-4 text-white w-full">
                  <span className="font-bold text-white mb-4 text-xl">
                    Week 6
                  </span>

                  <div className="w-full border rounded-lg">
                    <p className="px-4 py-6 focus:outline-none focus-visible:ring-cyan-600">
                      Getting your first users/customers
                    </p>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4">
                      Master the art of getting your first users/customers
                      through effective communication, networking, and
                      continuous learning and unlearning.
                    </p>
                  </div>
                  {/*   <div className="w-full border rounded-lg">
                                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-cyan-600"><span className='bg-custom-blue p-1 font-bold mr-2 rounded-md bg-opacity-60'>In Class</span>
                                            VIP Challenge</summary>
                                        <p className="px-4 py-6 pt-0 ml-4 -mt-4">Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna porttitor egestas tincidunt neque vehicula potenti. </p>
                                    </div> */}
                </div>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={{ color: "#397EFB", backgroundColor: "#94A4FF" }}
              contentStyle={{
                background: "#141414",
                minWidth: "500px",
                maxWidth: "600px",
                width: "100%",
              }}
              contentArrowStyle={{ background: "#141414" }}
            >
              <div className="w-full">
                <div className="space-y-4 text-white w-full">
                  <span className="font-bold text-white mb-4 text-xl">
                    Week 7
                  </span>

                  <div className="w-full border rounded-lg">
                    <p className="px-4 py-6 focus:outline-none focus-visible:ring-cyan-600">
                      Learning from feedback and getting sales
                    </p>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4">
                      Master the art of negotiation and embrace retry
                      persistence for continuous learning and sales success.
                    </p>
                  </div>
                  {/* <div className="w-full border rounded-lg">
                                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-cyan-600"><span className='bg-custom-blue p-1 font-bold mr-2 rounded-md bg-opacity-60'>In Class</span>
                                            VIP Challenge</summary>
                                        <p className="px-4 py-6 pt-0 ml-4 -mt-4">Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna porttitor egestas tincidunt neque vehicula potenti. </p>
                                    </div> */}
                </div>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={{ color: "#397EFB", backgroundColor: "#94A4FF" }}
              contentStyle={{
                background: "#141414",
                minWidth: "500px",
                maxWidth: "600px",
                width: "100%",
              }}
              contentArrowStyle={{ background: "#141414" }}
            >
              <div className="w-full">
                <div className="space-y-4 text-white w-full">
                  <span className="font-bold text-white mb-4 text-xl">
                    Week 8
                  </span>

                  <div className="w-full border rounded-lg">
                    <p className="px-4 py-6 focus:outline-none focus-visible:ring-cyan-600">
                      Financial modeling
                    </p>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4">
                      Master financial modeling with Excel and sharpen your
                      observation skills for accurate data analysis.
                    </p>
                  </div>
                  {/* <div className="w-full border rounded-lg">
                                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-cyan-600"><span className='bg-custom-blue p-1 font-bold mr-2 rounded-md bg-opacity-60'>In Class</span>

                                            One Day Profit Challenge</summary>
                                        <p className="px-4 py-6 pt-0 ml-4 -mt-4">Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna porttitor egestas tincidunt neque vehicula potenti. </p>
                                    </div> */}
                </div>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={{ color: "#397EFB", backgroundColor: "#94A4FF" }}
              contentStyle={{
                background: "#141414",
                minWidth: "500px",
                maxWidth: "600px",
                width: "100%",
              }}
              contentArrowStyle={{ background: "#141414" }}
            >
              <div className="w-full">
                <div className="space-y-4 text-white w-full">
                  <span className="font-bold text-white mb-4 text-xl">
                    Week 9
                  </span>

                  <div className="w-full border rounded-lg">
                    <p className="px-4 py-6 focus:outline-none focus-visible:ring-cyan-600">
                      Operations
                    </p>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4">
                      Master the art of multi-tasking and relationship building
                      with Operations. Enhance your organizational skills and
                      optimize processes for educational success.
                    </p>
                  </div>
                  {/* <div className="w-full border rounded-lg">
                                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-cyan-600"><span className='bg-custom-blue p-1 font-bold mr-2 rounded-md bg-opacity-60'>In Class</span>

                                            One Day Profit Challenge</summary>
                                        <p className="px-4 py-6 pt-0 ml-4 -mt-4">Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna porttitor egestas tincidunt neque vehicula potenti. </p>
                                    </div> */}
                </div>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={{ color: "#397EFB", backgroundColor: "#94A4FF" }}
              contentStyle={{
                background: "#141414",
                minWidth: "500px",
                maxWidth: "600px",
                width: "100%",
              }}
              contentArrowStyle={{ background: "#141414" }}
            >
              <div className="w-full">
                <div className="space-y-4 text-white w-full">
                  <span className="font-bold text-white mb-4 text-xl">
                    Week 10
                  </span>

                  <div className="w-full border rounded-lg">
                    <p className="px-4 py-6 focus:outline-none focus-visible:ring-cyan-600">
                      Pitching Business Models
                    </p>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4">
                      Master the art of pitching business models with expert
                      techniques in creating compelling presentations and
                      effective time management strategies.
                    </p>
                  </div>
                  {/* <div className="w-full border rounded-lg">
                                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-cyan-600"><span className='bg-custom-blue p-1 font-bold mr-2 rounded-md bg-opacity-60'>In Class</span>

                                            One Day Profit Challenge</summary>
                                        <p className="px-4 py-6 pt-0 ml-4 -mt-4">Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna porttitor egestas tincidunt neque vehicula potenti. </p>
                                    </div> */}
                </div>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={{ color: "#397EFB", backgroundColor: "#94A4FF" }}
              contentStyle={{
                background: "#141414",
                minWidth: "500px",
                maxWidth: "600px",
                width: "100%",
              }}
              contentArrowStyle={{ background: "#141414" }}
            >
              <div className="w-full">
                <div className="space-y-4 text-white w-full">
                  <span className="font-bold text-white mb-4 text-xl">
                    Week 11
                  </span>

                  <div className="w-full border rounded-lg">
                    <p className="px-4 py-6 focus:outline-none focus-visible:ring-cyan-600">
                      Revisiting the deck - Adding Proof of work
                    </p>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4">
                      Revisit your deck with confidence, adding proof of work
                      through documentation and leadership expertise
                    </p>
                  </div>
                  {/* <div className="w-full border rounded-lg">
                                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-cyan-600"><span className='bg-custom-blue p-1 font-bold mr-2 rounded-md bg-opacity-60'>In Class</span>

                                            One Day Profit Challenge</summary>
                                        <p className="px-4 py-6 pt-0 ml-4 -mt-4">Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna porttitor egestas tincidunt neque vehicula potenti. </p>
                                    </div> */}
                </div>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={{ color: "#397EFB", backgroundColor: "#94A4FF" }}
              contentStyle={{
                background: "#141414",
                minWidth: "500px",
                maxWidth: "600px",
                width: "100%",
              }}
              contentArrowStyle={{ background: "#141414" }}
            >
              <div className="w-full">
                <div className="space-y-4 text-white w-full">
                  <span className="font-bold text-white mb-4 text-xl">
                    Week 12
                  </span>

                  <div className="w-full border rounded-lg">
                    <p className="px-4 py-6 focus:outline-none focus-visible:ring-cyan-600">
                      Demo Day
                    </p>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4">
                      Experience the thrill of Demo Day, where students showcase
                      their projects with confidence, presentation skills, and
                      embrace the journey of learning from failure
                    </p>
                  </div>
                  {/* <div className="w-full border rounded-lg">
                                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-cyan-600"><span className='bg-custom-blue p-1 font-bold mr-2 rounded-md bg-opacity-60'>In Class</span>

                                            One Day Profit Challenge</summary>
                                        <p className="px-4 py-6 pt-0 ml-4 -mt-4">Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna porttitor egestas tincidunt neque vehicula potenti. </p>
                                    </div> */}
                </div>
              </div>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>

        <div className="block lg:hidden w-full">
          <div className="w-full">
            <div className="mb-10 w-full">
              <div className="w-full">
                <div className="space-y-4 text-white w-full">
                  <span className="font-bold text-white mb-4 text-xl">
                    Week 1
                  </span>

                  <div className="w-full border rounded-2xl">
                    <p className="px-4 py-6 focus:outline-none focus-visible:ring-cyan-600">
                    Introduction - Why this lab? Thinking Big
                    </p>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4">
                     Explore the Introduction - Why This Lab? Apply academics,
                      aspire, and think big to unleash your potential
                    </p>
                  </div>
                  {/* <div className="w-full border rounded-lg">
                                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-cyan-600"><span className='bg-custom-blue p-1 font-bold mr-2 rounded-md bg-opacity-60'>In Class</span>
                                            Core and Skill Concentrations</summary>
                                        <p className="px-4 py-6 pt-0 ml-4 -mt-4">Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna porttitor egestas tincidunt neque vehicula potenti. </p>
                                    </div> */}
                </div>
              </div>
            </div>

            <div className="mb-10 w-full">
              <div className="w-full">
                <div className="space-y-4 text-white w-full">
                  <span className="font-bold text-white mb-4 text-xl">
                    Week 2
                  </span>

                  <div className="w-full border rounded-lg">
                    <p className="px-4 py-6 focus:outline-none focus-visible:ring-cyan-600">
                    Approach to Idea Finding
                    </p>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4">
                      Explore the Art of Idea Finding: Embrace structured
                      thinking and unleash creativity by taking calculated risks
                      in learning.{" "}
                    </p>
                  </div>
                  {/* <div className="w-full border rounded-lg">
                                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-cyan-600"><span className='bg-custom-blue p-1 font-bold mr-2 rounded-md bg-opacity-60'>In Class</span>
                                            Core and Skill Concentrations</summary>
                                        <p className="px-4 py-6 pt-0 ml-4 -mt-4">Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna porttitor egestas tincidunt neque vehicula potenti. </p>
                                    </div> */}
                </div>
              </div>
            </div>

            <div className="mb-10 w-full">
              <div className="w-full">
                <div className="space-y-4 text-white w-full">
                  <span className="font-bold text-white mb-4 text-xl">
                    Week 3
                  </span>

                  <div className="w-full border rounded-lg">
                    <p className="px-4 py-6 focus:outline-none focus-visible:ring-cyan-600">
                    Finalizing the Problem and building solutions
                    </p>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4">
                      Master the art of critical thinking and humility in
                      problem-solving. Eliminate obstacles with effective
                      solutions in our comprehensive course.
                    </p>
                  </div>
                  {/*  <div className="w-full border rounded-lg">
                                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-cyan-600"><span className='bg-custom-blue p-1 font-bold mr-2 rounded-md bg-opacity-60'>In Class</span>
                                            VIP Challenge</summary>
                                        <p className="px-4 py-6 pt-0 ml-4 -mt-4">Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna porttitor egestas tincidunt neque vehicula potenti. </p>
                                    </div> */}
                </div>
              </div>
            </div>

            <div className="mb-10 w-full">
              <div className="w-full">
                <div className="space-y-4 text-white w-full">
                  <span className="font-bold text-white mb-4 text-xl">
                    Week 4
                  </span>

                  <div className="w-full border rounded-lg">
                    <p className="px-4 py-6 focus:outline-none focus-visible:ring-cyan-600">
                    Product development and technology 101
                    </p>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4">
                      Master the essentials of Product Development and
                      Technology 101. Develop an engineering mindset and hone
                      critical thinking skills for innovation.{" "}
                    </p>
                  </div>
                  {/*  <div className="w-full border rounded-lg">
                                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-cyan-600"><span className='bg-custom-blue p-1 font-bold mr-2 rounded-md bg-opacity-60'>In Class</span>
                                            VIP Challenge</summary>
                                        <p className="px-4 py-6 pt-0 ml-4 -mt-4">Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna porttitor egestas tincidunt neque vehicula potenti. </p>
                                    </div> */}
                </div>
              </div>
            </div>

            <div className="mb-10 w-full">
              <div className="w-full">
                <div className="space-y-4 text-white w-full">
                  <span className="font-bold text-white mb-4 text-xl">
                    Week 5
                  </span>

                  <div className="w-full border rounded-lg">
                    <p className="px-4 py-6 focus:outline-none focus-visible:ring-cyan-600">
                      Team building,Impact measurement & strategy
                    </p>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4">
                      Master the art of team building, impact measurement, and
                      strategy for vision to implementation. Unleash fast
                      mathematics, principles, and gain a strategic perspective.{" "}
                    </p>
                  </div>
                  {/*  <div className="w-full border rounded-lg">
                                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-cyan-600"><span className='bg-custom-blue p-1 font-bold mr-2 rounded-md bg-opacity-60'>In Class</span>
                                            VIP Challenge</summary>
                                        <p className="px-4 py-6 pt-0 ml-4 -mt-4">Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna porttitor egestas tincidunt neque vehicula potenti. </p>
                                    </div> */}
                </div>
              </div>
            </div>

            <div className="mb-10 w-full">
              <div className="w-full">
                <div className="space-y-4 text-white w-full">
                  <span className="font-bold text-white mb-4 text-xl">
                    Week 6
                  </span>

                  <div className="w-full border rounded-lg">
                    <p className="px-4 py-6 focus:outline-none focus-visible:ring-cyan-600">
                    Getting your first users/customers
                    </p>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4">
                      Master the art of getting your first users/customers
                      through effective communication, networking, and
                      continuous learning and unlearning.
                    </p>
                  </div>
                  {/*   <div className="w-full border rounded-lg">
                                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-cyan-600"><span className='bg-custom-blue p-1 font-bold mr-2 rounded-md bg-opacity-60'>In Class</span>
                                            VIP Challenge</summary>
                                        <p className="px-4 py-6 pt-0 ml-4 -mt-4">Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna porttitor egestas tincidunt neque vehicula potenti. </p>
                                    </div> */}
                </div>
              </div>
            </div>

            <div className="mb-10 w-full">
              <div className="w-full">
                <div className="space-y-4 text-white w-full">
                  <span className="font-bold text-white mb-4 text-xl">
                    Week 7
                  </span>

                  <div className="w-full border rounded-lg">
                    <p className="px-4 py-6 focus:outline-none focus-visible:ring-cyan-600">
                    Learning from feedback and getting sales
                    </p>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4">
                    Master the art of negotiation and embrace retry
                      persistence for continuous learning and sales success.{" "}
                    </p>
                  </div>
                  {/* <div className="w-full border rounded-lg">
                                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-cyan-600"><span className='bg-custom-blue p-1 font-bold mr-2 rounded-md bg-opacity-60'>In Class</span>
                                            VIP Challenge</summary>
                                        <p className="px-4 py-6 pt-0 ml-4 -mt-4">Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna porttitor egestas tincidunt neque vehicula potenti. </p>
                                    </div> */}
                </div>
              </div>
            </div>

            <div className="mb-10 w-full">
              <div className="w-full">
                <div className="space-y-4 text-white w-full">
                  <span className="font-bold text-white mb-4 text-xl">
                    Week 8
                  </span>

                  <div className="w-full border rounded-lg">
                    <p className="px-4 py-6 focus:outline-none focus-visible:ring-cyan-600">
                    Financial modeling
                    </p>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4">
                    Master financial modeling with Excel and sharpen your
                      observation skills for accurate data analysis.
                    </p>
                  </div>
                  {/* <div className="w-full border rounded-lg">
                                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-cyan-600"><span className='bg-custom-blue p-1 font-bold mr-2 rounded-md bg-opacity-60'>In Class</span>

                                            One Day Profit Challenge</summary>
                                        <p className="px-4 py-6 pt-0 ml-4 -mt-4">Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna porttitor egestas tincidunt neque vehicula potenti. </p>
                                    </div> */}
                </div>
              </div>
            </div>
            <div className="mb-10 w-full">
              <div className="w-full">
                <div className="space-y-4 text-white w-full">
                  <span className="font-bold text-white mb-4 text-xl">
                    Week 9
                  </span>

                  <div className="w-full border rounded-lg">
                    <p className="px-4 py-6 focus:outline-none focus-visible:ring-cyan-600">
                    Operations
                    </p>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4">
                    Master the art of multi-tasking and relationship building
                      with Operations. Enhance your organizational skills and
                      optimize processes for educational success.
                    </p>
                  </div>
                  {/* <div className="w-full border rounded-lg">
                                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-cyan-600"><span className='bg-custom-blue p-1 font-bold mr-2 rounded-md bg-opacity-60'>In Class</span>

                                            One Day Profit Challenge</summary>
                                        <p className="px-4 py-6 pt-0 ml-4 -mt-4">Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna porttitor egestas tincidunt neque vehicula potenti. </p>
                                    </div> */}
                </div>
              </div>
            </div>
            <div className="mb-10 w-full">
              <div className="w-full">
                <div className="space-y-4 text-white w-full">
                  <span className="font-bold text-white mb-4 text-xl">
                    Week 10
                  </span>

                  <div className="w-full border rounded-lg">
                    <p className="px-4 py-6 focus:outline-none focus-visible:ring-cyan-600">
                    Pitching Business Models
                    </p>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4">
                    Master the art of pitching business models with expert
                      techniques in creating compelling presentations and
                      effective time management strategies.
                    </p>
                  </div>
                  {/* <div className="w-full border rounded-lg">
                                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-cyan-600"><span className='bg-custom-blue p-1 font-bold mr-2 rounded-md bg-opacity-60'>In Class</span>

                                            One Day Profit Challenge</summary>
                                        <p className="px-4 py-6 pt-0 ml-4 -mt-4">Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna porttitor egestas tincidunt neque vehicula potenti. </p>
                                    </div> */}
                </div>
              </div>
            </div>
            <div className="mb-10 w-full">
              <div className="w-full">
                <div className="space-y-4 text-white w-full">
                  <span className="font-bold text-white mb-4 text-xl">
                    Week 11
                  </span>

                  <div className="w-full border rounded-lg">
                    <p className="px-4 py-6 focus:outline-none focus-visible:ring-cyan-600">
                    Revisiting the deck - Adding Proof of work
                    </p>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4">
                    Revisit your deck with confidence, adding proof of work
                      through documentation and leadership expertise
                    </p>
                  </div>
                  {/* <div className="w-full border rounded-lg">
                                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-cyan-600"><span className='bg-custom-blue p-1 font-bold mr-2 rounded-md bg-opacity-60'>In Class</span>

                                            One Day Profit Challenge</summary>
                                        <p className="px-4 py-6 pt-0 ml-4 -mt-4">Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna porttitor egestas tincidunt neque vehicula potenti. </p>
                                    </div> */}
                </div>
              </div>
              <div className="w-full">
                <div className="space-y-4 text-white w-full">
                  <span className="font-bold text-white mb-4 text-xl">
                    Week 12
                  </span>

                  <div className="w-full border rounded-lg">
                    <p className="px-4 py-6 focus:outline-none focus-visible:ring-cyan-600">
                    Demo Day
                    </p>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4">
                      Experience the thrill of Demo Day, where students showcase
                      their projects with confidence, presentation skills, and
                      embrace the journey of learning from failure
                    </p>
                  </div>
                  {/* <div className="w-full border rounded-lg">
                                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-cyan-600"><span className='bg-custom-blue p-1 font-bold mr-2 rounded-md bg-opacity-60'>In Class</span>

                                            One Day Profit Challenge</summary>
                                        <p className="px-4 py-6 pt-0 ml-4 -mt-4">Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna porttitor egestas tincidunt neque vehicula potenti. </p>
                                    </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <HearFromStudents /> */}
    </div>
  );
};

export default DualManagement;
