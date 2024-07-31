import { Modal, Button } from "@mantine/core";

export function MoreModal({ opened, close, product }) {
  return (
    <>
      <Modal
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F1F5F9",
        }}
        opened={opened}
        onClose={close}
        title={
          <h1
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#008AF7",
              marginLeft: "70px",
            }}
          >
            {product.name}
          </h1>
        }
        centered
        padding={"md"}
        size="lg"
      >
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={product.image}
              alt=""
              style={{
                width: "50%",
                height: "auto",
                borderRadius: "20px",
                marginTop: "20px",
              }}
            />
          </div>

          <div style={{ width: "73%", margin: "auto" }}>
            <h1>{product.name}</h1>
            <p>
              {product.description}
            </p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h1 style={{ color: "#008AF7" }}> {product.amount_left} in Stock</h1>
              <h1 style={{ color: "#008AF7" }}> {product.price} ETB</h1>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}