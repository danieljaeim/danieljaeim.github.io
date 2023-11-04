import "../Skills/skills.css"
/*--------------------
* Skill Section
----------------------*/
function Skill(props) {
    return (
        <>
            <div className="col-span-6">
                <div className={props.id.main + " feature-box-03"}>
                    <a href={props.demo} target="_blank">
                    <div className="overlay-box">
                        <img className="description-img" src={props.img}></img>
                        <img className="description-gif" src={props.gif}></img>
                        <div className="description-title"> {props.title} </div>
                        <div className="description-box">
                            <div className="description-text"> {props.desc} </div>
                        </div>
                    </div>
                    </a>
                </div>
            </div>
        </>
    );
}

/*--------------------
* Skill List Section
----------------------*/
export default function SkillList() {

    const skill_list = [
        {id:{main:'bg-1', icon:'fab fa-react'}, title:'Social Deduction Discord Bot', img:"img/secret-hitler.png", 
            gif:"img/secret-h.gif", desc: "Built and marketed a successful Discord Bot with Node.js and Discord.js library \
            that hosts automated games on servers. Downloaded by 1500+ servers!",
            demo: "https://google.com"},
            {id:{main:'bg-4', icon:'fab fa-node-js'}, title:'Gifsmos', img: "img/gifsmos.png",
                gif:"img/gifsmos.gif", desc: "A web application built in React.js, Redux and Typescript for creating animated GIFs of Desmos Formulas \
                that can be shared with others.",
                demo: "https://google.com"},
        {id:{main:'bg-2', icon:'fab fa-node-js'}, title:'Pathfinder', img: "img/pathfinder.png",
            gif:"img/pathfinder.gif", desc: "A pathfinding algorithm visualizer built with React.js and CSS animations. \
            Allows users to place mazes and visualize Djikstra's, A*, DFS and BFS.",
            demo: "https://google.com"},
        {id:{main:'bg-3', icon:'fab fa-node-js'}, title:'Spotluck', img: "img/spotluck.png",
            gif:"img/spotluck.gif", desc: "A web application built with React and the Spotify API, to recommend new music to users, based on their top 100 listens.",
            demo: "https://google.com"},
        // {id:{main:'bg-2', icon:'fas fa-signal'}, title:'Spotluck', img: "img/spotluck.png" },
        // {id:{main:'bg-4', icon:'fas fa-brain'}, title:'Data Structures, Algorithms' },
        // {id:{main:'bg-5', icon:'fas fa-map-signs'}, title:'System Design' },
        // {id:{main:'bg-6', icon:'fab fa-android'}, title:'App Dev' },
    ]

    return (
        <>
            <section data-scroll-data="2" id="projects" className="section experience-section !pb-0">
                <div className="container">
                    <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1">
                        <div className="lg:col-span-6 lg:pl-9">
                            <div className="section-heading">
                                <h3 className="m-0"><span>Projects</span></h3>
                            </div>
                            <div className="skill-box">
                                <div className="grid gap-4 grid-cols-12">
                                    {
                                        skill_list.map((val, i)=>{
                                            return <Skill demo={val.demo} key={i} id={val.id} 
                                                title={val.title} img={val.img} desc={val.desc}
                                                gif={val.gif} />
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div> Come check out the rest of my projects on my <u><a target="_blank" href="https://github.com/danieljaeim?tab=repositories">Github</a></u> </div>
                        {/* <div className="lg:col-span-6 text-center pt-[40px] md:pt-0">
                            <img className="mx-[auto]" src="img/me_smile.png" title="" alt=""/>
                        </div> */}
                    </div>
                </div>
            </section>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <section>
                
            </section>
        </>
    );
}
