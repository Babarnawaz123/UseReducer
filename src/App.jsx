import "./App.css";
import WithOutUseReducer from "./WithOutUseReducer";
import WithReducerHook from "./WithReducerHook";
function App() {
  return (
    <div>
      <h2> WithOut UseReducer</h2>
      <WithOutUseReducer />
      <br /> <hr />
      <h2>With UseReducer</h2>
      <WithReducerHook />
    </div>
  );
}

export default App;
