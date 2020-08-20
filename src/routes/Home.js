import React from "react"
import { Link } from "react-router-dom"

function Home(){
    return (
        <div class="home">
         <span class="foot">
                K-star
            </span>
            <h1>
                Home
            </h1>
            <Link  class="link" to="/registry">CLICK HERE TO MAKE TODAYS'S TODO LIST</Link>
        </div>
    )
}

export default Home;