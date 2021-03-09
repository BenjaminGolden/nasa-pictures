export const getSpacePics = () => {

    return fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then(response => response.json())
    .then(parsedResponse => {
       console.log(parsedResponse)
        return parsedResponse;
    })
}