import React, { useEffect, useState } from "react";
import { Badge, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { MoreModal } from "../components/MoreModal";
import { getProducts } from "../../api/product";

const AdminAuctionCard = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedProduct, setSelectedProduct] = useState([]);
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
        gap: "20px",
      }}
    >
      {products.map((product) => (
        <div className="art-auction2" key={product.id}>
          <img src={product.image} className="art-auction-img" alt="" />

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
              onClick={() => {
                setSelectedProduct(product);
                open();
              }}
            >
              View More
            </Button>

            <MoreModal opened={opened} close={close} product={selectedProduct} />
          </div>
        </div>
      ))}
    </div>

  );
};

export default AdminAuctionCard;
