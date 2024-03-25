import "./App.css";
import { Header } from "./components/header";
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
