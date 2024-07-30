import {
  Modal,
  Button,
  TextInput,
  FileInput,
  Textarea,
} from "@mantine/core";
import {
  IconId,
  IconUpload,
} from "@tabler/icons-react";

export function CreateModal({ opened, close }) {
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
          label={<p style={{  }}>Art Name</p>}
          placeholder="Your Art Name"
          style={{ borderRadius: "5px", padding: "10px" }}
          size="md"
        />
        <TextInput
          rightSectionPointerEvents="none"
          rightSection={<IconId />}
          label={<p style={{  }}>Art Price</p>}
          placeholder="Your Art Price"
          style={{ borderRadius: "5px", padding: "10px" }}
          size="md"
        />
        <Textarea
          rightSectionPointerEvents="none"
          rightSection={<IconId />}
          label={<p style={{  }}>Art Description</p>}
          placeholder="Your Art Description "
          style={{ borderRadius: "5px", padding: "10px" }}
          size="md"
        />
        <FileInput
          accept=".svg"
          label={<p style={{  }}>Upload Art </p>}
          placeholder="No Choosen File"
          rightSection={<IconUpload />}
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
            onClick={close}
            style={{ backgroundColor: "#008AF7" }}
          >
            Create
          </Button>
        </div>
      </Modal>
    </>
  );
}
