import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Provider store={store}>
      <Router basename="/">
        <ScrollToTop />
        <Routes>
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
