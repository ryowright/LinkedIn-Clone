import Home from './home/home';
import ErrorPage from "./error/errorpage";
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from './navbar/navbar';

const theme = createTheme({
  typography: {
    link: {
      color: 'blue',
      TextDecoration: 'none'
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    
  }
])

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <RouterProvider router={router}/>
      </div>
    </ThemeProvider>
  );
}

export default App;
