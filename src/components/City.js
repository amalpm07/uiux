import React, { useState } from 'react';

const LocationForm = () => {
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');

  const handleStateChange = (e) => {
    setState(e.target.value);
    setCity(''); // Reset city when state changes
    setDistrict(''); // Reset district when state changes
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
    setDistrict(''); // Reset district when city changes
  };

  const handleDistrictChange = (e) => {
    setDistrict(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the form data to the server using an HTTP request
    // For simplicity, we'll assume you have an API endpoint in your Node.js backend to handle this request
    // You can use fetch or Axios to make the request
    // Example: fetch('/api/location', { method: 'POST', body: JSON.stringify({ state, city, district }) });
  };

  return (
    <div className="auth-wrapper">
    <form onSubmit={handleSubmit}>
      <label>
        State:
        <select value={state} onChange={handleStateChange}>
          <option value="">Select a state</option>
          <option value="state1">State 1</option>
          <option value="state2">State 2</option>
          {/* Add more state options */}
        </select>
      </label>
      <label>
        City:
        <select value={city} onChange={handleCityChange} disabled={!state}>
          <option value="">Select a city</option>
          {state === 'state1' && (
            <>
              <option value="city1">City 1</option>
              <option value="city2">City 2</option>
              {/* Add more city options for state1 */}
            </>
          )}
          {state === 'state2' && (
            <>
              <option value="city3">City 3</option>
              <option value="city4">City 4</option>
              {/* Add more city options for state2 */}
            </>
          )}
          {/* Add more state-city mapping */}
        </select>
      </label>
      <label>
        District:
        <select value={district} onChange={handleDistrictChange} disabled={!city}>
          <option value="">Select a district</option>
          {/* Add district options based on selected city */}
          {/* You can fetch district options dynamically from the server based on the selected city */}
        </select>
      </label>
      <button type="submit" disabled={!district}>
        Submit
      </button>
    </form>
    </div>
  );
};

export default LocationForm;
