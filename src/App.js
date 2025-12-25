import Header from "./Header";
import Menu from "./Menu";
import logo from "./logoo.svg";
import "./TagButtonStyle.css";

const list = [
  { id: 1, title: "Home" },
  { id: 2, title: "About" },
  { id: 3, title: "Contact" },
];

function App() {
  return (
    <div className="page">
      <div className="mainBox">
        <Header logo={logo} />
        <Menu items={list} />
      </div>
    </div>
  );
}

export default App;
