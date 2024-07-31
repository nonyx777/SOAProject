import React, { useState, useEffect } from "react";
import { Badge, Button, Card, Group, Image, Text, Divider, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { MoreModal } from "../admin/components/MoreModal";
import { getProducts } from "../api/product";

const ArtAuction = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch all products when component mounts
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
      } catch (error) {
        console.error("Failed to fetch products data", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "30px 0",
      }}
    >
      <div className="art-auction">
        {products.map((product) => (
          <Card key={product.id} style={{ marginBottom: '20px' }}>
            <Image src={product.image} alt={product.name} className="art-auction-img" />
            <div className="art-auction-text">
              <div className="art-auction-text-container">
                <h3>{product.name}</h3>
                <h3>
                  <span>{product.price} ETB</span>
                </h3>
              </div>
              <div className="art-auction-text-container2">
                <h3>
                  <span>{product.amount_left} in stock</span>
                </h3>
                <div>
                  <Badge color="green">{product.is_up_for_auction ? "Up for Auction" : "Fixed Price"}</Badge>
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
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ArtAuction;