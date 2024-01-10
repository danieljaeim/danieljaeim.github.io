
import Header from "../Header/header"
import Banner from "../Banner/banner"
import About from "../About/about"
import SkillList from "../Skills/skill"
import Work from "../Work/work"
import Footer from "../Footer/footer"
import { useState } from "react";

export default function Daniel() {
    const [showModal, setShowModal] = useState(0);
    const closePopup = () => {
        setShowModal(0);
    };

    const projectDetails = [
        {
            title: "AWS BRASS (Internal)",
            description:
                "At Amazon, my hallmark project was updating our authorization service to support 1+ million daily LDAP/POSIX requests by Q1 2023. \n \n",
            subDescription:
                "Upgrading our service fleet hardware was costly, so I optimized our service from the ground up. I dove deep and learned every aspect of our backend architecture \n" +
                "to design improvements: caching for our key customers, a distributed database system for streaming replication across servers, adding \n" +
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
            subsubDescription:
                "By the end of my internship, we had a fully operational product that we launched alongside the main site, reaching over 3000 users within \
                the first month.",
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
                "I proposed and got funding through UC Berkeley to work with a local afterschool program that teaches fun STEM curriculum to students. \
                I worked closely with our education lead to develop weekly Python classes, website design project based learning modules, and helped high school students build websites " +
                " so they wouldn't need to be surprised going into their first CS class in college.",
            subsubDescription:
                "By the end of my time at the program, several of my students ended up getting accepted into Berkeley's EECS Program, with many of them finding \
                internship opportunities within their Freshman year.",
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
                    title: "Program Website",
                    description: "https://www.thecoderschool.com/",
                },
            ],
        },
        {
            title: "Secret Hitler Discord Bot",
            description:
                "I love games and connecting people through technology. During COVID-19, I decided to build a Discord Bot that automatically hosts sessions of my favorite board game, Secret Hitler.",
            subDescription:
                "This application was a culmination of the web development experience I gathered in my freetime. \
                I employed the Discord.JS library, and wrote the bot using Javascript. The bot hosted on Heroku gets invited to servers, and listens for requests \
                made through chat. I was able to store all state for the game through an object class that gets represented as Discord Embeds, which my bot parses \
                and translates into the next state of the game.",
            subsubDescription:
                "Within 2 months of uploading the bot over the internet, it received over 1000+ downloads in servers across the world, with a daily active userbase of 500+ users in December 2019.",
            images: [
                "img/secret-h.gif",
            ],
            details: [
                {
                    title: "Type",
                    description: "Discord Bot",
                },
                {
                    title: "Langages",
                    description: "Javascript, Node.js, Discord.js",
                },
                {
                    title: "Invite Link",
                    description: "https://discord.com/oauth2/authorize?client_id=1133129369792020640&permissions=326417774672&scope=bot",
                },
            ],
        },
        {
            title: "Pathfinder Traversal Visualizer",
            description:
                "While taking my Artifical Intelligence course, I decided to create a visualizer for Djikstra's and A* in React.",
            subDescription:
                "Some students had posted about building visualizers for understanding the search algorithms we were learning in class. \
                As a visual learner, I felt it would be a great experience to create an application to visualize and solidify my understanding of these concepts.",
            subsubDescription: "After hosting my project on Heroku, I sent it to my classmates, who gave positive feedback and ideas for additional constraints, such as maze generation. \
            My professor decided to add a link to the project in our course review notes. ",
            images: [
                "img/pathfinder.gif",
            ],
            details: [
                {
                    title: "Type",
                    description: "Web Application",
                },
                {
                    title: "Langages",
                    description: "Javascript, React.js",
                },
                {
                    title: "Demo URL",
                    description: "https://www.danieljaeim.com/AlGoggles",
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
                "img/project-1F.jpg",
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
            <Header />
            <main className="wrapper">
                <Banner />
                <About />
                <Work projectDetails={projectDetails} setShowModal={setShowModal} closePopup={closePopup} showModal={showModal} />
                <SkillList projectDetails={projectDetails} setShowModal={setShowModal} closePopup={closePopup} showModal={showModal} />
            </main>
            <Footer />
        </>
    )
}
