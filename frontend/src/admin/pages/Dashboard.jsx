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
        <h1 style={{ marginLeft: "25px" }}>Art Auction</h1>
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
          Create Art Auction
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <AdminAuctionCard />
        <AdminAuctionCard />
        <AdminAuctionCard />
        <AdminAuctionCard />
      </div>

      <CreateModal opened={opened} close={close} />
    </>
  );
};

export default Dashboard;
