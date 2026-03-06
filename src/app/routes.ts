import { createBrowserRouter } from "react-router";
import { Home } from "./components/Home";
import { TeorikStudent, TeorikEvaluator } from "./components/TeorikSınav";
import { PerformansStudent, PerformansEvaluator } from "./components/PerformansSınav";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/teorik-aday",
    Component: TeorikStudent,
  },
  {
    path: "/teorik-degerlendirici",
    Component: TeorikEvaluator,
  },
  {
    path: "/performans-aday",
    Component: PerformansStudent,
  },
  {
    path: "/performans-degerlendirici",
    Component: PerformansEvaluator,
  },
]);
