import DefaultLayout from "./layouts/DefaultLayout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./assets/pages/HomePage"




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/movies/:id" element={<h1>Dettaglio Film</h1>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
