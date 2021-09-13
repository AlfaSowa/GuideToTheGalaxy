import {
  ReactNode,
  useRef,
} from 'react';
import ReactDOM from 'react-dom';
import styles from './popover.module.scss';

interface DropdownProps {
  onClose: () => void;
  open: boolean;
  children: ReactNode;
  anchorEl: HTMLDivElement
}

const Popover = ({
  onClose, open, children, anchorEl,
}: DropdownProps): JSX.Element => {
  const dropDownRef = useRef(null);

  console.log('dropDownRef', dropDownRef);

  return (
    <>
      {open && ReactDOM.createPortal(
        <div
          className={styles.root}
          // style={{ top: 0, left: 0, transform: `translate3d(${anchorEl.offsetLeft - dropDownRef.current.clientWidth}px, ${anchorEl.offsetTop}px, 0px)` }}
          ref={dropDownRef}
        >
          <div>{children}</div>
        </div>,
        document.body,
      )}
    </>
  );
};

export default Popover;
