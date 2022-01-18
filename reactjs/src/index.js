import React from "react"
import ReactDom from "react-dom"
import Button from './Button'
import "./styles.css"

function soma (a, b) {
    alert (a + b )
}

function App() {
    return(
        <div className="App">
            Hello World
            <Button onClick={() => soma(10, 20)} name="Jonas Cruz" />
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)