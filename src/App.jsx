import RightMenuBar from "./components/rightmenubar/RightMenuBar";
import SideBar from "./components/sidebar/SideBar";
import Slider from "./components/slider/Slider";

export default function App() {

  return (
    <div className="flex bg-[#f0f0f6]">
      <SideBar />
      <Slider />
      <RightMenuBar />
    </div>
  )
}