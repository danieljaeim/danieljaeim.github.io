import { useState } from "react";
import { Link } from "react-scroll";

/*--------------------
* Proejct Section
----------------------*/

function Proejct(props) {
    return (
        <>
            <div className="px-modal mfp-hide">
                <div className="single-project-box">
                    <div className="grid grid-cols-12 gx-3">
                        <div className="col-span-12 md:col-span-7 mb-10 md:mb-0">
                            <div className="grid grid-cols-2 gap-2">
                                {props.projectDetails.images.map((img, i) => {
                                    return ( 
                                        <div key={`image_${i}`} className="col-span-1">
                                            <img className="border" src={img} title="" alt="" />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-5 md:pl-10 lg:pl-14">
                            <h4 className="font-[600] text-[25px] text-black mb-4 pb-4 border-b">{props.projectDetails.title}</h4>
                            <p className="mb-3">{props.projectDetails.description}</p>
                            <p>{props.projectDetails.subDescription}</p>
                            <ul className="m-0 p-0 pt-7 list-none">
                                {props.projectDetails.details.map((detail, i) => {
                                    return (
                                        <li key={`detail_${i}`} className="flex py-2">
                                            <span className="w-[100px] font-[600] text-black">{detail.title}:</span>
                                            <span>{detail.description}</span>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <button className="px-close" onClick={ props.closePopup }><i className="fa fa-times"></i></button>
                    </div>
                </div>
            </div>
        </>
    );
}


/*--------------------
* Work Section
----------------------*/

export default function Work() {
    const [showModal, setShowModal] = useState(0);
    const closePopup = () => {
        setShowModal(0);
    }

    const projectDetails = [
        {
            title: 'Amazon Access Control',
            description: ' consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            subDescription: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            images: ['img/project-1.jpg', 'img/project-3.jpg', 'img/project-4.jpg', 'img/project-2.jpg'],
            details: [
                {
                    title: 'Type',
                    description: 'Website',
                },
                {
                    title: 'Langages',
                    description: 'PHP, HTML, CSS, JS',
                },
                {
                    title: 'Platform',
                    description: 'WordPress',
                },
                {
                    title: 'Country',
                    description: 'USA',
                },
                {
                    title: 'Live URL',
                    description: 'www.example.com',
                },
            ]
        },
        {
            title: 'Website Design for Marketing Agency Startup 02',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            subDescription: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            images: ['img/project-2.jpg', 'img/project-3.jpg', 'img/project-4.jpg', 'img/project-1.jpg'],
            details: [
                {
                    title: 'Type',
                    description: 'Website',
                },
                {
                    title: 'Langages',
                    description: '',
                },
                {
                    title: 'Platform',
                    description: 'WordPress',
                },
                {
                    title: 'Country',
                    description: 'USA',
                },
                {
                    title: 'Live URL',
                    description: 'www.example.com',
                },
            ]
        },
        {
            title: 'Website Design for Marketing Agency Startup 03',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            subDescription: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            images: ['img/project-3.jpg', 'img/project-2.jpg', 'img/project-4.jpg', 'img/project-1.jpg'],
            details: [
                {
                    title: 'Type',
                    description: 'Website',
                },
                {
                    title: 'Langages',
                    description: '',
                },
                {
                    title: 'Platform',
                    description: 'WordPress',
                },
                {
                    title: 'Country',
                    description: 'USA',
                },
                {
                    title: 'Live URL',
                    description: 'www.example.com',
                },
            ]
        },
        {
            title: 'Website Design for Marketing Agency Startup 04',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            subDescription: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            images: ['img/project-4.jpg', 'img/project-2.jpg', 'img/project-3.jpg', 'img/project-1.jpg'],
            details: [
                {
                    title: 'Type',
                    description: 'Website',
                },
                {
                    title: 'Langages',
                    description: '',
                },
                {
                    title: 'Platform',
                    description: 'WordPress',
                },
                {
                    title: 'Country',
                    description: 'USA',
                },
                {
                    title: 'Live URL',
                    description: 'www.example.com',
                },
            ]
        },
    ]
    return (
        <>
            <section data-scroll-data="3" id="experience" className="section bg-orange-50">
                <div className="container">
                    <div className="grid section-heading">
                        <div className="lg:col-span-6 text-center mx-auto">
                            <h3><span>Experience</span></h3>
                        </div>
                    </div>
                    <div className="lightbox-gallery portfolio-box">`
                        <div className="grid grid-cols-12 gx-3 mb-5 pb-lg-3 mb-lg-3 pb-12 portfolio-box justify-around items-center">
                            <div className="col-span-12 md:col-span-6 md:px-5 lg:px-10 mb-10 md:mb-0">
                                <div className="portfolio-img">
                                    <img src="img/aws-logo.jpg" title="" alt="" />
                                    <Link to="#" className="gallery-link gallery-link-icon">
                                        <i className="fas fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6 md:px-5 lg:px-10">
                                <div className="portfolio-text">
                                    <h6><span>Software Engineer / FullTime / Internship</span></h6>
                                    <h4>Amazon Web Services, Security</h4>
                                    <p>I develop security software for teams and digital resources at Amazon. We hit 1+ million requests every week. I build
                                        software that is resilient, tested, and scalable to support developers at Amazon across time in being secure.
                                    </p>
                                    <div className="btn-bar">
                                        <div className="px-btn px-btn-theme px_modal" onClick={() => setShowModal(1)}>2021 - 2023 </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 gx-3 mb-5 pb-lg-3 mb-lg-3 pb-12 portfolio-box justify-around items-center">
                            <div className="col-span-12 md:col-span-6 md:px-5 lg:px-10 md:order-last mb-10 md:mb-0">
                                <div className="portfolio-img">
                                    <img src="img/desmos.png" title="" alt="" />
                                    <Link to="#" className="gallery-link gallery-link-icon">
                                        <i className="fas fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6 md:px-5 lg:px-10">
                                <div className="portfolio-text">
                                    <h6><span>Software Engineer / Internship</span></h6>
                                    <h4>Desmos Inc</h4>
                                    <p>I design and develop the company's newly launched Gifsmos website. The service helps teachers and students around the world record and share
                                        GIFs of complex math formulaes seamlessly.
                                    </p>
                                    <div className="btn-bar">
                                        <div className="px-btn px-btn-theme px_modal" onClick={() => setShowModal(2)}>2019</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 gx-3 mb-5 pb-lg-3 mb-lg-3 pb-12 portfolio-box justify-around items-center">
                            <div className="col-span-12 md:col-span-6 md:px-5 lg:px-10 mb-10 md:mb-0">
                                <div className="portfolio-img">
                                    <img src="img/thecoderschool.jpg" title="" alt="" />
                                    <Link to="http://www.gifsmos.com/" className="gallery-link gallery-link-icon">
                                        <i className="fas fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6 md:px-5 lg:px-10">
                                <div className="portfolio-text">
                                    <h6><span>Teacher / Web Design </span></h6>
                                    <h4>UC Berkeley Teaching</h4>
                                    <p>In collaboration with UC Berkeley and theCoderSchool, I received a grant to revamp the private education company's curriculum to include fullstack technologies
                                        such as React.js, Node.js and Bootstrap.
                                    </p>
                                    <div className="btn-bar">
                                        <div className="px-btn px-btn-theme px_modal" onClick={() => setShowModal(3)}>2019 - 2020 </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="grid grid-cols-12 gx-3 mb-5 pb-lg-3 mb-lg-3 pb-12 portfolio-box justify-around items-center">
                            <div className="col-span-12 md:col-span-6 md:px-5 lg:px-10 md:order-last mb-10 md:mb-0">
                                <div className="portfolio-img">
                                    <img src="img/secret-hitler.png" title="" alt="" />
                                    <Link to="#" className="gallery-link gallery-link-icon">
                                        <i className="fas fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6 md:px-5 lg:px-10">
                                <div className="portfolio-text">
                                    <h6><span>Personal Project</span></h6>
                                    <h4>Discord Bot</h4>
                                    <p>I designed a successful Discord Bot to virtually host games of Secret Hitler over COVID-19. The app gained traction and over 1000+ downloads.</p>
                                    <div className="btn-bar">
                                        <div className="px-btn px-btn-theme px_modal" onClick={() => setShowModal(4)}>View Project </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>

            {showModal ? (
                <>
                    <Proejct closePopup={closePopup} projectDetails={projectDetails[showModal - 1]}></Proejct>
                </>
            ): null}
        </>
     );
}
