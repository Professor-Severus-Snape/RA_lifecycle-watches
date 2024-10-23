import IWatch from '../../models/IWatch';
import WatchItem from '../WatchItem/WatchItem';
import './watchList.css';

interface IWatchListProps {
  watches: IWatch[];
}

const WatchList = ({ watches }: IWatchListProps) => {
  const items = watches.map((obj) => {
    return <WatchItem key={obj.zone} obj={obj}/>
  });

  return <ul className="watch-list">{items}</ul>;
};

export default WatchList;
