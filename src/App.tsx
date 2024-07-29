import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainPage from './pages/MainPage'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Gallery from './pages/Gallery'
import Fees from './pages/Fees'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/fees',
    element: <Fees />,
  },
  {
    path: '/Gallery/:id',
    element: <Gallery />,
  },

])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
