import { createPortal } from 'react-dom';
import {
  ReactNode,
  useEffect,
} from 'react';
import CloseIcon from '@mui/icons-material/Close';
import clsx from 'clsx';
import styles from './modal.module.scss';

interface ModalProps {
  textHeader: string;
  children: ReactNode;
  maxWidth: number;
  open: boolean;
  onClose: any;
}

const Modal = ({
  textHeader,
  children,
  maxWidth,
  open,
  onClose,
}: ModalProps): JSX.Element => {
  useEffect(() => {
    const { userAgent } = window.navigator;

    const reqMacintosh = /Macintosh/i;

    if (open) {
      if (!reqMacintosh.exec(userAgent)) {
        document.body.classList.add('noMac');
      }

      document.body.classList.add('hidden');
    } else {
      document.body.classList.remove('hidden');
      if (document.body.classList.contains('noMac')) {
        document.body.classList.remove('noMac');
      }
    }

    return () => {
      document.body.classList.remove('hidden');
      if (document.body.classList.contains('noMac')) {
        document.body.classList.remove('noMac');
      }
    };
  }, [open]);

  return (
    <>
      {open
				&& createPortal(
				  <div className={styles.modal}>
				    <div
				      className={styles.modal__inner}
				      style={{ maxWidth: `${maxWidth}px` }}
  >
				      <div className={styles.modal__header}>
				        <span>{textHeader}</span>

				        <button
				          className={styles.btn}
				          onClick={() => onClose(false)}
  >
				          <CloseIcon />
  </button>
  </div>

				      <div>{children}</div>
  </div>
  </div>,
				  document.body,
				)}
    </>
  );
};

Modal.defaultProps = {
  textHeader: 'Текст модального окна',
  maxWidth: 500,
};

export default Modal;
