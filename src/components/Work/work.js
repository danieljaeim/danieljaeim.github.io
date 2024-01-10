import { useState } from "react";
import { Link } from "react-scroll";

/*--------------------
* Proejct Section
----------------------*/

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
                        onClick={() => Work.setShowModal(i)}
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

/*--------------------
* Work Section
----------------------*/

export default function Work(props) {
  const showModal = props.showModal;
  const setShowModal = props.setShowModal;
  const closePopup = props.closePopup;

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
      images: [
        "/img/thecoderschool.jpg"
      ],
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
    }
  ];
  return (
    <>
      <section
        data-scroll-data="3"
        id="experience"
        className="section bg-orange-50"
      >
        <div className="container">
          <div className="grid section-heading">
            <div className="lg:col-span-6 text-center mx-auto">
              <h3>
                <span>Experience</span>
              </h3>
            </div>
          </div>
          <div className="lightbox-gallery portfolio-box">
            `
            <div className="grid grid-cols-12 gx-3 mb-5 pb-lg-3 mb-lg-3 pb-12 portfolio-box justify-around items-center">
              <div className="col-span-12 md:col-span-6 md:px-5 lg:px-10 mb-10 md:mb-0">
                <div className="portfolio-img">
                  <img
                    src="img/aws-logo.jpg"
                    title=""
                    alt=""
                    onClick={() => setShowModal(1)}
                  />
                  <Link to="#" className="gallery-link gallery-link-icon">
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 md:px-5 lg:px-10">
                <div className="portfolio-text">
                  <h6>
                    <span>Software Engineer / FullTime / Internship</span>
                  </h6>
                  <h4>Amazon Web Services, Security</h4>
                  <p>
                    I developed Amazon's internal authorization microservice.{" "}
                  </p>
                  <p>
                    {" "}
                    In order to secure 1+ million requests by developers every
                    day, I learned to build software that is resilient, tested,
                    and scalable -- applying computer science fundamentals to
                    real life application.
                  </p>
                  <div className="btn-bar">
                    <div className="px-btn px-btn-theme px_modal">
                      2021 - 2023{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 gx-3 mb-5 pb-lg-3 mb-lg-3 pb-12 portfolio-box justify-around items-center">
              <div className="col-span-12 md:col-span-6 md:px-5 lg:px-10 md:order-last mb-10 md:mb-0">
                <div className="portfolio-img">
                  <img
                    src="img/desmos.png"
                    title=""
                    alt=""
                    onClick={() => setShowModal(2)}
                  />
                  <Link to="#" className="gallery-link gallery-link-icon">
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 md:px-5 lg:px-10">
                <div className="portfolio-text">
                  <h6>
                    <span>Software Engineer / Internship</span>
                  </h6>
                  <h4>Desmos Inc</h4>
                  <p>
                    I designed and developed the company's newly launched Gifsmos
                    website. The service helps students record and share GIFs of complex math formulaes
                    seamlessly with their teachers.
                  </p>
                  <div className="btn-bar">
                    <div className="px-btn px-btn-theme px_modal">
                      {" "}
                      May - August 2019
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 gx-3 mb-5 pb-lg-3 mb-lg-3 pb-12 portfolio-box justify-around items-center">
              <div className="col-span-12 md:col-span-6 md:px-5 lg:px-10 mb-10 md:mb-0">
                <div className="portfolio-img object-fill bg-slate-50">
                  <img
                    className="object-cover"
                    src="img/coderschoollogo.jpg"
                    width="auto"
                    title=""
                    alt=""
                    onClick={() => setShowModal(3)}
                  />
                  <Link
                    to="http://www.gifsmos.com/"
                    className="gallery-link gallery-link-icon"
                  >
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 md:px-5 lg:px-10">
                <div className="portfolio-text">
                  <h6>
                    <span>Teacher / Web Design </span>
                  </h6>
                  <h4>UC Berkeley Externship @ TheCoderSchool </h4>
                  <p>
                    In collaboration with UC Berkeley and theCoderSchool, I
                    received a grant to revamp the private education company's
                    curriculum to include fullstack technologies such as
                    React.js, Node.js and Bootstrap.
                  </p>
                  <div className="btn-bar">
                    <div className="px-btn px-btn-theme px_modal">
                      2019 - 2020{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {showModal ? (
        <>
          <Project
            closePopup={closePopup}
            projectDetails={projectDetails[showModal - 1]}
          ></Project>
        </>
      ) : null}
    </>
  );
}
