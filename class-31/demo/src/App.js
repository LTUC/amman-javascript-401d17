import './App.css';
import Main from './components/Main';
import ThemeContext from './context/Theme';
import SiteProvider from "./context/Site";
import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <ThemeContext>
        <SiteProvider>
          <Main />
        </SiteProvider>
      </ThemeContext>
    </MantineProvider>
  );
}

export default App;
