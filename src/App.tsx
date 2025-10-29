import Desktop from "./Components/Desktop"
import Taskbar from "./Components/Taskbar"

function App() {

  return (
    <main className="bg-[url('/xp.jpg')] h-screen bg-cover bg-center">
      <Desktop />
      <Taskbar />
    </main>
  )
}

export default App
