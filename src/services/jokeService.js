export const saveJoke = async (jokeText) => {

  if (jokeText !== "") {
    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text: jokeText,
        told: false
      })
    }

    await fetch("http://localhost:8088/jokes", postOptions)
  }
}

export const editJoke = async (joke) => {
    const putOptions = {
        method: "PUT",
        headers: { 
            "Content-Type": "application/json" 
        },
        body: JSON.stringify({
            ...joke,
            told: !joke.told
        })
    }
    await fetch(`http://localhost:8088/jokes/${joke.id}`, putOptions)
}

export const deleteJoke = async (jokeId) => {
    await fetch(`http://localhost:8088/jokes/${jokeId}`, {
        method : "DELETE"
    })
}

export const getAllJokes = () => {
    return fetch(`http://localhost:8088/jokes`).then(res => res.json())
}