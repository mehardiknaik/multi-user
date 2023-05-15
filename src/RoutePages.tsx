import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useStrapiData } from "./providers/StrapiProvider";

const Home = lazy(() => import("./pages/Homepage"));
const About = lazy(() => import("./pages/Aboutpage"));
const Setting = lazy(() => import("./pages/Settingpage"));

const RoutePages = () => {
  const { routes } = useStrapiData();
  return (
    <Routes>
      {routes
        .map((e: any) =>
          //@ts-ignore
          RoutesComponents[e.component] ? (
            <Route
              key={e.id}
              path={`/${e.to ? e.to : ""}`}
              element={
                <Suspense fallback={<div>Loading.</div>}>
                  {
                    //@ts-ignore
                    RoutesComponents[e.component]
                  }
                </Suspense>
              }
            />
          ) : null
        )
        .filter(Boolean)}
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
};

const RoutesComponents = {
  Home: <Home />,
  About: <About />,
  Setting: <Setting />,
};

export default RoutePages;
