import "./App.css"
import { useEffect, useState } from "react"



export const App = () => {
  const [newJoke, setNewJoke] = useState("")

  return (
    <div className="app-container">
      <div className="app-heading">
        <h1 className="app-heading-text">Chuckle Checklist</h1>
      </div>
      <div className="joke-add-form">
        <input
          className="joke-input"
          type="text"
          placeholder="New One Liner"
          onChange={(event) => {
            setNewJoke(event.target.value)
          }}
        />
      </div>
      
      
    </div>
  )
}
