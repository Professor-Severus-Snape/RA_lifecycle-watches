import { useEffect, useState } from 'react';
import IWatch from '../../models/IWatch';
import WatchItem from '../WatchItem/WatchItem';
import './watchList.css';

interface IWatchListProps {
  watches: IWatch[];
  onRemove: (watch: IWatch) => void;
}

const WatchList = ({ watches, onRemove }: IWatchListProps) => {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [timer, setTimer] = useState<number | undefined>(undefined);

  const getCurrentTime = () => {
    const date = new Date();
    setTime({
      hours: date.getUTCHours(), // часы по гринвичу
      minutes: date.getUTCMinutes(), // минуты по гринвичу
      seconds: date.getUTCSeconds(), // секунды по гринвичу
    });
  };

  useEffect(() => {
    // если есть хоть одни часы и интервал не запущен, то запускаем его:
    if (watches.length && !timer) {
      getCurrentTime();
      setTimer(setInterval(() => getCurrentTime(), 1000));
    }

    // если нет часов и интервал запущен, то очищаем интервал:
    if (!watches.length && timer) {
      clearInterval(timer);
      setTimer(undefined);
    }
  }, [watches.length, timer]); // обновление компонента при изменении зависимостей

  const items = watches.map((obj) => (
    <WatchItem key={obj.zone} obj={obj} time={time} onRemove={onRemove} />
  ));
  return <ul className="watch-list">{items}</ul>;
};

export default WatchList;
