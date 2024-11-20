import React, { useEffect, useState } from 'react'

function Github() {

  const [gitData, setGitData] = useState([])
  useEffect(() => {
    fetch("https://api.github.com/users/HriteshSaha")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setGitData(data)
    })
    .catch((err)=>{
      console.error(`Error while fwtching data through api ${err}`);
    })
  }, [])
  
  // one way to fetch api and show it
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {gitData.followers || "no data available"}
    <img src={gitData.avatar_url} alt="Git profile picture" />
    <p>Visit my Github profile - {gitData.url}</p>
    </div>
  )
}

export default Github