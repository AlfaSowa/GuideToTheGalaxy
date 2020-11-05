import styles from './skeleton.module.sass';

import React, { useState, useEffect } from 'react';

interface Props {
  grid?: boolean;
  value: number;
}

interface PropsBlock {
  value?: number;
}

export const Skeleton = (props: Props) => {
  const { grid, value } = props;
  const [state, setState] = useState<number[]>([]);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    if (!isLoad) {
      setIsLoad(true);
      getGrid();
    }
  }, [state, isLoad]);

  const getGrid = () => {
    let gridArr = [];
    for (let i = 0; i < value; i++) {
      gridArr.push(i);
    }

    setState(gridArr);
    return <SkeletonBlock />;
  };

  const getSimple = () => {
    return <SkeletonBlock />;
  };

  return (
    <div className={styles.skeleton}>
      {grid ? (
        <div className={styles.skeleton__grid}>
          {state.length > 0 &&
            state.map((item, index) => <SkeletonBlock value={value} />)}
        </div>
      ) : (
        getSimple()
      )}
    </div>
  );
};

const SkeletonBlock = (props: PropsBlock) => {
  const { value } = props;
  return (
    <div className={styles.skeleton__item}>
      <div className={styles.skeleton__item_inner}></div>
    </div>
  );
};
