import "./App.css";
import Firstpage from "./pages/firstPage/firstpage";
import Howpage from "./pages/howPage/howpage";
import Select1 from "./pages/selectP1/select1";
import Select2 from "./pages/selectP2/select2";
import Gameplay from "./pages/gameplay/gameplay";
import Character from "./pages/selectP1/character";
import Character2 from "./pages/selectP2/character2";

function App() {
  return (
    <div>
      <Firstpage />
      <Howpage />
      <Character />
      <Character2 />
      {/* <Select1 />
      <Select2 />
      <Gameplay /> */}
    </div>
  );
}

export default App;
