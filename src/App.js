import "./App.css";
import "./componentes/Statusbar"
import Statusbar from "./componentes/Statusbar";
import Heading from "./componentes/Heading";
import Cards from "./componentes/Cards";
import Sessions from "./componentes/Sessions";
import Weeks from "./componentes/Weeks";
import Box from "./componentes/Box";
import Score from "./componentes/Score";
import Copyright from "./componentes/Copyright";
function App() {
  return (
    <div className="  w-full h-[1465px] bg-black  p-10  flex items-center  justify-center ">
    <div className="  w-[480px] h-full   bg-slate-200 ">
    
    {/* status bar  */}
      <Statusbar/>

    {/* Heading */}
    <Heading/>

    {/* Cadrs */}
    <Cards/>

    {/* Sessions */}
    <Sessions/>

    {/* Weeks */}
    <Weeks/>
  
  {/* score */}
  <Score/>

  {/* Copyright */}
  <Copyright/>
    
      
    </div>
       
    </div>
  );
}

export default App;
