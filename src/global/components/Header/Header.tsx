import { HeaderWrapper } from "@/constants/containers/wrapper/HeaderWrapper"
import { navigationRoute } from "@/routes/RouteNavigation"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <HeaderWrapper className="flex bg-transparent fixed">
      {
        navigationRoute.map((item)=>{
           return item?.children && item.children.map((rou,index)=>{
            if(rou.isHeader === true)
            {
                return <Link to={rou.path}>{rou.icon}</Link>
            }
            else return null;
           }) 
        })
      }
      <h1>Header</h1>
    </HeaderWrapper>
  )
}

export default Header
