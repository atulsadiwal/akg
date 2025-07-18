import SideBar from "../Components/SideBar";
import ComponentForm from "./Components";

export default function Home() {
  return (
    <div className="flex bg-gray-100">
      <SideBar />
      <div className="pt-10 px-10 overflow-x-auto w-full h-screen">
        <ComponentForm />
      </div>
    </div>
  );
}
