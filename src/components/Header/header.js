
import { useState } from "react";
import { Link } from "react-scroll";
import "../Header/header.css";

/*--------------------
* Header Menu
----------------------*/
function Menu(props) {
    return (
        <li><Link data-scroll-nav={props.id} smooth={true} to={props.link}><span>{props.name}</span></Link></li>
    );
}

/*--------------------
* Header
----------------------*/
export default function Header() {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const header_menus = [
        { id: 0, name: 'About', scroll_link: 'about' },
        { id: 1, name: 'Experience', scroll_link: 'experience' },
        { id: 2, name: 'Projects', scroll_link: 'projects' }
    ]
    return (
        <>
            <header className="main-header fixed left-0 right-0 z-[100]">
                <div className="container flex items-center justify-between one-page-nav relative py-5 lg:py-3">
                    <div className="logo"></div>
                    <button className="md:hidden lg:hidden mobile_toggle w-[40px] flex flex-col" onClick={() => setIsOpenMenu(!isOpenMenu)}>
                        <span className="w-[25px] h-[2px] bg-slate-900 inline-block"></span>
                        <span className="w-[25px] h-[2px] bg-slate-900 inline-block my-[5px]"></span>
                        <span className="w-[25px] h-[2px] bg-slate-900 inline-block"></span>
                    </button>
                    <div className={`navbar-collapse flex ${isOpenMenu ? 'menu-open' : ''}`}>
                        <ul className="navbar lg:mx-auto flex flex-col lg:flex-row p-4 lg:p-0">
                            {
                                header_menus.map((val, i) => {
                                    return <Menu key={i} id={val.id} name={val.name} link={val.scroll_link} />
                                })
                            }
                        </ul>
                    </div>
                    <div className="ms-auto hidden md:flex lg:flex">
                        <a className="px-btn px-btn-theme" data-scroll-nav="4" target="_blank"
                            href="https://drive.google.com/file/d/1HWuWNZqHVPfRALPh7daRzr850iIRER9q/view?usp=sharing">Resume</a>
                    </div>
                </div>
            </header>
        </>
    )
}
