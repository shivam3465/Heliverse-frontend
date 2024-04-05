import React, { useState } from 'react';

const FilterBox = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(''); // Store the selected option

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowOptions(false); // Hide options after selection
  };

  return (
    <div>
      <div onClick={() => setShowOptions(!showOptions)}>Gender: {selectedOption}</div>
      {showOptions && (
        <select value={selectedOption} onChange={(e) => handleOptionSelect(e.target.value)}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      )}
    </div>
  );
};

export default FilterBox;
