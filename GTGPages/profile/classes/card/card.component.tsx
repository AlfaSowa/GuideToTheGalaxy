import { useState } from 'react';
import Link from 'next/link';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import styles from './card.module.scss';
import {
  ArmorEnum,
  WeaponEnum,
} from '../../../../interfaces/classes';

const ProfileClassesCard = ({ item }:any): JSX.Element => {
  const [isShowDropdown, setIsShowDropdown] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsShowDropdown(!isShowDropdown);
  };

  return (
    <Link href={`/profile/classes/${item.alias}`}>
      <a className={styles.card}>
        <div className={styles.card__border}>
          <div className={styles.card__inner}>
            <h5>{item.name}</h5>

            <div className={styles.card__content}>
              <div className={styles.info}>
                <div className={styles.info__title}>Доспехи</div>
                {item.armor.map((i) => (
                  <span className={styles.info__text}>{ArmorEnum[i]}</span>
                ))}
              </div>

              <div className={styles.info}>
                <div className={styles.info__title}>Оружие</div>
                {item.weapon.map((i) => (
                  <span className={styles.info__text}>{WeaponEnum[i]}</span>
                ))}
              </div>
            </div>

            <div className={styles.card__bottom}>
              <FavoriteIcon />
              <span>{`1к${item.hits}`}</span>
            </div>

          </div>
        </div>

        <div className={styles.options}>
          <button onClick={handleClick} className={styles.options__btn} type='button'>
            <MoreVertIcon />
          </button>

          {isShowDropdown && (
            <div className={styles.options__dropdown}>
              <div>12312313123</div>
              <div>12312313123</div>
              <div>12312313123</div>
              <div>12312313123</div>
              <div>12312313123</div>
              <div>12312313123</div>
            </div>
          )}

        </div>
      </a>
    </Link>
  );
};

export default ProfileClassesCard;
