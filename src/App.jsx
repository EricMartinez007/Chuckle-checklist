import "./App.css"
import { useState, useEffect } from "react"
import { getAllJokes, saveJoke, editJoke, deleteJoke } from "./services/jokeService"


export const App = () => {
  const [newJoke, setNewJoke] = useState("")
  const [allJokes, setAllJokes] = useState([])
  const [untoldJokes, setUntoldJokes] = useState([])
  const [toldJokes, setToldJokes] = useState([])


  const getJokes = () => {
    getAllJokes().then(jokesArray => {
      setAllJokes(jokesArray)
      setUntoldJokes(jokesArray.filter(joke => joke.told === false))
      setToldJokes(jokesArray.filter(joke => joke.told === true))
      console.log("jokes set!")
  })
  }

  useEffect(() => {
    getJokes()
  }, []) // Only runs on initial render of component

  return (
    <div className="app-container">
      <div className="app-heading">
        <h1 className="app-heading-text">Chuckle Checklist</h1>
      </div>
      <div>
        <h2>Add Joke</h2>
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
          onClick={async () => {
            await saveJoke(newJoke)
            setNewJoke("")
            getJokes()
          }}
        >
          Add Joke
        </button>
      </div>
      <div className="joke-lists-container">
        <div className="joke-list-container">
          <h2>Untold <span className="untold-count">{untoldJokes.length}</span></h2>
              <ul>
                {untoldJokes.map(joke => (
                  <li className="joke-list-item" key={joke.id}>
                    <p className="joke-list-item-text">{joke.text}</p>
                    <div>
                      <button 
                        className="joke-list-action-delete"
                        onClick={async () => {
                          await deleteJoke(joke.id)
                          getJokes()
                        }}
                      >
                        Delete
                      </button>
                    </div>
                    <div>
                      <button
                        className="joke-list-action-toggle"
                        onClick={async () => {
                          await editJoke(joke)
                          getJokes()
                        }}
                      >
                        Add to Told
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
        </div>
        <div className="joke-list-container">
          <h2>Told<span className="told-count">{toldJokes.length}</span></h2>
              <ul>
                {toldJokes.map(joke => (
                  <li className="joke-list-item" key={joke.id}>
                    <p className="joke-list-item-text">{joke.text}</p>
                    <div>
                      <button 
                        className="joke-list-action-delete"
                        onClick={async () => {
                          await deleteJoke(joke.id)
                          getJokes()
                        }}
                      >
                        Delete
                      </button>
                    </div>
                    <div>
                      <button
                        className="joke-list-action-toggle"
                        onClick={async () => {
                          await editJoke(joke)
                          getJokes()
                        }}
                      >
                        Add to Untold
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
        </div>
      </div>
      
    </div>
  )
}
