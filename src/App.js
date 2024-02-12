import "./App.css";
import Navigation from "./Navigation/BrowserRouter";
import { useState } from "react";
import { Triangle } from "react-loader-spinner";
import { UseSelector, useSelector } from "react-redux";
function App() {
  const [Loading, setLoading] = useState(true);
  const { loader } = useSelector((store) => store.COMMON_REDUCER);
  return (
    <div className="App">
      {loader ? (
        <div className="App-loader">
          <Triangle visible={true} height="140" width="120" color="#ac1111" />
        </div>
      ) : null}
      <Navigation />
    </div>
  );
}

export default App;
