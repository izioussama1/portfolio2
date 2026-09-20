import Footer from "./components/Footer";
import Nav from "./components/Nav";
import About from "./pages/About";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import { useHashRoute } from "./useHashRoute";

export default function App() {
  const route = useHashRoute();

  let page;
  if (route === "/about") {
    page = <About />;
  } else if (route === "/portfolio") {
    page = <Portfolio />;
  } else {
    page = <Home />;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Nav route={route} />
      <main className="flex-1">{page}</main>
      <Footer />
    </div>
  );
}
