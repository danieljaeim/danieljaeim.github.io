
import Header from "../Header/header"
import Banner from "../Banner/banner"
import About from "../About/about"
import SkillList from "../Skills/skill"
import Work from "../Work/work"
import Footer from "../Footer/footer"

/*--------------------
* Building Krinky
----------------------*/
export default function Daniel() {
    return (
        <>
            <Header/>
                <main className="wrapper">
                    <Banner/>
                    <About/>
                    <Work/>
                    <SkillList/>
                </main>
            <Footer/>
        </>
    )
}
