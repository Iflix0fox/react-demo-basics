import "./App.css";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Card title="CEO" />
      <Card name="maria" />
      <Card age="22" />
      <Footer />
    </>
  );
}

export default App;
