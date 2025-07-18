import Header from "@/Components/Header";
import SideBar from "@/Components/SideBar";
import ProgrammeCurriculum from "./pagesComp/ProgrammeCurriculum";

const SideBarLink = [
    {name: "Our Identity" , link : "/overview"},
    {name: "Leadership" , link : ""},
    {name: "Governance" , link : ""},
    {name: "Recognition and Approvals" , link : ""},
    {name: "Awards and Rankings" , link : ""},
    {name: "Institution Social Responsibility" , link : ""}
]

const Home = () => {
    return (
        <>
        <div className="bg-gray-100">
        <Header 
            bgKey="BG9"
            title={"Programme Curriculum"} 
            buttonType={"link"} 
            buttonText="Apply Now" 
            buttonLink="" 
            gradient={"bg-gradient-to-r from-black to-white/"} 
        />
            <section className="w-full max-w-[1400px] mx-auto grid grid-cols-12 py-20 max-sm:py-2 gap-10 px-2 max-sm:gap-2">
                <div className="col-span-9 max-xl:col-span-8 max-lg:col-span-12">
                    <ProgrammeCurriculum />
                </div>
                <div className="col-span-3 max-xl:col-span-4 max-lg:col-span-12">
                    <SideBar title={"About Us"} LinkList={SideBarLink} />
                </div>
            </section>
        </div>
        </>
    )
}


export default Home;