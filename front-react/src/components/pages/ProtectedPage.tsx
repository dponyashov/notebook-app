import ErrorPage from "./ErrorPage";
import { useUser } from "../../hooks/useUser";
import { ThemedLoader } from "../UI/ThemedLoader";
import LoginPage from "./LoginPage";
import type { FC } from "react";
import { Navigate } from "react-router-dom";


interface ProtectedPageProps {
    roleName?: string;
    children?: any;
}

export const ProtectedPage: FC<ProtectedPageProps> = ({ roleName = '', children }) => {

    const { user, authChecked } = useUser()

    // useEffect(() => {
        if(authChecked) {
            if( !user ) {
                console.log('Go to LoginPage');
                return <Navigate to='/login' />
                
                // return (<LoginPage />)
            } else if (roleName && roleName.trim() !== ''){
                const roles = user.roles;
                if (!roles) {
                    <ErrorPage>Нет прав на просмотр этой страницы</ErrorPage>
                }
                const checkedRoles = roles.find(role => role.name === roleName);
                if (!checkedRoles){
                    <ErrorPage>Нет прав на просмотр этой страницы</ErrorPage>
                }
            }
        }
    // }, [user, authChecked]);

    if( !authChecked || !user ){ 
        return (
            <ThemedLoader />
        )
    }

    return children
}

export default ProtectedPage