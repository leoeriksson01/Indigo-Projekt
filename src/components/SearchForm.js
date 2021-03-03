const SearchForm = () => {
  return (
    <form>
      <label htmlFor="make">Make</label>
      <input type="text" placeholder="Toyota" />

      <label htmlFor="model">Model</label>
      <input type="text" placeholder="Camry" />

      <label htmlFor="year">Year</label>
      <input type="number" placeholder="1972" />

      <label htmlFor="make">Price</label>
      <input type="range" min="1" max="10000000" />

      <label htmlFor="make">Miles</label>
      <input type="range" min="1" max="10000000" />
    </form>
  );
};

export default SearchForm;
