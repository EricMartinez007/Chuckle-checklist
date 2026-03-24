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