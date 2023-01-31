import { useState } from 'react'

function App() {
    function handler() {
        console.log('ApplicationLoaded')
    }

    document.addEventListener('ApplicationLoaded', handler)

    function handleBtnClick() {
        console.log('ApplicationLoaded Event Fired')
        const event = new Event('ApplicationLoaded')
        document.dispatchEvent(event)
    }
    return (
        <div className="App">
            <button type="button" onClick={handleBtnClick}>
                Fire ApplicationLoaded event
            </button>
        </div>
    )
}

export default App
