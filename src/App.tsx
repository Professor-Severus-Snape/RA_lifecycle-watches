import { useState } from 'react';
import WatchForm from './components/WatchForm/WatchForm';
import WatchList from './components/WatchList/WatchList';
import IWatch from './models/IWatch';

const App = () => {
  const [form, setForm] = useState<IWatch>({ zone: '', offset: '' }); // данные из формы
  const [watches, setWatches] = useState<IWatch[]>([]); // все установленные часы

  const handleChange = (newForm: IWatch) => {
    setForm(newForm); // актуализация полей формы
  };

  const handleSubmit = (newForm: IWatch) => {
    if (newForm.zone === '' || newForm.offset === '') {
      setForm(newForm); // сброс невалидного инпута
      return;
    }
    // если данные полей ввода валидны и полные:
    const exists = watches.find((el) => el.zone === newForm.zone);
    // если город уже есть:
    if (exists) {
      setForm({ zone: '', offset: '' }); // очистка полей формы
      // TODO: показать подсказку !!!
      return;
    }
    setWatches([...watches, newForm]); // актуализация массива с данными
    setForm({ zone: '', offset: '' }); // очистка полей формы
  };

  const handleRemove = (watch: IWatch) => {
    setWatches(watches.filter((el) => el.zone !== watch.zone)); // удаляем часы
  };

  return (
    <>
      <WatchForm form={form} onChange={handleChange} onSubmit={handleSubmit} />
      <WatchList watches={watches} onRemove={handleRemove} />
    </>
  );
};

export default App;
