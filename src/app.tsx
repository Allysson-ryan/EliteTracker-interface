import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import { MantineProvider } from '@mantine/core';
import { RouterProvider } from 'react-router-dom';
import { UserProvider } from './hooks/use-User';
import { router } from './routes';

export function App() {
  return (
    <UserProvider>
      <MantineProvider defaultColorScheme="dark">
        <RouterProvider router={router} />
      </MantineProvider>
    </UserProvider>
  );
}
