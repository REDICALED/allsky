import { Nav } from "@/components/Nav";
import { About } from "@/components/Sector/About";
import { Projects } from "@/components/Sector/Projects";
import { BcKim } from "@/components/Sector/BcKim";


const MainPage = () => {
    
    return (
        <div className=" ">
        <Nav />

        <div className=" pt-[5vh] ">
        <About />
        <BcKim />
        <Projects  />


        </div>
        
        </div>
    );
}

export default MainPage;