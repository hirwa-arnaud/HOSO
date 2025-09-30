import { Routes,Route } from "react-router"
import Landing from "./pages/Landing";
import NewsPage from "./pages/NewsPage";
import ContactPage from "./pages/ContactPage";


export default function App() {
  return (
    <div>
   <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/news" element={<NewsPage />} />
    <Route path="/contact" element={<ContactPage />} />
   </Routes>
    </div>
  );
}
