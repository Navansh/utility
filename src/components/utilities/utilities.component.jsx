import axios from 'axios';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import UtilityCard from '../common/utlity-card';

const Utilities = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [utilitiesCount, setUtilitiesCount] = useState(0);
  //now we set the items array to first 5 elements of the utilities array
  const [hasMore, setHasMore] = useState(true);
  //the use of this is that, it will be used to check if there are more elements to be loaded

  const fetchMoreData = async () => {
    if (items.length >= utilitiesCount) {
      setHasMore(false);
      return;
    }
    // a fake async api call like which sends
    // 20 more records in .5 secs

    //now we want to concatenate the items array repeatedly with the utilities array
    //so that we can render the list
    if (hasMore) {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/utilities/all`,
          {
            params,
          }
        );
        if (res.data.result.length < 15) {
          setHasMore(false);
          return;
        }
        setItems(items.concat(res.data.result));
        setPage(page + 1);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const params = {
    page: page,
    limit: '15',
  };

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/utilities/all`, {
        params,
      })
      .then((res) => {
        setUtilitiesCount(res.data.totalUtilities);
        setItems(res.data.result);
        setPage(page + 1);
      });
  }, []);

  return (
    <section className=" bg-background h-full w-full px-8">
      <div className="flex h-full flex-wrap pt-20 max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-5 w-full">
          <p className="text-6xl text-center">
            All <span className=" primary-gradient-text">Utilities</span>{' '}
          </p>
          <InfiniteScroll
            dataLength={items.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<div>Loading.....</div>}
            className="grid grid-cols-1 gap-4 lg:gap-x-8 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 no-scrollbar"
          >
            {items.map((utility) => {
              return (
                <UtilityCard
                  key={utility._id}
                  id={utility._id}
                  collectionName={utility.nftCollectionName}
                  claims={utility.claims}
                  utilityName={utility.title}
                  image={utility.image}
                />
              );
            })}
          </InfiniteScroll>
        </div>
      </div>
    </section>
  );
};

export default Utilities;
