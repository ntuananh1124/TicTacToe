import { routes } from "../../routes";
import { useRoutes } from "react-router-dom";

export default function AllRoutes() {
    const element = useRoutes(routes)
    return (
        <>{element}</>
    )
}