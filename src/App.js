import "primereact/resources/themes/saga-blue/theme.css"; // This imports theme.css from primereact themes module
import "primereact/resources/primereact.min.css"; // This imports primereact main css
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";

import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Home></Home>
    </div>
  );
}

export default App;
