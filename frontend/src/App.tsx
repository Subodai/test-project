import '@mantine/core/styles.css';
import '@mantine/code-highlight/styles.css';
import '@mantine/dates/styles.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { localStorageColorSchemeManager, MantineProvider } from '@mantine/core';
import Main from './pages/Main';

const colorSchemeManager = localStorageColorSchemeManager({
  key: 'my-app-color-scheme',
});


export default function App() {
  return (
    <MantineProvider colorSchemeManager={colorSchemeManager} defaultColorScheme="dark">
      <Main></Main>
    </MantineProvider>
  );
}