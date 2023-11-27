// create your App component here


import React, { useEffect, useState } from "react";

function App () {

const [dogPic, setDogPic] = useState('')

console.log(dogPic)

    useEffect(() => {
        fetch ('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => {
            console.log(data.message)
            setDogPic(data.message)
        })
    }, [])

    if (!dogPic) return <p>Loading...</p>
    else return <img src={dogPic} alt='A Random Dog' />
}


export default App