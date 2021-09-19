import {
  forwardRef,
  LegacyRef,
  ReactNode,
  useCallback,
  useEffect,
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
interface PopoverRefProps {
  children: ReactNode;
}

const PopoverRef = forwardRef(({ children }:PopoverRefProps, ref: LegacyRef<HTMLDivElement>) => {
  return (
    ReactDOM.createPortal(
      <div
        role='dialog'
        aria-modal
        className={styles.root}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '1px',
          height: '1px',
        }}
        ref={ref}
      >
        <div style={{
          position: 'absolute',
          inset: '0px auto auto 0px',
        // transform: `translate3d(${anchorEl.offsetLeft - dropDownRef.current.clientWidth}px, ${anchorEl.offsetTop}px, 0px)`,
        }}
        >
          {children}
        </div>
      </div>,
      document.body,
    )
  );
});

const Popover = ({
  onClose, open, children, anchorEl,
}: DropdownProps): JSX.Element => {
  const dropDownRef = useRef(null);

  console.log('dropDownRef', dropDownRef);

  return (
    <PopoverRef ref={dropDownRef}>{children}</PopoverRef>
  );
};

export default Popover;
