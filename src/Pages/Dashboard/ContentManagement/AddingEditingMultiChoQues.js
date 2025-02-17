import React, { useContext, useState } from "react";
import Layout from "../Layout";
import arrowDown from "../../../assets/SkillsManagement/arrow.svg";
import arrowright from "../../../assets/SkillsManagement/arrowright.svg";
import required from "../../../assets/ContentManagement/required.png";
import back from '../../../assets/ContentManagement/back.svg'


import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";
import Level from "../Dashboard/Level";
import axios from "axios";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";




const AddingEditingMultiChoQues = () => {
    const [selectedTab, setSelectedTab] = useState('addingEditingMultiChoQues');

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };
    ///
    const [isOpenGeneralCourseInfo, setIsOpenGeneralCourseInfo] = useState(true);
    const [isOpenCourseFormat, setIsOpenCourseFormat] = useState(false);
    


    const toggleDropdownCourseSelection = () => {
        setIsOpenGeneralCourseInfo(!isOpenGeneralCourseInfo);
    };
    const toggleDropdownCourseFormat = () => {
        setIsOpenCourseFormat(!isOpenCourseFormat);
    };
   


    // add course category
    const [isOpenAddCourseCategory, setIsOpenAddCourseCategory] = useState(false);

    const openModalAddCourseCategory = () => {
        setIsOpenAddCourseCategory(true);
    };

    const closeModalAddCourseCategory = () => {
        setIsOpenAddCourseCategory(false);
    };

 


    const { user } = useContext(AuthContext);

    console.log(user)

    /// handle Submit
    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;

        const questionNumber = form.questionNumber?.value;
        const questionTitle = form.questionTitle?.value;
        const courseStartingDate = form.courseStartingDate?.value;
        //  const courseStartingTime = form.courseStartingTime?.value;
        const courseEndingDate = form.courseEndingDate?.value;
        //  const courseEndingTime = form.courseEndingTime?.value;
        const defaultMarks = form.defaultMarks?.value;
        const courseCategory = +form.courseCategory?.value;
        const questionStatus = +form.questionStatus?.value;
        const generalFeedback = form.generalFeedback?.value;
        const courseFormat = form.courseFormat?.value;
        const gradesFormat = form.gradesFormat?.value;
        const groups = form.groups?.value;
        const showactivitydates = +form.showactivitydates?.value;
        const numberOfWeeks = +form.numberofWeeks?.value;
        // const weekChapterName = form.weekChapterName?.value;
        const showactivityreports = +form.showactivityreports?.value;
        const enableCompletionTracking = +form.enableCompletionTracking?.value;
        // const certificateGeneration = form.certificateGeneration?.value;
        const showactivitycompletionconditions =
            +form.showactivitycompletionconditions?.value;
        //  const showGradebooktostudents = form.showGradebooktostudents.value;
        // const newCourseStartingDate = Math.floor(
        //   new Date(courseStartingDate).getTime() / 1000
        // );
        // const newCourseEndingDate = Math.floor(
        //   new Date(courseEndingDate).getTime() / 1000
        // );

        const addCourse = {
            questionNumber,
            questionTitle,
            courseStartingDate,
            //  courseStartingTime,
            courseEndingDate,
            // courseEndingTime,
            defaultMarks,
            courseCategory,
            courseThumbnail: '',
            questionStatus,
            generalFeedback,
            courseFormat,
            gradesFormat,
            groups,
            showactivitydates,
            numberOfWeeks,
            // weekChapterName: formData,
            showactivityreports,
            enableCompletionTracking,
            // certificateGeneration,
            showactivitycompletionconditions,
            //showGradebooktostudents,
            // newCourseEndingDate,
            // newCourseStartingDate,
            creator: {
                name: user?.displayName,
                email: user?.email,
                photoURL: user?.photoURL
            }
        };

        const course = await axios.post(`${process.env.REACT_APP_BACKEND_API}/courses`, addCourse);

        if (course?.data?.acknowledged) {
            toast.success("Course added Successfully");
            form.reset();
        }

        console.log("Add Course----->", addCourse);

    };

    return (
        <div>
            <Layout>

                <div className='text-[#3E4DAC] text-[26px] font-bold  py-[35px] ps-[40px]'>
                    <p></p>

                </div>
                <div className='px-10 flex  justify-between pb-3 text-lg'>
                    <Link to='/quizGeneralinfo'
                        onClick={() => handleTabClick('Quiz General Information')}
                        style={{
                            fontWeight: selectedTab === 'Quiz General Information' ? 'bold' : 'normal',
                            borderBottom: selectedTab === 'Quiz General Information' ? '2px solid black' : 'none'
                        }}
                    >
                        Quiz General Information
                    </Link>
                    <Link to='/manageQuestion'
                        onClick={() => handleTabClick('Questions')}
                        style={{
                            fontWeight: selectedTab === 'Questions' || 'addingEditingMultiChoQues' ? 'bold' : 'normal',
                            borderBottom: selectedTab === 'Questions' || 'addingEditingMultiChoQues' ? '2px solid black' : 'none'
                        }}
                    >
                        Questions
                    </Link>
                    <Link to='/manageQuestionBank'
                        onClick={() => handleTabClick('Question Bank')}
                        style={{
                            fontWeight: selectedTab === 'Question Bank' ? 'bold' : 'normal',
                            borderBottom: selectedTab === 'Question Bank' ? '2px solid black' : 'none'
                        }}
                    >
                        Question Bank
                    </Link>
                    <Link to='/quizResult'
                        onClick={() => handleTabClick('Results')}
                        style={{
                            fontWeight: selectedTab === 'Results' ? 'bold' : 'normal',
                            borderBottom: selectedTab === 'Results' ? '2px solid black' : 'none'
                        }}
                    >
                        Results
                    </Link>
                    <Link to='/quizEvaluationParameter'
                        onClick={() => handleTabClick('Evaluation Parameter')}
                        style={{
                            fontWeight: selectedTab === 'Evaluation Parameter' ? 'bold' : 'normal',
                            borderBottom: selectedTab === 'Evaluation Parameter' ? '2px solid black' : 'none'
                        }}
                    >
                        Evaluation Parameter
                    </Link>
                </div>

                <div className="mx-10 mt-10">
                    <div className="flex justify-between items-center mb-10">
                        <p className=" text-[26px] font-bold ">Adding/Editing Calculation Multiple Choice Question </p>
                        <Link to='/manageQuestion' className='bg-[#3E4DAC] flex  px-4 py-2 rounded-lg text-[#fff]'>
                            <img src={back} alt="back"/>
                            <p className="">Back</p>
                        </Link>

                    </div>

                    <form onSubmit={handleSubmit} className="">
                        <div
                            className="select-option flex items-center gap-[40px]"
                            onClick={toggleDropdownCourseSelection}
                        >
                            <h1 className=" h-[60px] w-[60px] bg-[#E1E6FF] rounded-full flex justify-center items-center text-[25px]">
                                1
                            </h1>
                            <p className="text-[25px] font-bold">General</p>
                            {!isOpenGeneralCourseInfo && (
                                <img className="w-6" src={arrowright} alt="arrowRight"/>
                            )}

                            {isOpenGeneralCourseInfo && <img src={arrowDown} alt="arrowDown"/>}

                            <i
                                className={`dropdown-arrow ${isOpenGeneralCourseInfo ? "open" : ""
                                    }`}
                            ></i>
                        </div>
                        {isOpenGeneralCourseInfo && (
                            <div className="dropdown-menu mt-[71px] mb-[45px] flex justify-between me-10">
                                <div>
                                    <div className="">
                                        <div className="flex items-center gap-4">
                                            <p className="h-2 w-2 bg-black rounded-full"></p>
                                            <p className="font-bold text-lg me-[36px]">
                                                {" "}
                                                Question Number
                                            </p>
                                            <img src={required} alt="required" />
                                        </div>

                                        <input
                                            required
                                            className="mt-6 ms-6 border rounded-md w-[100%] h-[50px] ps-2 text-[#535353] focus:outline-0 bg-[#F6F7FF] "
                                            name="questionNumber"
                                            type="text"
                                            placeholder="Eg. Entrepreneurship Lab"
                                        />
                                    </div>

                                    <div className="mt-20">
                                        <div className="flex items-center gap-4">
                                            <p className="h-2 w-2 bg-black rounded-full"></p>
                                            <p className="font-bold text-lg me-[36px]">
                                                {" "}
                                                Question Title
                                            </p>
                                            <img src={required} alt="required" />
                                        </div>

                                        <input
                                            required
                                            className="mt-6 ms-6 border rounded-md w-[100%] h-[50px] ps-2 text-[#535353] focus:outline-0 bg-[#F6F7FF] "
                                            name="questionTitle"
                                            type="text"
                                            placeholder="Eg. Entrepreneurship Lab"
                                        />
                                    </div>


                                    <div className="mt-20">
                                        <div className="flex items-center gap-4">
                                            <p className="h-2 w-2 bg-black rounded-full"></p>
                                            <p className="font-bold text-lg me-[36px]">
                                                Default Marks
                                            </p>
                                            <img src={required} alt="required" />
                                        </div>

                                        <input
                                            className="mt-6 ms-6 border rounded-md w-[100%] h-[50px] ps-2 text-[#535353] focus:outline-0 bg-[#F6F7FF] "
                                            name="defaultMarks"
                                            type="text"
                                            placeholder="Eg. 2"
                                        />
                                    </div>


                                    <div className="mt-20">
                                        <div className="flex items-center gap-4">
                                            <p className="h-2 w-2 bg-black rounded-full"></p>
                                            <p className="font-bold text-lg">
                                                One Or Multiple Answers ?
                                            </p>
                                            <div className="text-sm font-semibold flex items-center">
                                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                                <label className=" ms-2" for="vehicle1"> Shuffle the choices ?</label>
                                            </div>
                                        </div>

                                        <div className=" items-center flex gap-2  mt-2 ms-6  w-[319px] h-[50px] ps-2 text-[#535353] focus:outline-0 ">
                                            <div className="">
                                                <input
                                                    type="radio"
                                                    id="One"
                                                    name="oneOrMultipleAnswers"
                                                    value="1"
                                                />
                                                <lebel> One</lebel>
                                            </div>
                                            <div className=" ms-[55px]">
                                                <input
                                                    type="radio"
                                                    id="Multiple"
                                                    name="oneOrMultipleAnswers"
                                                    value="0"
                                                />
                                                <lebel> Multiple</lebel>
                                            </div>
                                        </div>
                                    </div>


                                </div>

                                <div>
                                    <div className="">
                                        <div className="flex items-center gap-4">
                                            <p className="h-2 w-2 bg-black rounded-full"></p>
                                            <p className="font-bold text-lg me-[36px]">
                                                Category
                                            </p>
                                            <img src={required} alt="required" />
                                        </div>

                                        <div className=" flex gap-2  mt-6 ms-6 border rounded-md w-[381px] h-[50px] ps-2 text-[#535353] focus:outline-0 bg-[#F6F7FF]  ">
                                            <select
                                                required
                                                className="w-full bg-[#F6F7FF] text-[#3E4DAC] text-base font-semibold focus:outline-0"
                                                name="category"
                                            // id="option"
                                            >
                                                <option className="" value="1">
                                                    Web Development
                                                </option>
                                                <option value="Parent"></option>
                                                <option value="Counselor"></option>
                                                <option value="Others"></option>
                                            </select>
                                            <div
                                                onClick={openModalAddCourseCategory}
                                                className="w-[96px] bg-[#FFDB70] text-[] text-base font-semibold flex gap-2 justify-center items-center"
                                            >
                                                <p className="text-2xl">+</p>
                                                <div>
                                                    <p className="w-full">Add</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            {isOpenAddCourseCategory && (
                                                <div className="modal-overla w-[438px] h-[325px] rounded-md mt-3 bg-[#fff] border">
                                                    <div className="modal-content">
                                                        <div className="border-b flex justify-between items-center pt-6 px-10 pb-5 text-[#3E4DAC] text-xl font-bold">
                                                            <p>Add Course Category</p>
                                                            <p
                                                                onClick={closeModalAddCourseCategory}
                                                                className=" flex justify-center items-center rounded-full w-6 h-6 bg-[#A1A1A1] font-bold text-[#000000]"
                                                            >
                                                                x
                                                            </p>
                                                        </div>
                                                        <div className="mt-6 mx-10">
                                                            <div className="flex items-center gap-4">
                                                                <p className="font-bold text-lg me-[36px]">
                                                                    {" "}
                                                                    Course Category Name
                                                                </p>
                                                            </div>

                                                            <input
                                                                className="mt-6 border rounded-md w-[358px] h-[50px] ps-2 text-[#535353] focus:outline-0 bg-[#F6F7FF] "
                                                                name="courseCategory"
                                                                type="text"
                                                                placeholder="Eg. Entrepreneurship Lab"
                                                            ></input>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>







                                    <div className="mt-20">


                                        <div className="mt-20">
                                            <div className="flex items-center gap-4">
                                                <p className="h-2 w-2 bg-black rounded-full"></p>
                                                <p className="font-bold text-lg me-[36px]">
                                                    General Feedback
                                                </p>
                                            </div>

                                            <input
                                                className="mt-6 ms-6 border rounded-md w-[100%] h-[50px] ps-2 text-[#535353] focus:outline-0 bg-[#F6F7FF] "
                                                name="generalFeedback"
                                                type="text"
                                                placeholder="Eg. 02283847"
                                            ></input>
                                        </div>

                                        <div className="mt-20">
                                            <div className="flex items-center gap-4">
                                                <p className="h-2 w-2 bg-black rounded-full"></p>
                                                <p className="font-bold text-lg me-[36px]">
                                                    Question Status
                                                </p>
                                            </div>

                                            <div className=" items-center flex gap-2  mt-2 ms-6  w-[319px] h-[50px] ps-2 text-[#535353] focus:outline-0 ">
                                                <div className="">
                                                    <input
                                                        type="radio"
                                                        id="Ready"
                                                        name="questionStatus"
                                                        value="1"
                                                    />
                                                    <lebel> Ready</lebel>
                                                </div>
                                                <div className=" ms-[55px]">
                                                    <input
                                                        type="radio"
                                                        id="Draft"
                                                        name="questionStatus"
                                                        value="0"
                                                    />
                                                    <lebel> Draft</lebel>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='mt-[90px]  '>
                                            <div className='flex items-center gap-4'>
                                                <p className='h-2 w-2 bg-black rounded-full'></p>
                                                <p className='font-semibold text-[#000000]  py-2'>Number the choices ?</p>
                                               

                                            </div>
                                            <div
                                                style={{
                                                    border: "1.085px solid #CECECE",
                                                    background: "#F6F7FF"
                                                }}
                                                className=" flex  border  rounded-lg h-[40px] w-[40%] px-2 text-[#535353] ms-5 mt-3">

                                                <select
                                                    required
                                                    className="w-full border-0 focus:outline-0 bg-[#F6F7FF] text-[#3E4DAC]"
                                                    name="gradeAllocation"
                                                    id="option"
                                                >

                                                    <option className="" value="Student">A.B.C.D....</option>
                                                    <option value="Parent"></option>
                                                    <option value="Counselor"></option>
                                                    <option value="Others"></option>
                                                </select>

                                            </div>

                                        </div>


                                    </div>
                                </div>
                            </div>
                        )}

                        <div className=" flex items-center justify-between">
                            <div
                                className="select-option flex items-center gap-[40px] "
                                onClick={toggleDropdownCourseFormat}
                            >
                                <h1 className=" h-[60px] w-[60px] bg-[#E1E6FF] rounded-full flex justify-center items-center text-[25px]">
                                    2
                                </h1>
                                <p className="text-[25px] font-bold">Answers Options</p>
                                {!isOpenCourseFormat && (
                                    <img className="w-6" src={arrowright} alt="arrowRight"/>
                                )}

                                {isOpenCourseFormat && <img src={arrowDown} alt="arrowDown"/>}

                                <i
                                    className={`dropdown-arrow ${isOpenCourseFormat ? "open" : ""}`}
                                ></i>
                            </div>



                            <div className="flex justify-between items-center mb-10 mt-10">

                                <Link to='/manageQuestion' className='bg-[#3E4DAC] flex text-base font-bold  px-4 py-2 rounded-lg text-[#fff]'>

                                    <p className="">Add More Answer Blank</p>
                                </Link>

                            </div>
                        </div>



                        {isOpenCourseFormat && (
                            <div>

                                <div className="dropdown-menu mt-[71px] mb-[45px] flex justify-between me-10 bg-[#F7F7F7] p-5 rounded-lg">
                                    <div className="">

                                        <div className="">
                                            <div className="flex items-center gap-4">
                                                <p className="h-2 w-2 bg-black rounded-full"></p>
                                                <p className="font-bold text-lg me-[36px]">
                                                    Choice 1
                                                </p>
                                                <img src={required} alt="required" />
                                            </div>

                                            <input
                                                className="mt-6 ms-6 border rounded-md  h-[50px] ps-2 text-[#535353] focus:outline-0 bg-[#F6F7FF] "
                                                name="answer1Formula"
                                                type="text"
                                                placeholder="Eg. 02283847"
                                            />
                                        </div>
                                        <div className='mt-20 '>
                                            <div className='flex items-center gap-4'>
                                                <p className='h-2 w-2 bg-black rounded-full'></p>
                                                <p className='font-semibold text-[#000000]  py-2'>Grade Allocation</p>
                                                <img src={required} alt="required" />

                                            </div>
                                            <div
                                                style={{
                                                    border: "1.085px solid #CECECE",
                                                    background: "#F6F7FF"
                                                }}
                                                className=" flex  border  rounded-lg h-[40px] w-[40%] px-2 text-[#535353] ms-5">

                                                <select
                                                    required
                                                    className="w-full border-0 focus:outline-0 bg-[#F6F7FF] text-[#3E4DAC]"
                                                    name="gradeAllocation"
                                                    id="option"
                                                >

                                                    <option className="" value="Student">100%</option>
                                                    <option value="None">None</option>
                                                    <option value="Counselor"></option>
                                                    <option value="Others"></option>
                                                </select>

                                            </div>
                                            <p className="mt-2"> <span className="text-[#3E4DAC]">None</span> or Multiples of <span className="text-[#3E4DAC]"> 5-100%</span></p>
                                        </div>



                                    </div>

                                    <div className=" me-10">
                                        <div className="">
                                            <div className="flex items-center gap-4">
                                                <p className="h-2 w-2 bg-black rounded-full"></p>
                                                <p className="font-bold text-lg me-[36px]">
                                                    Feedback
                                                </p>

                                            </div>

                                            <input
                                                className="mt-6 ms-6 border rounded-md w-[100%] h-[50px] ps-2 text-[#535353] focus:outline-0 bg-[#F6F7FF] "
                                                name="feedback"
                                                type="text"
                                                placeholder="Eg. 02283847"
                                            ></input>
                                        </div>
                                    </div>
                                </div>


                                <div className="dropdown-menu mt-[71px] mb-[45px] flex justify-between me-10 bg-[#F7F7F7] p-5 rounded-lg">
                                    <div className="">

                                        <div className="">
                                            <div className="flex items-center gap-4">
                                                <p className="h-2 w-2 bg-black rounded-full"></p>
                                                <p className="font-bold text-lg me-[36px]">
                                                    Choice 2
                                                </p>
                                                <img src={required} alt="required" />
                                            </div>

                                            <input
                                                className="mt-6 ms-6 border rounded-md  h-[50px] ps-2 text-[#535353] focus:outline-0 bg-[#F6F7FF] "
                                                name="answer1Formula"
                                                type="text"
                                                placeholder="Eg. 02283847"
                                            />
                                        </div>
                                        <div className='mt-20 '>
                                            <div className='flex items-center gap-4'>
                                                <p className='h-2 w-2 bg-black rounded-full'></p>
                                                <p className='font-semibold text-[#000000]  py-2'>Grade Allocation</p>
                                                <img src={required} alt="required" />

                                            </div>
                                            <div
                                                style={{
                                                    border: "1.085px solid #CECECE",
                                                    background: "#F6F7FF"
                                                }}
                                                className=" flex  border  rounded-lg h-[40px] w-[40%] px-2 text-[#535353] ms-5">

                                                <select
                                                    required
                                                    className="w-full border-0 focus:outline-0 bg-[#F6F7FF] text-[#3E4DAC]"
                                                    name="gradeAllocation"
                                                    id="option"
                                                >

                                                    <option className="" value="Student">100%</option>
                                                    <option value="None">None</option>
                                                    <option value="Counselor"></option>
                                                    <option value="Others"></option>
                                                </select>

                                            </div>
                                            <p className="mt-2"> <span className="text-[#3E4DAC]">None</span> or Multiples of <span className="text-[#3E4DAC]"> 5-100%</span></p>
                                        </div>



                                    </div>

                                    <div className=" me-10">
                                        <div className="">
                                            <div className="flex items-center gap-4">
                                                <p className="h-2 w-2 bg-black rounded-full"></p>
                                                <p className="font-bold text-lg me-[36px]">
                                                    Feedback
                                                </p>

                                            </div>

                                            <input
                                                className="mt-6 ms-6 border rounded-md w-[100%] h-[50px] ps-2 text-[#535353] focus:outline-0 bg-[#F6F7FF] "
                                                name="feedback"
                                                type="text"
                                                placeholder="Eg. 02283847"
                                            ></input>
                                        </div>
                                    </div>
                                </div>


                            </div>


                        )}



                        <div className="flex items-center justify-center mt-20 mb-10">
                            <input
                                type="submit"
                                value="save"
                                className="px-[30px] py-3 bg-[#3E4DAC] text-[#fff] text-xl font-bold rounded-lg"
                            />
                            <input
                                type="submit"
                                value="Save & Display"
                                className="px-[30px] py-3 bg-[#FF557A] text-[#fff] text-xl font-bold rounded-lg ms-20"
                            />
                        </div>
                    </form>

                </div>
            </Layout>
        </div >



        /*  */
    );
};

export default AddingEditingMultiChoQues;
