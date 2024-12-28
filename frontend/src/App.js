import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import "./App.css";
import { Volunteers } from "./features/volunteer/Volunteers";
import { SingleVolunteer } from "./features/volunteer/SingleVolunteer";
import { Events } from "./features/event/Events";
import { SingleEvent } from "./features/event/SingleEvent";
import { AddUpdateVolunteer } from "./components/AddUpdateVolunteer";
import { AddUpdateEvent } from "./components/AddUpdateEvent";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <h1>VOLUNTEER MANAGEMENT</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Volunteers />} />
        <Route path="/volunteer/:id" element={<SingleVolunteer />} />
        <Route path="/events" element={<Events />} />
        <Route path="/event/:id" element={<SingleEvent />} />
        <Route path="/addVolunteer" element={<AddUpdateVolunteer />} />
        <Route path="/addEvent" element={<AddUpdateEvent />} />
        <Route path="/volunteer/edit/:id" element={<AddUpdateVolunteer />} />
        <Route path="/event/edit/:id" element={<AddUpdateEvent />} />
      </Routes>
      <Footer/>
    </div>
  );
}