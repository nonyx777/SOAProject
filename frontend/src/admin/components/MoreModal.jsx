import { Modal, Button } from "@mantine/core";

export function MoreModal({ opened, close }) {
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
            More Details
          </h1>
        }
        centered
        padding={"md"}
        size="lg"
      >
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/inner.png"
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
            <h1>Art Name</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eius
              perspiciatis consectetur ipsam autem et aspernatur ducimus? Nihil
              laboriosam obcaecati ullam animi ad ratione commodi architecto,
              officiis sapiente culpa ut?
            </p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h1 style={{ color: "#008AF7" }}> 12 in Stock</h1>
              <h1 style={{ color: "#008AF7" }}> 10,000 ETB</h1>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
