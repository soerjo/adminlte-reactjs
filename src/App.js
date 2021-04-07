import Contents from "./components/Contents";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <SideMenu />
      <Contents />
      <Footer />
    </div>
  );
}

export default App;
