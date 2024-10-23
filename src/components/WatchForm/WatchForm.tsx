import './watchForm.css';

const WatchForm = () => {
  return (
    <form className="watch-form">
      <div className="watch-form__column">
        <label htmlFor="zone" className="watch-form__zone-label">
          Название
        </label>
        <input
          id="zone"
          className="watch-form__zone-input"
          type="text"
          required
          placeholder="город"
        />
      </div>

      <div className="watch-form__column">
        <label htmlFor="offset" className="watch-form__offset-label">
          Временная зона
        </label>
        <input
          id="offset"
          className="watch-form__offset-input"
          type="text"
          required
          placeholder="сдвиг в часах"
        />
      </div>

      <button className="watch-form__button" type="button">
        Добавить
      </button>
    </form>
  );
};

export default WatchForm;
