import { AppShell, Skeleton } from "@mantine/core";

const Navbar = () => {
  return (
    <AppShell.Navbar p="md">
      Navigation
      <a href={`/`}>Main</a>
      <a href={`/home`}>Home</a>
      <a href={`/clicker`}>Clicker</a>
      {Array(10)
        .fill(0)
        .map((_, index) => (
          <Skeleton key={index} h={28} mt="sm" animate={true} />
        ))}
    </AppShell.Navbar>
  );
}

export default Navbar;