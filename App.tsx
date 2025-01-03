import Home from "./components/Home"
import Last from "./components/Last"
import Skill from "./components/Skill"
import Zep from "./components/zep"


const App = () => {
  return (
    <main className="mx-auto max-w-7xl overflow-x-hidden antialiased">
      <div className="bg-image fixed inset-0 bg-cover bg-fixed bg-center"></div>
      <div>
        < Home />
        <Skill />
        <Last />
        <Zep />
      </div>
    </main>
  )
}

export default App