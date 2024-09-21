import '@mantine/core/styles.css';
import '@mantine/code-highlight/styles.css';
import '@mantine/dates/styles.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { RouterProvider } from "react-router-dom";

import { AppShell, Burger, Group, localStorageColorSchemeManager, MantineProvider } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import ThemePicker from './components/ThemePicker/ThemePicker';
import Navbar from './components/Navbar/Navbar';
import { Router } from './components/Router/Router';

const colorSchemeManager = localStorageColorSchemeManager({
  key: 'my-app-color-scheme',
});



export default function App() {
  const [opened, {toggle}] = useDisclosure();

  return (
    <MantineProvider colorSchemeManager={colorSchemeManager} defaultColorScheme="dark">
      <AppShell
        header={{ height: 60 }}
        navbar={{
            width: 300,
            breakpoint: 'sm',
            collapsed: {mobile: !opened},
        }}
        padding="md"
      >
        <AppShell.Header>
          <Group h="100%" px="md">
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <ThemePicker/>
          </Group>
        </AppShell.Header>
        <Navbar/>
        <AppShell.Main>
          <RouterProvider router={Router}/>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}