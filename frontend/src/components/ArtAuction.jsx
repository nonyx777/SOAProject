import React from "react";
import { Badge, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { MoreModal } from "../admin/components/MoreModal";

const ArtAuction = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className="art-auction">
      <img src="/inner.png" className="art-auction-img" alt="" />

      <div className="art-auction-text">
        <div className="art-auction-text-container">
          <h3>Art Auction</h3>
          <h3>
            <span>10,000 ETB</span>
          </h3>
        </div>

        <div className="art-auction-text-container2">
          <h3>
            <span>12 in stock</span>
          </h3>
          <div>
            <Badge color="green">Badge</Badge>;
          </div>
        </div>

        <Button
          fullWidth
          size="md"
          style={{ borderRadius: "10px" }}
          onClick={open}
        >
          View More
        </Button>

        <MoreModal opened={opened} close={close} />
      </div>
    </div>
  );
};

export default ArtAuction;
