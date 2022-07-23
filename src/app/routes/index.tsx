import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageExample from "../pages/page-example";

export default function RoutingSystem() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageExample />} />
      </Routes>
    </BrowserRouter>
  );
}
