import { Route } from "react-router";
import { Routes } from "react-router";
import Home from "../views/app/home";
import Page404 from "../views/404";
import AppLayout from "../layouts/app.layout";
import Notes from "../views/app/Notes";
import AddNotes from "../views/app/add_note.tsx";

export default function AppRouters() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/notes/add" element={<AddNotes />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
}
