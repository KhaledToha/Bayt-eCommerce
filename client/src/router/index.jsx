import { createBrowserRouter } from 'react-router-dom';
import { HomeLayout } from '../layouts';
import { ErrorPage } from '../pages';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout/>,
        errorElement: <ErrorPage/>
    }
])

export default router