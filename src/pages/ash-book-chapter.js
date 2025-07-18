import Header from "@/Components/Header";
import ASHBookChapter from "./pagesComp/ASHBookChapter";

const Button = {
    name: "Apply Now",
    Link: "",
};

const Home = () => {
    return (
        <>
            <div className="bg-gray-100">
                <Header title={"AS&H Book Chapter"} Button={Button} gradient={"bg-gradient-to-r from-blue-900 to-blue-900/40"} />
                <section className="w-full max-w-[1400px] mx-auto">
                    <div className="">
                        <ASHBookChapter />
                    </div>
                </section>
            </div>
        </>
    )
}


export default Home;