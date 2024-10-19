import { BrowserRouter, Route, Routes } from "react-router-dom"
import { navigationRoute } from "./RouteNavigation"






const AppRouter = () => {
  return (
    <>
     <BrowserRouter>
     <Routes>
        {
            navigationRoute.map((item,index)=>(
                <Route key={index} path={item.path} element={item.element} errorElement={item.errorElement} />
            ))
        }
     </Routes>
     </BrowserRouter> 
    </>
  )
}

export default AppRouter
