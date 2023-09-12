async function getApiData() {
  try {
    const request = await fetch('http://localhost:3000/planetas')
    const data = await request.json()

    return data
  } catch (error) {
    console.log(error)
  }
}

export default getApiData()
