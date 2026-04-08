import { HeadProvider } from "react-head";
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from "./routers/router";

function App() {

  return (
    <HeadProvider>
      <RouterProvider router={router} />
    </HeadProvider>
  )
}

export default App
