import {
    Card,
    Group,
    Image,
    Text,
    Divider,
    TextInput,
    Button,
  } from "@mantine/core";
  import { useState, useEffect } from "react";
  import { useNavigate } from "react-router-dom";
  
  export default function Auth() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const [loggedIn, setLoggedIn] = useState(false);
  
    const onSubmit = async (e) => {
        setLoggedIn(true);
        navigate("/admin");
    };
  
    return (
      <main
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          style={{
            width: 600,
            minWidth: 400,
            borderTop: "5px solid #008AF7",
          }}
          shadow="sm"
          radius={0}
          padding="lg"
          withBorder
        >
          <form onSubmit={onSubmit}>
            <Group justify="space-between">
              <Group>
                <Image fit="contain" w={50} h={50} src="/vite.svg" alt="logo" />
                <Text fw={900}>Kedemoz</Text>
              </Group>
              <Text size="lg" fw={900}>
                LOGIN
              </Text>
            </Group>
            <Divider my="md"></Divider>
            <TextInput
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              mb="sm"
              type="email"
              label={
                <Text size="sm" color="dimmed" fw={900}>
                  Email
                </Text>
              }
              size="md"
            />
            <TextInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              mb="sm"
              label={
                <Text size="sm" color="dimmed" fw={900}>
                  Password
                </Text>
              }
              type="password"
              size="md"
            />
  
            <Button
              type="submit"
              loading={loading}
              loaderProps={{ color: "white" }}
              color="#008AF7"
              fullWidth
              mt="sm"
              size="md"
            >
              <Text size="sm" fw={900} color="white">
                LOGIN
              </Text>
            </Button>
          </form>
        </Card>
      </main>
    );
  }