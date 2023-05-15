import "./App.css";
import useConsole from "./hooks/useConsole";
import { useStrapi } from "./providers/StrapiProvider";
import { Link } from "react-router-dom";
import RoutePages from "./RoutePages";

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

  console.log(strapiData);

  return (
    <>
      <RoutePages />
      <footer>
        {strapiData.routes.map((e: any) => (
          <Link key={e.id} to={`/${e.to ? e.to : ""}`}>
            {e.component}
          </Link>
        ))}
      </footer>
    </>
  );
}

export default App;
