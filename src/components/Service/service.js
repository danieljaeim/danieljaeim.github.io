

/*--------------------
* Service Section
----------------------*/
function Service(props) {
    return (
        <>
            <div className="lg:col-span-6">
                <div className={props.id.main + " feature-box-01"}>
                    <div className="icon"><i className={props.id.icon}></i></div>
                    <div className="feature-content">
                        <h5>{props.title}</h5>
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

/*--------------------
* Service List Section
----------------------*/
export default function ServiceList() {
    const service_list = [
        {id:{main:'bg-1', icon:'fas fa-phone-alt'}, title:'Web Design', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {id:{main:'bg-2', icon:'fas fa-laptop'}, title:'Development', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {id:{main:'bg-3', icon:'fas fa-exclamation-triangle'}, title:'SEO Marketing', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {id:{main:'bg-4', icon:'fas fa-columns'}, title:'Web Design', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {id:{main:'bg-5', icon:'fas fa-ruler-vertical'}, title:'Development', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {id:{main:'bg-6', icon:'fas fa-globe'}, title:'SEO Marketing', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]
    return (
        <>
           <section data-scroll-data="1" id="services" className="section services-section bg-gray" style={{ "backgroundImage": "url(img/effect/bg-effect-1.png)", "backgroundRepeat": "no-repeat", "backgroundSize": "cover"}}>
                <div className="container">
                    <div className="grid section-heading">
                        <div className="lg:col-span-6 text-center mx-auto">
                            <h3><span>Services</span></h3>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-12 md:grid-cols-2 gap-5 grid-cols-1 items-center">
                        {
                            service_list.map((val, i)=>{
                                return <Service key={i} id={val.id} title={val.title} description={val.description} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
}
