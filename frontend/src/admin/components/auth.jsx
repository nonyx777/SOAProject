import {
  Card,
  Group,
  Image,
  Text,
  Divider,
  TextInput,
  Button,
} from "@mantine/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Auth() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("http://0.0.0.0:8002/login/", {
        username,
        password,
      });

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        navigate("/admin");
      }
    } catch (error) {
      setError("Invalid username or password");
    } finally {
      setLoading(false);
    }
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
              <Text fw={900}>Artiology</Text>
            </Group>
            <Text size="lg" fw={900}>
              LOGIN
            </Text>
          </Group>
          <Divider my="md"></Divider>
          <TextInput
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            mb="sm"
            type="text"
            label={
              <Text size="sm" color="dimmed" fw={900}>
                Username
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
          {error && <Text color="red">{error}</Text>}
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