import { makeStyles } from '@material-ui/core';
import { useRef } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  children: any;
  onClose: any;
  title: string;
  open: boolean;
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    background: 'var(--color-bg)',
    inset: '0',
    padding: '100px 0',
    overflowY: 'auto',
  },
  modal: {
    margin: '0 auto',
    maxWidth: '700px',
    background: 'var(--color-main)',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const Modal = ({ children, title, open, onClose }: ModalProps): JSX.Element => {
  const classes = useStyles();
  const modalRef = useRef(null);

  return (
    <>
      {open &&
        ReactDOM.createPortal(
          <div className={classes.root}>
            <div className={classes.modal} ref={modalRef}>
              <div className={classes.header}>
                <h2>{title}</h2>
                <button onClick={onClose}>close</button>
              </div>
              <div>{children}</div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
};

export default Modal;
