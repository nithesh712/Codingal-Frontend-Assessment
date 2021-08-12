import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function Passengers() {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [count, setCount] = useState(0);
  const [totalPages, setTotalPages] = useState('');

  async function performGetApiCall(parameters) {
    const response = await fetch(
      `${`https://api.instantwebtools.net/v1/passenger`}${parameters}`
    )
      .then((res) => res.json())
      .catch((e) => console.log(e));
    return response;
  }

  useEffect(() => {
    fetchMorePost();
    // eslint-disable-next-line
  }, []);

  async function fetchMorePost() {
    if (count < totalPages || count === 0) {
      const data = await performGetApiCall(`?page=${count}&size=10`);
      if (data) {
        if (items.length > 0) {
          setItems([...items, ...data.data]);
        } else {
          setItems(data.data);
          setTotalPages(data.totalPages);
        }
      }
      setHasMore(true);
      setCount((c) => c + 1);
    } else {
      setHasMore(false);
    }
  }

  return (
    <>
      {items.length > 0 ? (
        <InfiniteScroll
          dataLength={items.length}
          next={fetchMorePost}
          hasMore={hasMore}
          loader={
            <div className="flex flex-wrap justify-center content-center">
              <img
                src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif"
                className="w-25 h-20"
                alt="Loading..."
              />
            </div>
          }
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>You have seen it all!</b>
            </p>
          }
          className="container my-12 mx-auto px-4 md:px-12"
        >
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            {items.map((x, i) => {
              return (
                <div
                  key={i}
                  className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 cursor-pointer"
                >
                  <article className="overflow-hidden rounded-lg shadow-lg">
                    <img
                      alt="Placeholder"
                      className="block h-auto w-full"
                      src="https://picsum.photos/600/400/?random"
                    />
                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                      <h1 className="text-lg">Name : {x.name}</h1>
                    </header>
                    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                      <p className="text-sm">
                        Country : {x.airline.country || x.airline[0].country}
                      </p>
                      <p className="text-grey-darker text-sm">
                        Trips: {x.trips}
                      </p>
                    </footer>
                  </article>
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      ) : (
        <div className="flex flex-wrap justify-center content-center">
          <img
            src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif"
            className="w-25 h-20"
            alt="Loading..."
          />
        </div>
      )}
    </>
  );
}
