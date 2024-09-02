"use client";
import { Button, Modal } from "@/components";
import React, { useState } from "react";

function Menu() {
  const [active, setActive] = useState(false);

  return (
    <div style={{ width: "100%" }}>
      <Button onClick={() => setActive(!active)}>Open modal</Button>

      <Modal active={active} setActive={setActive}>
        <p style={{ color: "black" }}>{`active: ${active}`}</p>
      </Modal>
    </div>
  );
}

export default Menu;
