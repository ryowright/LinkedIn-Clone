import Home from './home/home';
import MyNetwork from './network/network';
import Jobs from './jobs/jobs';
import Messaging from './messaging/messaging';
import Notifications from './notifications/notifications';
import {
  Route,
  Routes
} from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from './navbar/navbar';
import SignInPage from './authentication/signin';
import SignUpPage from './authentication/signup';

const theme = createTheme({
  typography: {
    link: {
      color: 'blue',
      TextDecoration: 'none'
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="mynetwork" element={<MyNetwork />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="messaging" element={<Messaging />} />
          <Route path="notifications" element={<Notifications />} />
        </Routes>
        {/* <SignInPage /> */}
        {/* <SignUpPage /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
