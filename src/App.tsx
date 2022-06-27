import UseEffectComponent from "./JHerrington/UseEffectComponent";
import UseStateComponent from "./JHerrington/UseStateComponent";
import UseContextComponent from "./JHerrington/UseContextComponent";
import UseReducerComponent from "./JHerrington/UseReducerComponent";
import UseRefComponent from "./JHerrington/UseRefComponent";
import CustomHookComponent from "./JHerrington/CustomHookComponent";

function App() {
  return (
    <div>
      <h1>useState</h1>
      <UseStateComponent />
      <h1>useEffect</h1>
      <UseEffectComponent />
      <h1>useContext</h1>
      <UseContextComponent />
      <h1>useReducer</h1>
      <UseReducerComponent />
      <h1>useRef</h1>
      <UseRefComponent />
      <h1>CustomHookComponent</h1>
      <CustomHookComponent />
    </div>
  );
}

export default App;
