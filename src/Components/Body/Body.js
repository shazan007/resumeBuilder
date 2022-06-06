import React,{ useEffect, useState,useRef } from 'react';
import Dload from '../../Assets/download-cloud.svg';
import Editor from "../Editor/Editor";
import Resume from "../Resume/Resume";
import ReactToPrint from "react-to-print";
import data from "./guitarist.json";

import Lottie from 'react-lottie';

import Style from "./Body.module.css";
function Body() {
    const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
    const sections = {
        basicInfo: "Basic Info",
        workExp: "Work Experience",
        project: "Projects",
        education: "Education",
        achievement: "Achievements",
        summary: "Summary",
        other: "Other",
      };
      const [anima, setState] = useState(true);
      const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: data,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };


      const resumeRef = useRef();

      const [activeColor, setActiveColor] = useState(colors[0]);

      const [resumeInformation, setResumeInformation] = useState({
        [sections.basicInfo]: {
          id: sections.basicInfo,
          sectionTitle: sections.basicInfo,
          detail: {},
        },
        [sections.workExp]: {
          id: sections.workExp,
          sectionTitle: sections.workExp,
          details: [],
        },
        [sections.project]: {
          id: sections.project,
          sectionTitle: sections.project,
          details: [],
        },
        [sections.education]: {
          id: sections.education,
          sectionTitle: sections.education,
          details: [],
        },
        [sections.achievement]: {
          id: sections.achievement,
          sectionTitle: sections.achievement,
          points: [],
        },
        [sections.summary]: {
          id: sections.summary,
          sectionTitle: sections.summary,
          detail: "",
        },
        [sections.other]: {
          id: sections.other,
          sectionTitle: sections.other,
          detail: "",
        },
      });
    
 useEffect(()=> {
    console.log(resumeInformation);
 },[resumeInformation]);



  return (
    <div className={Style.container}>
        <p className={Style.heading}><span>Build Instant Resume</span> Save Time for <span>important things</span></p>
        <div className={Style.toolbar}>
                    <div className={Style.colors}>
          {colors.map((item) => (
            <span
              key={item}
              style={{ backgroundColor: item }}
              className={`${Style.color} ${
                activeColor === item ? Style.active : ""
              }`}
              onClick={() => setActiveColor(item)}
            />
          ))}
        </div>
        <div className={Style.toolbar}>
      {anima && <Lottie options={defaultOptions} height={100} width={100}/>}
      </div>
        <ReactToPrint
          trigger={() => {
            return (
                <button>
                Download <img src={Dload} alt=" " /> 
                </button>
                );
          }}
          content={() => resumeRef.current}
        />

        </div>
        <div className={Style.main}>
            <Editor sections={sections} information={resumeInformation}
            setInformation={setResumeInformation}/>
             <Resume
          ref={resumeRef}
          sections={sections}
          information={resumeInformation}
          activeColor={activeColor}
        />
        </div>
    </div>
  )
}

export default Body