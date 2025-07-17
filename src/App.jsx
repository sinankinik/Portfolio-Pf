import Middleside from "./components/middleside/Middleside";
import RightMenuBar from "./components/rightmenubar/RightMenuBar";
import SideBar from "./components/sidebar/SideBar";


export default function App() {

  return (
    <div className="flex bg-[#f0f0f6]">
      <SideBar />
      <Middleside />
      <RightMenuBar />

    </div>
  )
}