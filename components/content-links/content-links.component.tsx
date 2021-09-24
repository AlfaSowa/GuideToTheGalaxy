/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from '@material-ui/core';
import { useStore } from 'effector-react';
import { useRouter } from 'next/router';
import {
  useEffect,
  useState,
} from 'react';
import {
  Chapter,
  Part,
} from '../../interfaces/chapters';
import { $pages } from '../../models/pages';

type ListDataType = {
  alias: string
  name: string
};

type ListType = {
  alias: string
  name: string
  data: ListDataType[]
};

const ContentLinks = (): JSX.Element => {
  const pages = useStore($pages);
  const router = useRouter();
  const [page, setPage] = useState<Chapter>(null);
  const [list, setList] = useState<ListType>(null);

  const getUrl = (elem) => {
    if (router?.query?.part) {
      return `/${page.alias}/${list.alias}/${elem.alias}`;
    }
    return `/${page.alias}/${elem.alias}`;
  };

  useEffect(() => {
    if (pages.length > 0) {
      const pageData = pages.find((pagesItem) => router.pathname.includes(pagesItem.alias));
      setPage(pageData);

      if (router?.query?.part) {
        const part = pageData.parts.find((partItem) => partItem.alias === router.query.part);

        setList({
          alias: part.alias,
          name: part.name,
          data: part.themes,
        });
      }

      if (!router?.query?.part) {
        setList({
          alias: pageData.alias,
          name: pageData.name,
          data: pageData.parts,
        });
      }
    }
  }, [pages]);

  return (
    <div>
      {list && page && (
        <div>
          {list.data.map((item) => (
            <Link
              href={getUrl(item)}
            >
              <a>{item.name}</a>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContentLinks;
