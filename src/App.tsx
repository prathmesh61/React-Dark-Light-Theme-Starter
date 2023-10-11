import DarkModeToggle from "./components/common/DarkModeToggle";

function App() {
  return (
    <div className="w-screen h-screen">
      <DarkModeToggle />
      <h1>React Dark & Light Theme Starter Code</h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
