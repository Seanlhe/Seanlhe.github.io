import HomePage from '../pages/homepage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Provider } from './provider'
import PageLayout from '@/components/ui/PageLayout'
import HomehelpyPage from '@/pages/HomehelpyPage'
import OptistaffPage from '@/pages/OptistaffPage'
import CentsiblePage from '@/pages/CentsiblePage'

function App() {

  return (
    <>
      <Provider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PageLayout/>}>
              <Route index element={<HomePage/>}/>
              <Route path="/homehelpy" element={<HomehelpyPage/>}/>
              <Route path="/optistaff" element={<OptistaffPage/>}/>
              <Route path="/centsible" element={<CentsiblePage/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
