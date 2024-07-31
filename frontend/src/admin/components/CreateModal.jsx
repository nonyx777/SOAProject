import React, { useState } from "react";
import {
  Modal,
  Button,
  TextInput,
  FileInput,
  Textarea,
  Select,
} from "@mantine/core";
import {
  IconId,
  IconUpload,
} from "@tabler/icons-react";
import { createProduct } from "../../api/product";

export function CreateModal({ opened, close }) {
  const [artName, setArtName] = useState("");
  const [artPrice, setArtPrice] = useState("");
  const [artDescription, setArtDescription] = useState("");
  const [artUrl, setArtUrl] = useState("");
  const [artStat, setArtStat] = useState(true);
  const [amountLeft, setAmountLeft] = useState(0);

  const handleCreateProduct = async () => {
    try {
      // Prepare data as JSON
      const productData = {
        name: artName,
        description: artDescription,
        image: artUrl, // Use filename or default string
        price: parseFloat(artPrice), // Ensure float
        amount_left: parseInt(amountLeft, 10), // Ensure integer
        is_up_for_auction: artStat,
      };

      // Debugging: log productData
      console.log('Creating Product:', productData);

      // Call createProduct with individual arguments
      await createProduct(
        productData.name,
        productData.description,
        productData.image,
        productData.price,
        productData.amount_left,
        productData.is_up_for_auction
      );

      // Close the modal after successful creation
      close();
    } catch (error) {
      // Handle errors in product creation
      console.error('Failed to create product:', error);
    }
  };


  return (
    <>
      <Modal
        size={"lg"}
        opened={opened}
        onClose={close}
        title={
          <h1
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#008AF7",
            }}
          >
            Create Art Auction
          </h1>
        }
        style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        centered
      >
        <TextInput
          rightSectionPointerEvents="none"
          rightSection={<IconId />}
          label={<p style={{}}>Art Name</p>}
          placeholder="Your Art Name"
          style={{ borderRadius: "5px", padding: "10px" }}
          size="md"
          value={artName}
          onChange={(e) => setArtName(e.target.value)}
        />
        <TextInput
          rightSectionPointerEvents="none"
          rightSection={<IconId />}
          label={<p style={{}}>Image Url</p>}
          placeholder="Image Url"
          style={{ borderRadius: "5px", padding: "10px" }}
          size="md"
          value={artUrl}
          onChange={(e) => setArtUrl(e.target.value)}
        />
        <Textarea
          rightSectionPointerEvents="none"
          rightSection={<IconId />}
          label={<p style={{}}>Art Description</p>}
          placeholder="Your Art Description "
          style={{ borderRadius: "5px", padding: "10px" }}
          size="md"
          value={artDescription}
          onChange={(e) => setArtDescription(e.target.value)}
        />
        <TextInput
          rightSectionPointerEvents="none"
          rightSection={<IconId />}
          label={<p style={{}}>Art Price</p>}
          placeholder="Your Art Price"
          style={{ borderRadius: "5px", padding: "10px" }}
          size="md"
          value={artPrice}
          onChange={(e) => setArtPrice(e.target.value)}
        />
        <TextInput
          rightSectionPointerEvents="none"
          rightSection={<IconId />}
          label={<p style={{}}>Amount Left</p>}
          placeholder="10"
          style={{ borderRadius: "5px", padding: "10px" }}
          size="md"
          value={amountLeft}
          onChange={(e) => setAmountLeft(e.target.value)}
        />
        <Select
          label="Is Up For Auction"
          placeholder="Yes"
          data={["Yes", "No"]}
          allowDeselect={false}
          defaultValue={"Yes"}
          onChange={(value) => setArtStat(value === "Yes")}
          style={{ borderRadius: "5px", padding: "10px", marginBottom: "10px" }}
          size="md"
        />
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="light"
            style={{
              marginRight: "10px",
              color: "#008AF7",
              borderColor: "#008AF7",
              backgroundColor: "white",
            }}
            onClick={close}
          >
            Cancel
          </Button>
          <Button
            variant="solid"
            onClick={handleCreateProduct}
            style={{ backgroundColor: "#008AF7" }}
          >
            Create
          </Button>
        </div>
      </Modal>
    </>
  );
}