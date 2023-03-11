import { useState } from "react"
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom"
import Chat from "@/components/chat"

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
