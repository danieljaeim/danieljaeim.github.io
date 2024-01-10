
import { Link } from "react-scroll";

/*--------------------
* About Section
----------------------*/
export default function About() {
    return (
        <>
            <section className="section" id="about">
                <div className="container">
                    <div className="grid lg:grid-cols-12 grid-cols-1 items-center">
                        <div className="lg:col-span-6 text-center mb-[50px] lg:mb-0">
                            <img className="mx-auto" src="img/aboutme-banner.png" title="Banner" alt="Banner" />
                        </div>
                        <div className="lg:col-span-6 lg:pl-12">
                            <h3 className="font-[600] text-[26px] md:text-[40px] leading-[1.2] text-black mb-[25px]">I'm a Fullstack Software Developer with 2+ years of experience.</h3>
                            <p className="text-[16px] md:text-[18px]">I began developing websites out of my dorm room at UC Berkeley. Five years later, I've worked with
                            amazing people from around the world, creating web courses for schools and security systems at Amazon.</p>
                            <div className="grid grid-cols-12 pt-5">
                                <div className="col-span-6 sm:col-span-4">
                                    <h5 className="text-[26px] text-orange-600 font-[600]">15+</h5>
                                    <span>Fullstack Projects</span>
                                </div>
                                <div className="col-span-6 sm:col-span-4">
                                    <h5 className="text-[26px] text-orange-600 font-[600]">25+</h5>
                                    <span> Private Clients</span>
                                </div>
                            </div>
                            <div className="pt-6">
                                <a className="px-btn px-btn-theme mr-4" href="https://www.linkedin.com/in/imdanieljae/" target="_blank" to="contactus">LinkedIn</a>
                                <Link className="px-btn px-btn-dark" to="projects">Portfolio</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
