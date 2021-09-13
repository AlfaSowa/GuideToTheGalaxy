import clsx from 'clsx';
import { useStore } from 'effector-react';
import Link from 'next/link';
import {
  useRef,
  useState,
} from 'react';
import { $account } from '../../models/account';
import styles from './mini-profile.module.scss';
// import Avatar from '../../public/img/avatar.svg';
import Popover from '../ui/popover/popover.component';

const MiniProfile = (): JSX.Element => {
  const account = useStore($account);
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  console.log('account', account);

  return (
    <>
      {!account && (
        <Link href='/login'>
          <a className={styles.text}>Вход</a>
        </Link>
      )}

      {account && (
        <div
          className={styles.containe}
          ref={containerRef}
        >
          <Link href='/profile'>
            <a className={styles.root}>
              <div className={styles.avatar}>
                {account?.avatar && <div />}
                {!account?.avatar && (
                  <div>
                    {/* <Avatar /> */}
                  </div>
                )}
              </div>

              <span className={clsx(styles.text, 'link-base')}>{account.firstName}</span>
            </a>
          </Link>

          <button
            onClick={() => setOpen(!open)}
            type='button'
          >
            12312
          </button>
        </div>
      )}

      <Popover
        open={open}
        onClose={() => setOpen(false)}
        anchorEl={containerRef.current}
      >
        <div>12312312312</div>
        <div>12312312312</div>
        <div>12312312312</div>
        <div>12312312312</div>
      </Popover>
    </>
  );
};

export default MiniProfile;
