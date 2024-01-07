import "./App.css";

import { Card, Image, Text, Badge, Button, Group, Modal } from "@mantine/core";
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";

import { useDisclosure } from "@mantine/hooks";

function BuyButton({ onClick }: { onClick?: React.MouseEventHandler }) {
  const [opened, { open, close }] = useDisclosure(false);

  const handleClick: React.MouseEventHandler = (e) => {
    onClick?.(e);

    open();
  };

  return (
    <>
      <Modal opened={opened} onClose={close} title="Book now" size="lg">
        <Text color="blue">Are you sure you want to buy this tour?</Text>
        <Group mt="md" mb="xs" justify="flex-end">
          <Button onClick={close}>Cancel</Button>
          <Button onClick={close}>Buy</Button>
        </Group>
      </Modal>
      <Button onClick={handleClick}>Book now</Button>
    </>
  );
}

function DemoCard() {
  return (
    <Card withBorder component={Link} to="/norway-fjord-adventures" maw={300}>
      <Card.Section>
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Norway Fjord Adventures</Text>
        <Badge color="pink">On Sale</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        Explore the magical fjord landscapes with tours and activities on and
        around the fjords of Norway
      </Text>
      <Group justify="flex-end" pt="xs">
        <BuyButton
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        />
      </Group>
    </Card>
  );
}

function Details() {
  return (
    <>
      <h1>Norway Fjord Adventures</h1>
      <Link to="/">Back</Link>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <DemoCard />,
  },
  {
    path: "/norway-fjord-adventures",
    element: <Details />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
