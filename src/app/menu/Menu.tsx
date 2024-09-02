"use client";
import React, { useState } from "react";
import { Button, Modal } from "@/components";
import Arrow from "@/components/Icon/Arrow";

function Menu() {
  const [active, setActive] = useState(false);

  return (
    <div style={{ width: "100%" }}>
      <Button onClick={() => setActive(!active)} icon={<Arrow />}>
        Open modal
      </Button>

      <Modal active={active} setActive={setActive}>
        <p style={{ color: "black" }}>{`active: ${active}`}</p>
      </Modal>
    </div>
  );
}

export default Menu;
