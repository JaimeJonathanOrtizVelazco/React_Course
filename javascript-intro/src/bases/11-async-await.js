const getImagen= async() =>{
    try {
        const apiKey = 'XKt8tKfBCTwinewbTi8Ar85lOMfqDSw6'
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        const {data} = await resp.json()
        const {url} = data.images.original;
        const img = document.createElement('img')
        document.body.append(img)
        img.src = url            
    } catch (error) {
        console.error(error)
    }
}


getImagen()