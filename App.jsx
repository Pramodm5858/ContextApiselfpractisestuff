
import './App.css'
import NoteState from './Context/NoteState'
import Login from './Login'
import Profile from './Profile'

function App() {


  return (
    <>
      <NoteState>
        <h1>Welcome Pramod</h1>
        <Login />
        <Profile />
      </NoteState>

    </>
  )
}

export default App
