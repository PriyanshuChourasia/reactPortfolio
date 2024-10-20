import { lazy } from "react";
import { AppIcon } from "@/constants/Icons/AppIcons";
import { IAppRouteInterface } from "@/interfaces/RouteInterface/AppRouteInterface";



const HomePage = lazy(()=> import("@/views/home/Home"));
const AboutPage = lazy(()=> import('@/views/about/About'));
const BlogPage  = lazy(()=> import("@/views/blog/Blog"));




export const navigationRoute:IAppRouteInterface[] = [
    /**
     * Routes of SPA
     */
    {
        path:"/",
        element:<HomePage/>,
        errorElement:<div>Error</div>,
        isHeader:true,
        icon: AppIcon.homeIcon
    },
    {
        path:"/about",
        element:<AboutPage/>,
        errorElement:<div>Error</div>,
        isHeader:true,
        icon: AppIcon.aboutIcon
    },
    {
        path:"/blog",
        element:<BlogPage/>,
        errorElement:<div>Error</div>,
        isHeader:true,
        icon:AppIcon.blogIcon
    }
];