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
                    className={`grid gap-2 ${i == 0 ? "grid-cols-1" : "grid-cols-2"
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
              <h4 className="font-[600] text-[25px] text-black mb-4 pb-4">
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
  const { showModal, setShowModal, closePopup, projectDetails } = props;

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
                    <div className="px-btn">
                      2021 - 2023{" "}
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
                    width="800"
                    title=""
                    alt=""
                    onClick={() => setShowModal(2)}
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
                    <div className="px-btn px_modal">
                      2019 - 2020{" "}
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
                    onClick={() => setShowModal(3)}
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
                    <div className="px-btn">
                      {" "}
                      May - August 2019
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
