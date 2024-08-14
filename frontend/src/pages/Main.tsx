import { AppShell, Burger, Group, Skeleton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ThemePicker from "../components/ThemePicker/ThemePicker";

const Main = () => {
  const [opened, {toggle}] = useDisclosure();

  return (
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
      <AppShell.Navbar p="md">
        Navbar
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={28} mt="sm" animate={true} />
          ))}
      </AppShell.Navbar>
      <AppShell.Main>
        Main
      </AppShell.Main>
  </AppShell>
  )
};

export default Main;