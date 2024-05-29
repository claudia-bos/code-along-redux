import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

const Landing = () => {
    const [color, setColor] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const lastKnownFavColor = useSelector(state => state.favColor)
    console.log(lastKnownFavColor)

    const submitHandler = e => {
      e.preventDefault()

      // we want to dispatch the current value of 'color' to the store
      //dispatch accepts 1 argument - the action object
      dispatch({ 
        type: 'SET_COLOR',
         payload: color 
        })

      navigate('/home')
    }

    return (
        <form onSubmit={e => submitHandler(e)}>
          <h2>Welcome to the favorite color setter! There's a lot of complex functionality in the app, so read carefully: <br/>Enter your favorite color in the input below and watch the magic!</h2>
            <input
                placeholder="Enter your favorite color"
                onChange={e => setColor(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Landing
