import { Home } from '../pages/home';
import { LoginPage } from '../pages/loginPage';
import { SignupPage } from '../pages/signupPage';
import { Add } from '../components/add';
import ProtectedPage from './protected';

const routes = [
    {
        path: "/",
        element: (
            <ProtectedPage needLogin={true}>
                <Home />
            </ProtectedPage>
        )
    },
    {
        path: "/login",
        element: (
            <ProtectedPage guestOnly={true}>
                <LoginPage />
            </ProtectedPage >
        )
    },
    {
        path: "/signup",
        element: (
            <ProtectedPage guestOnly={true}>
                <SignupPage />
            </ProtectedPage >
        )
    },
    {
        path: "/add",
        element: (
            <ProtectedPage needLogin={true}>
                <Add />
            </ProtectedPage >
        )
    }
];

export default routes;