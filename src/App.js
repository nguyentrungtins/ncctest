import "./styles/globals.scss";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import MyFooter from "./components/MyFooter";
function App() {
  return (
    <div className="App">
      <div className="site-wrapper">
        <Navbar />
        <main className="main-wrapper">
          <Content />
          <MyFooter />
        </main>
      </div>
    </div>
  );
}

export default App;
