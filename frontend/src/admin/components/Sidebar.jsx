/* eslint-disable react/prop-types */
import {
  AppShell,
  Burger,
  Group,
  ScrollArea,
  Button,
  ActionIcon,
  Avatar,
  Divider,
  Text,
  Badge,
  Image,
} from "@mantine/core";
import { IconLogout } from "@tabler/icons-react";

import { routes } from "./routes";

import { useDisclosure } from "@mantine/hooks";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../../assets/react.svg";
export default function Sidebar({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 280,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="sm"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <div
            className="left"
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <Burger
              color={mobileOpened ? "grey" : "#248232"}
              opened={mobileOpened}
              onClick={toggleMobile}
              hiddenFrom="sm"
              size="sm"
            />
            <Burger
              color={desktopOpened ? "grey" : "#248232"}
              opened={desktopOpened}
              onClick={toggleDesktop}
              visibleFrom="sm"
              size="sm"
            />
            <Image h="30px" w="30px" src="/vite.svg" />
            <Text size="xl" fw={900} color="#14213D">
              <span style={{ color: "#008AF7" }}>Art</span> Auction
            </Text>
          </div>
          <div className="right" style={{ display: "flex", gap: "10px" }}>
            <Badge radius="xl" color="#14213D" size="lg">
              0.1.0
            </Badge>
            <Badge radius="xl" color="#008AF7" size="lg">
              alpha release
            </Badge>
          </div>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md" px="0">
        <AppShell.Section grow component={ScrollArea}>
          {routes.map((route, index) => (
            <Button
              leftSection={route.icon}
              my="9px"
              pl="lg"
              size="lg"
              style={{
                backgroundColor:
                  location.pathname === `/admin${route.path}`
                    ? "#95c8f5"
                    : null,
                color: "#14213D",
                border:
                  location.pathname === `/admin${route.path}`
                    ? "2px solid #008AF7"
                    : null,
                width: "90%",
                marginLeft: "5%",
                borderRadius: "5px",
                fontSize: "16px",
              }}
              variant={
                location.pathname === `/admin${route.path}`
                  ? "filled"
                  : "transparent"
              }
              onClick={() => navigate(`/admin${route.path}`)}
              key={index}
              justify="flex-start"
            >
              {route.name}
            </Button>
          ))}
        </AppShell.Section>
        <AppShell.Section px="sm">
          <Divider my="md" />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              className="title"
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <Avatar
                variant="filled"
                radius="sm"
                size="lg"
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
              />
              <div className="content">
                <span>Betemariam</span>
                <Text color="dimmed" variant="light" size="xs">
                  System Admin
                </Text>
              </div>
            </div>
            <ActionIcon
              color="red"
              variant="light"
              size="xl"
              loaderProps={{ type: "dots" }}
            >
              <IconLogout />
            </ActionIcon>
          </div>
        </AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
