import { useState } from "react"

function App() {
  const [count, setcount] = useState<number>(0)
  return (
    <>
      <div>
        the count: {count}
        <button onClick={() => setcount((c) => c + 1)}>Add count</button>
      </div>
    </>
  )
}

export default App
