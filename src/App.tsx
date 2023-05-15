import "./App.css";
import RoutePages from "./RoutePages";
import useConsole from "./hooks/useConsole";
import { useStrapi } from "./providers/StrapiProvider";

const client = import.meta.env.VITE_APP_NAME;
function App() {
  useConsole();
  const { strapiData, strapiLoading, strapiError } = useStrapi();

  if (strapiLoading) return <div>Loading...</div>;

  if (strapiError)
    return (
      <div>
        <p>Error From Strapi</p>
        <p>{strapiError}</p>
      </div>
    );

  return (
    <>
      <RoutePages />
      <footer></footer>
    </>
  );
}

export default App;
