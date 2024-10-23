import removeIcon from '../../assets/remove.svg';
import IWatch from '../../models/IWatch';
import './watchItem.css';

interface IWatchItemProps {
  obj: IWatch;
}

const WatchItem = ({ obj }: IWatchItemProps) => {
  return (
    <li className="watch-item">
      <h5 className="watch-item__title">{obj.zone}</h5>
      <div className="watch-item__content">
        <span className="hour-arrow"></span>
        <span className="minute-arrow"></span>
        <span className="second-arrow"></span>
      </div>
      <img className="watch-item__remove" src={removeIcon} alt="remove" />
    </li>
  );
};

export default WatchItem;
