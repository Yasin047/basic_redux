import "./App.css";
import Post from "./components/Post";
import CounterView from "./features/counterApp/CounterView";
import TodoView from "./features/todoSlice/TodoView";
function App() {
  return (
    <div className="App">
      <h1>Counter App</h1>
      <CounterView />
      <TodoView />
      {/* <PostView /> */}
      <Post />
    </div>
  );
}

export default App;
