import { Route, Routes } from 'react-router-dom'

import { Main as MainPage } from 'pages/Main'
import { Layout } from 'widgets/Layout'
import './styles/globals.sass'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
      </Route>
    </Routes>
  )
}

export default App
