import WatchForm from './components/WatchForm/WatchForm';
import WatchList from './components/WatchList/WatchList';
import WatchItem from './components/WatchItem/WatchItem';

const App = () => {
  return (
    <>
      <WatchForm />
      <WatchList>
        <WatchItem />
        <WatchItem />
        <WatchItem />
        <WatchItem />
        <WatchItem />
        <WatchItem />
        <WatchItem />
        <WatchItem />
      </WatchList>
    </>
  );
};

export default App;
