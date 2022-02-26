/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { createPortal } from "react-dom";
import { ReactNode, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./modal.module.scss";

interface ModalProps {
  textHeader?: string;
  children: ReactNode;
  open: boolean;
  onClose: (value: boolean) => void;
}

const Modal = ({
  textHeader,
  children,
  open,
  onClose,
}: ModalProps): JSX.Element => {
  const onOverlayClick = (e) => {
    if (e.target.className === styles.modal) {
      onClose(false);
    }
  };

  useEffect(() => {
    const { userAgent } = window.navigator;

    const reqMacintosh = /Macintosh/i;

    if (open) {
      if (!reqMacintosh.exec(userAgent)) {
        document.body.classList.add("noMac");
      }

      document.body.classList.add("hidden");
    } else {
      document.body.classList.remove("hidden");
      if (document.body.classList.contains("noMac")) {
        document.body.classList.remove("noMac");
      }
    }

    return () => {
      document.body.classList.remove("hidden");
      if (document.body.classList.contains("noMac")) {
        document.body.classList.remove("noMac");
      }
    };
  }, [open]);

  return (
    open &&
    createPortal(
      <div className={styles.root} onClick={onOverlayClick}>
        <div className={styles.container}>
          <div className={styles.inner}>
            <div className={styles.header}>
              <div>{textHeader}</div>

              <button className={styles.btn} onClick={() => onClose(false)}>
                <CloseIcon />
              </button>
            </div>

            <div className={styles.content}>{children}</div>
          </div>
        </div>
      </div>,
      document.body
    )
  );
};

Modal.defaultProps = {
  textHeader: null,
};

export default Modal;
