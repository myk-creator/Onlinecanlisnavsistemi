import { createBrowserRouter } from "react-router";
import { Home } from "./components/Home";
import { TeorikAday } from "./components/TeorikAday";
import { TeorikDegerlendirici } from "./components/TeorikDegerlendirici";
import { PerformansAday } from "./components/PerformansAday";
import { PerformansDegerlendirici } from "./components/PerformansDegerlendirici";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/teorik-aday",
    Component: TeorikAday,
  },
  {
    path: "/teorik-degerlendirici",
    Component: TeorikDegerlendirici,
  },
  {
    path: "/performans-aday",
    Component: PerformansAday,
  },
  {
    path: "/performans-degerlendirici",
    Component: PerformansDegerlendirici,
  },
]);
