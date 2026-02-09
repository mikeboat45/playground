import "./App.css";
import MovieCard from "./components/MovieCard";

function App() {
  return (
    <>
      <MovieCard movie={{ title: "First movie", release_date: "2024" }} />
      <MovieCard movie={{ title: "Second movie", release_date: "2015" }} />
    </>
  );
}

export default App;
