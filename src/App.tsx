import "./App.css";
import { Header } from "./components/header";
// import { Home } from "./components/home";
import { Route } from "./routes/routes";

function App() {
  return (
    <>
      <div>
        <Header />
        <Route />
      </div>
    </>
  );
}

export default App;
