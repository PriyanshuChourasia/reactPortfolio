export interface IAppRouteInterface{
    path:string;
    element:JSX.Element;
    errorElement:JSX.Element;
    isHeader:boolean;
    icon?:JSX.Element;    /**This ? mark states that this is option parameter */
    children?:IRouteChildrenInterface[]
}




export interface IRouteChildrenInterface{
    path:string;
    element:JSX.Element;
    errorElement:JSX.Element;
    isHeader:boolean;
    icon?:JSX.Element
}