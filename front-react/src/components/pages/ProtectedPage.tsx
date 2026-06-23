import ErrorPage from "./ErrorPage";
import { useUser } from "../../hooks/useUser";
import type { FC } from "react";
import { Navigate } from "react-router-dom";
import { AppRoutes } from "../../consts/routes";
import LoaderPage from "./LoaderPage";


interface ProtectedPageProps {
    roleName?: string;
    children?: any;
}

export const ProtectedPage: FC<ProtectedPageProps> = ({ roleName = '', children }) => {

    const { user, authChecked } = useUser()

    // useEffect(() => {
        if(authChecked) {
            if( !user ) {
                return <Navigate to={AppRoutes.LOGIN.value} />
            } else if (roleName && roleName.trim() !== ''){
                const roles = user.roles;
                if (!roles) {
                    return <ErrorPage>Нет прав на просмотр этой страницы</ErrorPage>
                }

                console.log('');
                
                if (!(roles.filter(role => role.name.trim().toUpperCase() === roleName.trim().toUpperCase()).length > 0)) {
                    return <ErrorPage>Нет прав на просмотр этой страницы</ErrorPage>
                }
            }
        }
    // }, [user, authChecked]);

    if( !authChecked ){ 
        return (
            <LoaderPage />
        )
    }

    return children
}

export default ProtectedPage