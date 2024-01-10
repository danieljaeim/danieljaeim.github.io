import { useState } from "react";
import "../Skills/skills.css";
/*--------------------
* Skill Section
----------------------*/
function Skill(props) {
  return (
    <div
      className="min-w-[90%] sm:mb-[5%] md:mb-[5%] lg:h-56 border lg:mb-[22.5%] lg:mr-[2%]"
      onClick={() => props.setShowModal(props.index)}
    >
      <div className={props.id.main + " feature-box-01"}>
        <div className="overlay-box">
          <img className="description-img" src={props.img}></img>
          <img className="description-gif" src={props.gif}></img>
        </div>
      </div>
    </div>
  );
}

/*--------------------
* Skill List Section
----------------------*/
export default function SkillList(props) {
  const { showModal, setShowModal, closePopup, projectDetails } = props;

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
      id: { main: "bg-2", icon: "fab fa-node-js" },
      title: "Pathfinder, Search Algorithm Visualizer",
      img: "img/pathfinder.png",
      gif: "img/pathfinder.gif",
      desc: "A pathfinding algorithm visualizer built with React.js and CSS animations. \
            Allows users to place mazes and visualize Djikstra's, A*, DFS and BFS.",
      demo: "https://www.danieljaeim.com/AlGoggles",
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
          <div className="grid">
            <div className="section-heading">
              <h3 className="m-0">
                <span>Projects</span>
              </h3>
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 w-full">
              {skill_list.map((val, i) => {
                return (
                  <Skill
                    setShowModal={setShowModal}
                    showModal={showModal}
                    closePopup={closePopup}
                    demo={val.demo}
                    key={i}
                    index={i + 4}
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
        {showModal >= 4 ? (
          <>
            <Project
              closePopup={closePopup}
              projectDetails={projectDetails[showModal - 1]}
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
                    className={`grid gap-2 ${i == 0 ? "grid-cols-1" : "grid-cols-2"
                      }`}
                  >
                    <div
                      key={`image_${i} flex flex-row`}
                      className="col-span-1"
                    >
                      <img
                        className="self-center p-50 border border-black"
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
                <a href={props.projectDetails.demo} target="_blank"> <p className="no-underline font-semibold">Demo Link: </p><p className="underline">{props.projectDetails.demo}</p></a>
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
