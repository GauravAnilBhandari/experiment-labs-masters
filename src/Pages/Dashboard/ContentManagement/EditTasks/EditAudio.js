import Layout from "../../Layout";
import required from "../../../../assets/ContentManagement/required.png";
import Audioimg from "../../../../assets/ContentManagement/audio.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../contexts/AuthProvider";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import SkillBasedParameter from "../Components/Shared/SkillBasedParameter";
import ItemEarningParameter from "../Components/Shared/ItemEarningParameter";
import uploadFileToS3 from "../../../UploadComponent/s3Uploader";
import { toast } from "react-hot-toast";
import AudioTask from "../../Week/AudioTask";

const EditAudio = () => {
  // upload file
  const [dragActive, setDragActive] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    //setDragActive(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const file = e.dataTransfer.files[0];
    setSelectedFile(file);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  // ----   code by shihab   ----
  const { user, userInfo } = useContext(AuthContext);
  const { id } = useParams();
  const [chapter, setChapter] = useState({});
  const [skillCategories, setSkillCategories] = useState([]);
  const [earningCategories, setEarningCategories] = useState([]);
  const [skillParameterData, setSkillParameterData] = useState([]);
  const [earningParameterData, setEarningParameterData] = useState([]);
  const [course, setCourse] = useState({});
  const [preview, setPreview] = useState(false);
  const [submitPermission, setSubmitPermission] = useState(false);
  const [audioData, setAudioData] = useState({});
  const [openTask, setOpenTask] = useState(
    JSON.parse(localStorage.getItem("task"))
  );
  const [currentWeek, setCurrentWeek] = useState(
    JSON.parse(localStorage.getItem("currentWeek"))
  );
  useEffect(() => {
    const fetchData = {
      organizationId: currentWeek?.organization?.organizationId,
      courseId: currentWeek?.courseId,
    };
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_API}/skillCategoriesByCourseId`,
        fetchData
      )
      .then((res) => setSkillCategories(res?.data))
      .catch((error) => console.error(error));
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_API}/itemCategoryByCourseId`,
        fetchData
      )
      .then((res) => setEarningCategories(res?.data))
      .catch((error) => console.error(error));
  }, [currentWeek]);
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_API}/tasks/audios?id=${openTask?.taskId}`
      )
      .then((response) => {
        setAudioData(response?.data);
        setSelectedFile(response?.data?.additionalFiles);
        setSkillParameterData(response?.data?.skillParameterData);
        setEarningParameterData(response?.data?.earningParameterData);
      });
  }, [openTask]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let fileUrl = "";
    if (selectedFile) fileUrl = await uploadFileToS3(selectedFile);
    const form = event.target;
    console.log(form.audioTopicName);
    const audioTopicName = form.audioTopicName?.value;

    const ManageAudio = {
      audioTopicName,
      taskName: audioTopicName,
      additionalFiles: fileUrl,
      skillParameterData: skillParameterData,
      earningParameterData: earningParameterData,
      chapterId: id,
    };

    setAudioData(ManageAudio);

    if (submitPermission) {
      const newTask = await axios.put(
        `${process.env.REACT_APP_BACKEND_API}/tasks/audios/${audioData?._id}`,
        ManageAudio
      );
      console.log(newTask);

      if (newTask?.data?.acknowledged) {
        toast.success("Audio Edited Successfully");
        event.target.reset();
      }

      console.log(ManageAudio);
    }
  };

  return (
    <div>
      <Layout>
        <div>
          <div className=" border-b-2 ">
            <div className="container mx-auto px-4 flex items-center justify-between ">
              <div className="flex items-center pt-[30px] pb-[30px] ">
                <Link
                  to="/courseAccess"
                  className="text-[#168DE3] font-sans mr-[30px] text-[20px] font-[400] underline "
                >
                  My Courses
                </Link>
                <svg
                  className="mr-[30px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M9 18.667L15 12.667L9 6.66699"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <Link
                  to={`/questLevels/${currentWeek?.courseId}`}
                  className="text-[#168DE3] font-sans mr-[30px] text-[20px] font-[400] underline "
                >
                  {localStorage.getItem("course")}
                </Link>
                <svg
                  className="mr-[30px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M9 18.667L15 12.667L9 6.66699"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <button className=" font-sans mr-[30px] text-[20px] font-[400] ">
                  {localStorage.getItem("chapter")}
                </button>
              </div>
              <div className="flex items-center mt-[-10px] ">
                <div className="flex items-center text-black text-[16px] font-[600] mr-[32px] ">
                  <h1 className="mr-[16px]">Preview Mode</h1>
                  {preview ? (
                    <svg
                      className="cursor-pointer"
                      onClick={() => setPreview(!preview)}
                      xmlns="http://www.w3.org/2000/svg"
                      width="58"
                      height="27"
                      viewBox="0 0 58 27"
                      fill="none"
                    >
                      <rect
                        width="57.8422"
                        height="26.7841"
                        rx="13.392"
                        fill="#9747FF"
                      />
                      <circle
                        cx="44.4512"
                        cy="13.3916"
                        r="10.1153"
                        fill="white"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="cursor-pointer"
                      onClick={() => setPreview(!preview)}
                      xmlns="http://www.w3.org/2000/svg"
                      width="58"
                      height="28"
                      viewBox="0 0 58 28"
                      fill="none"
                    >
                      <rect
                        y="0.608398"
                        width="57.8422"
                        height="26.7841"
                        rx="13.392"
                        fill="#A3A3A3"
                      />
                      <circle cx="13.3926" cy="14" r="10.1153" fill="white" />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${preview ? "block" : "hidden"}`}>
          <AudioTask audioData={audioData} />
        </div>
        <div className={`${preview ? "hidden" : "block"}`}>
          <div className="text-[#3E4DAC] text-[26px] font-bold  py-[35px] ps-[40px]">
            <p>Manage Audio in {localStorage.getItem("chapter")}</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex  me-20 py-[35px] ps-[40px]">
              <div className="w-full">
                <div className="">
                  <div className="flex items-center gap-4">
                    <p className="h-2 w-2 bg-black rounded-full"></p>
                    <p className="font-bold text-lg me-[36px]">
                      Audio Topic Name
                    </p>
                    <img src={required} alt="required" />
                  </div>

                  <input
                    required
                    defaultValue={audioData ? audioData?.audioTopicName : ""}
                    className="mt-6 ms-6 border rounded-md w-3/4 h-[50px] ps-2 text-[#535353] focus:outline-0 bg-[#F6F7FF] "
                    name="audioTopicName"
                    type="text"
                    placeholder="Eg. Entrepreneurship Lab"
                  />
                </div>
              </div>
              <div className="w-full">
                <div className=" flex flex-col">
                  <div className="flex items-center gap-4">
                    <p className="h-2 w-2 bg-black rounded-full"></p>
                    <p className="font-bold text-lg me-[36px]">Upload Audio</p>
                  </div>
                  <div
                    className="w-3/4 h-[253px] bg-[#F6F7FF] flex flex-col items-center justify-center rounded-b-lg mt-6 ms-6"
                    onDragEnter={handleDragEnter}
                    onDragLeave={handleDragLeave}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    style={{
                      border: "0.917px dashed #000",
                      background: "#F6F7FF",
                    }}
                  >
                    {dragActive ? (
                      <>
                        <div className="bg-[#3734DE] rounded-full mb-5">
                          <img src={Audioimg} alt="audioImg" />
                        </div>

                        <p className="text-[17px] font-semibold mb-5">
                          Drag and drop{" "}
                        </p>
                        <p className="text-sm font-medium mb-5">Or</p>
                      </>
                    ) : (
                      selectedFile && <p>Selected file: {selectedFile.name}</p>
                    )}
                    {!selectedFile && (
                      <>
                        <div className="flex gap-2 justify-center w-full">
                          <label
                            className="flex items-center px-5 py-2 rounded-lg bg-[#FFDB70] text-xs font-bold"
                            htmlFor="input-file-upload"
                          >
                            Browser
                          </label>
                          <input
                            className="w-[1%]"
                            defaultValue={
                              audioData ? audioData?.additionalFiles : ""
                            }
                            style={{ fontSize: "0", opacity: "0" }}
                            type="file"
                            accept="/*"
                            name="input-file-upload"
                            id="input-file-upload"
                            onChange={handleFileChange}
                            multiple
                          />
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 my-10">
              <p className="text-[25px] font-bold mb-10">
                Evaluation Parameter
              </p>
              <SkillBasedParameter
                selectedData={skillParameterData}
                setSelectedData={setSkillParameterData}
                categories={skillCategories}
              />
              <ItemEarningParameter
                selectedData={earningParameterData}
                setSelectedData={setEarningParameterData}
                categories={earningCategories}
              />
            </div>
            <div className="flex items-center justify-center mt-20 mb-10">
              <input
                type="submit"
                value="Save"
                className="px-[30px] py-3 bg-[#3E4DAC] text-[#fff] text-xl font-bold rounded-lg"
              />
              <input
                type="submit"
                onClick={() => setSubmitPermission(true)}
                value="Save & Display"
                className="px-[30px] py-3 bg-[#FF557A] text-[#fff] text-xl font-bold rounded-lg ms-20"
              />
            </div>
          </form>
        </div>
      </Layout>
    </div>
  );
};

export default EditAudio;
