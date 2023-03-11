import { useState } from "react"
import {BrowserRouter as Router, Switch, Routes, Route, BrowserRouter} from "react-router-dom"


function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
