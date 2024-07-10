import { Header } from "./components/Header";
import "./index.css";
import { Menu } from "./components/Menu";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
