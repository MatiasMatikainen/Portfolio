import "./styles.css";
import Navbar from "./components/navbar";
import Koti from "./components/koti";
import Osaaminen from "./components/osaaminen";
import Projektit from "./components/projektit";
import Yhteystiedot from "./components/yhteystiedot";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Koti />
        <Osaaminen />
        <Projektit />
        <Yhteystiedot />
      </main>
    </>
  );
}

export default App;