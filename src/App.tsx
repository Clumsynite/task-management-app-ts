import TaskManagement from "src/components/TaskManagement";
import Nav from "./components/Nav";
import { gradients } from "./utility/helper";
import { useAppSelector } from "./hooks";

const App = () => {
  const darkMode = useAppSelector((state) => state.dakrMode.value);

  const bgGradient = darkMode ? gradients.dark : gradients.light;

  return (
    <main
      id="App"
      className={`${darkMode ? "dark" : ""} max-w-screen min-h-screen text-foreground bg-background transition-all `}
      style={{
        background: `linear-gradient(90deg, ${bgGradient.from}, ${bgGradient.to})`,
      }}
    >
      <Nav />
      <TaskManagement />
    </main>
  );
};

export default App;
