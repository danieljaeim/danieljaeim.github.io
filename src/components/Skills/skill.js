import { useState } from "react";
import "../Skills/skills.css";
/*--------------------
* Skill Section
----------------------*/
function Skill(props) {
  return (
    <div
      className="col-span-6 border"
      onClick={() => props.setShowModal(props.index + 3)}
    >
      <div className={props.id.main + " feature-box-01"}>
          <div className="overlay-box">
            <img className="description-img" src={props.img}></img>
            <img className="description-gif" src={props.gif}></img>
            <div className="description-title mt-1.5 font-base text-lg text-slate-800">
              {props.title}
            </div>
          </div>
      </div>
    </div>
  );
}

/*--------------------
* Skill List Section
----------------------*/
export default function SkillList(props) {
  const showModal = props.showModal;
  const setShowModal = props.setShowModal;
  const closePopup = props.closePopup;

  const skill_list = [
    {
      id: { main: "bg-1", icon: "fab fa-react" },
      title: "Secret H,  Discord Bot",
      img: "img/secret-hitler.png",
      gif: "img/secret-h.gif",
      desc: "Built and marketed a successful Discord Bot with Node.js and Discord.js library \
            that hosts automated games on servers. Downloaded by 1500+ servers!",
      demo: "https://discord.com/oauth2/authorize?client_id=1133129369792020640&permissions=326417774672&scope=bot",
    },
    {
      id: { main: "bg-4", icon: "fab fa-node-js" },
      title: "Gifsmos: Graphing Calculator Visualizer",
      img: "img/gifsmos.png",
      gif: "img/gifsmos.gif",
      desc: "A web application built in React.js, Redux and Typescript for creating animated GIFs of Desmos Formulas \
            that can be shared with others.",
      demo: "http://www.gifsmos.com/",
    },
    {
      id: { main: "bg-2", icon: "fab fa-node-js" },
      title: "Pathfinder, Search Algorithm Visualizer",
      img: "img/pathfinder.png",
      gif: "img/pathfinder.gif",
      desc: "A pathfinding algorithm visualizer built with React.js and CSS animations. \
            Allows users to place mazes and visualize Djikstra's, A*, DFS and BFS.",
      demo: "https://www.danieljaeim.com/AlGoggles",
    },
    {
      id: { main: "bg-3", icon: "fab fa-node-js" },
      title: "Spotluck, Music Recommendation App",
      img: "img/spotluck.png",
      gif: "img/spotluck.gif",
      desc: "A web application built with React and the Spotify API, to recommend new music to users, based on their top 100 listens.",
      demo: "https://google.com",
    },
  ];

  const projectDetails = [
    {
      title: "AWS BRASS (Internal)",
      description:
        "At Amazon, my hallmark project was updating our authorization service to support 1+ million daily LDAP/POSIX requests by Q1 2023. \n \n",
      subDescription:
        "Simply upgrading our service fleet hardware was too costly, I proposed optimizing our service from the ground up. I dove deep and relearned every aspect of our backend architecture \n" +
        "and designed a series of optimizations to improve our service drastically: caching for our key customers, a distributed database system for streaming replication across regions, adding \n" +
        "input validation to handle misaligned requests from throttling our hosts, and refactoring our DynamoDB partitions keys to reduce hot key throttling and increase our request rate and throughput.",
      subsubDescription:
        "By Q1 2023, our average latency for requests made by legacy customers decreased by a factor of 5x. It was a tremendous success, and I owe my success largely to my senior engineers and \n" +
        "contributing engineers on my team.",
      images: ["img/lock.svg"],
      details: [
        {
          title: "Type",
          description: "Internal Security System / Web Software",
        },
        {
          title: "Langages",
          description: "Java, Javascript, Python, Ruby, HTML/CSS",
        },
        {
          title: "Skills",
          description: "System Design, Distributed Systems, Security",
        },
        {
          title: "Live Site",
          description: "Internal Service (not public).",
        },
      ],
    },
    {
      title: "Fullstack Engineer Internship",
      description:
        "At Desmos, my hallmark project was productionalizing their open-source graphing calculator visualizer, Gifsmos.com.",
      subDescription:
        "I worked with lead engineers and other interns to design and develop the application's frontend and backend. I was tasked with " +
        "connecting our project to the company's internal APIs to support efficient request processing. I ramped onto Redux.js within weeks and refactored " +
        "the product's codebase to React. I also led design meetings to ensure the site was compliant with web accessibility guidelines.",
      images: ["img/gifsmos.gif"],
      details: [
        {
          title: "Type",
          description: "Web Application",
        },
        {
          title: "Langages",
          description: "Javascript, React.js, Redux.js, Node.js, HTML, CSS",
        },
        {
          title: "Live URL",
          description: "www.gifsmos.com",
        },
      ],
    },
    {
      title: "Fullstack Coding Instructor",
      description:
        "After completing my web development bootcamp in the Summer of 2019, I returned to Berkeley and realized so many could benefit from being exposed to STEM education earlier in life.",
      subDescription:
        "I proposed and got funding through UC Berkeley to work with a local afterschool program that teaches children STEM. I worked closely with our education lead to develop weekly Python classes, website design in CSS / HTML, and helped high school students build websites " +
        " so they wouldn't need to be surprised going into their first CS class in college.",
      subsubDescription:
        "It was a great experience working with Lynda from the theCoderSchool, and I thank Berkeley for sponsoring the opportunity.",
      images: ["/img/thecoderschool.jpg"],
      details: [
        {
          title: "Type",
          description: "Web Development Teacher",
        },
        {
          title: "Langages",
          description: "Python, Javascript, React.js, Unity",
        },
        {
          title: "Live URL",
          description: "www.example.com",
        },
      ],
    },
    {
      title: "Website Design for Marketing Agency Startup 04",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      subDescription:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      images: [
        "img/project-4.jpg",
        "img/project-2.jpg",
        "img/project-3.jpg",
        "img/project-1.jpg",
      ],
      details: [
        {
          title: "Type",
          description: "Website",
        },
        {
          title: "Langages",
          description: "",
        },
        {
          title: "Platform",
          description: "WordPress",
        },
        {
          title: "Country",
          description: "USA",
        },
        {
          title: "Live URL",
          description: "www.example.com",
        },
      ],
    },
  ];

  return (
    <>
      <section
        data-scroll-data="2"
        id="projects"
        className="section experience-section !pb-0"
      >
        <div className="container">
          <div>{showModal}</div>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-2">
            <div className="lg:col-span-6 lg:pl-9">
              <div className="section-heading">
                <h3 className="m-0">
                  <span>Projects</span>
                </h3>
              </div>
              <div className="skill-box">
                <div className="grid gap-4 grid-cols-12">
                  {skill_list.map((val, i) => {
                    return (
                      <Skill
                        setShowModal={setShowModal}
                        showModal={showModal}
                        closePopup={closePopup}
                        demo={val.demo}
                        key={i}
                        index={i}
                        id={val.id}
                        title={val.title}
                        img={val.img}
                        desc={val.desc}
                        gif={val.gif}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="m-5">
              {" "}
              Come check out the rest of my projects on my{" "}
              <u>
                <a
                  target="_blank"
                  href="https://github.com/danieljaeim?tab=repositories"
                >
                  Github
                </a>
              </u>{" "}
            </div>
          </div>
        </div>
        {showModal ? (
          <>
            <Project
              closePopup={closePopup}
              projectDetails={projectDetails[showModal]}
            ></Project>
          </>
        ) : null}
      </section>
    </>
  );
}

function Project(props) {
  return (
    <>
      <div className="px-modal mfp-hide">
        <div className="single-project-box">
          <div className="grid grid-cols-12 gx-3">
            <div className="col-span-12 md:col-span-7 mb-10 md:mb-0">
              {props.projectDetails.images.map((img, i) => {
                return (
                  <div
                    className={`grid gap-2 ${
                      i == 0 ? "grid-cols-1" : "grid-cols-2"
                    }`}
                  >
                    <div
                      key={`image_${i} flex flex-row`}
                      className="col-span-1"
                    >
                      <img
                        className="self-center p-50"
                        src={img}
                        title=""
                        alt=""
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="col-span-12 md:col-span-5 md:pl-10 lg:pl-14">
              <h4 className="font-[600] text-[25px] text-black mb-4 pb-4 border-b">
                {props.projectDetails.title}
              </h4>
              <p className="mb-3">{props.projectDetails.description}</p>
              <p className="mb-3">{props.projectDetails.subDescription}</p>
              <p className="mb-3 underline">
                {props.projectDetails.subsubDescription}
              </p>
              <ul className="m-0 p-0 pt-7 list-none">
                {props.projectDetails.details.map((detail, i) => {
                  return (
                    <li key={`detail_${i}`} className="flex py-2">
                      <span className="w-[100px] font-[600] text-black">
                        {detail.title}:
                      </span>
                      <span>{detail.description}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <button className="px-close" onClick={props.closePopup}>
              <i className="fa fa-times"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
