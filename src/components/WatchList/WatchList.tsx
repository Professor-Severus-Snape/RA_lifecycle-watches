import { PropsWithChildren } from 'react';
import './watchList.css';

const WatchList = ({ children }: PropsWithChildren) => {
  return <ul className="watch-list">{children}</ul>;
};

export default WatchList;
