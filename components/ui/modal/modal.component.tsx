import { useRef } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  children: any;
  onClose: any;
  title: string;
  open: boolean;
}

const Modal = ({ children, title, open, onClose }: ModalProps): JSX.Element => {
  const modalRef = useRef(null);

  return (
    <>
      {open &&
        ReactDOM.createPortal(
          <div >
            <div  ref={modalRef}>
              <div >
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
