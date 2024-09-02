"use client";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";

import styles from "./Modal.module.scss";

type ModalProps = {
  children: React.ReactNode;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  timeoutDelay?: number;
  className?: string;
};

const Modal: React.FC<ModalProps> = ({
  children,
  active,
  setActive,
  timeoutDelay = 300,
  className,
}) => {
  const [visible, setVisible] = useState(false);

  const closeModal = () => {
    setVisible(false);
    setTimeout(() => {
      setActive(false);
    }, timeoutDelay);
  };

  useEffect(() => {
    if (active) setVisible(true);
  }, [active]);

  useEffect(() => {
    const handlePressESC = (event: { code: string }) => {
      if (event.code === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handlePressESC);

    return () => {
      window.removeEventListener("keydown", handlePressESC);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onBackDropClick = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    event.stopPropagation();
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  if (!active) return null;

  const modal = (
    <div
      onClick={onBackDropClick}
      className={clsx(styles.backdrop, {
        [styles.visible]: visible,
      })}>
      <div className={clsx(styles.modal, className)}>
        <button className={styles.closeBtn} onClick={closeModal}>
          X
        </button>
        {children}
      </div>
    </div>
  );
  return createPortal(modal, document.body);
};

export default Modal;
