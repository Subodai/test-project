import { ActionIcon, Group, Title, useComputedColorScheme, useMantineColorScheme } from "@mantine/core";
import { IconSun, IconMoon } from '@tabler/icons-react';
import cx from 'clsx';
import classes from './Themepicker.module.css';

export default function ThemePicker() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
  return (
    <Group justify="space-between" style={{ flex: 1 }}>
      <Title size="20">Test App</Title>
      <Group ml="xl" gap={0} visibleFrom="sm">
        <ActionIcon
          onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
          variant="default"
          size="lg"
          aria-label="Toggle Colour Scheme"
        >
          <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
          <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
        </ActionIcon>
      </Group>
    </Group>
  );
}