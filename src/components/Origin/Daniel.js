
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

    return (
        <>
            <Header/>
                <main className="wrapper">
                    <Banner/>
                    <About/>
                    <Work setShowModal={setShowModal} closePopup={closePopup} showModal={showModal}/>
                    <SkillList setShowModal={setShowModal} closePopup={closePopup} showModal={showModal}/>
                </main>
            <Footer/>
        </>
    )
}
