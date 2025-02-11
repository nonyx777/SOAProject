import React from "react";
import { Text, Button, Container } from "@mantine/core";

import { useDisclosure } from "@mantine/hooks";
import { CreateModal } from "../components/CreateModal";
import AdminAuctionCard from "../components/AdminAuctionCards";

const Dashboard = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1 style={{ marginLeft: "25px" }}>Art Gallery</h1>
        <Button
          size="md"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "25px",
            borderRadius: "10px",
          }}
          onClick={open}
        >
          Create Art
        </Button>
      </div>
      <AdminAuctionCard />


      <CreateModal opened={opened} close={close} />
    </>
  );
};

export default Dashboard;
