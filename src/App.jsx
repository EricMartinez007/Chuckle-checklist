import "./App.css"
import { useState } from "react"
import { saveJoke } from "./services/jokeService"



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
          value={newJoke}
          onChange={(event) => {
            setNewJoke(event.target.value)
          }}
        />
        <button 
          className="joke-input-submit"
          onClick={() => {
            saveJoke(newJoke)
          }}
        >
          Add Joke
        </button>
      </div>
      
      
    </div>
  )
}
