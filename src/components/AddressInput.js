// AddressInput.js
import React, { useState } from 'react';

const AddressInput = () => {
  const [address, setAddress] = useState('');
  const [submittedAddress, setSubmittedAddress] = useState('');

  const handleChange = (event) => {
    setAddress(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedAddress(address);
  };

  return (
    <div>
      <h1>Enter the address of the HTML page:</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={address} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      {submittedAddress && (
        <div>
          <h2>iFrame of the submitted address:</h2>
          <iframe src={submittedAddress} width="100%" height="500" title="address-iframe"></iframe>
        </div>
      )}
    </div>
  );
};

export default AddressInput;
