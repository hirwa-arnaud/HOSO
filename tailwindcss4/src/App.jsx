import { Routes,Route } from "react-router"
import Landing from "./pages/Landing";

export default function App() {
  return (
    <div>
   <Routes>
    <Route path="/" element={<Landing />} />
   </Routes>
    </div>
  );
}
