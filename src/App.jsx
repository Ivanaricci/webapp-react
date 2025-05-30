import DefaultLayout from "./layouts/DefaultLayout"
import { BrowserRouter, Routes, Route } from "react-router-dom"




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<h1>HomePage</h1>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
