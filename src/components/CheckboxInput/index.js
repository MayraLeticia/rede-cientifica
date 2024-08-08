import React, { useState } from 'react';
import './style.scss';

const CheckboxInput = ({ options, onChange }) => {
  const [checkedOptions, setCheckedOptions] = useState([]);
  const [otherOption, setOtherOption] = useState('');

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setCheckedOptions((prev) => [...prev, value]);
    } else {
      setCheckedOptions((prev) => prev.filter((option) => option !== value));
    }

    onChange(checkedOptions);
  };

  const handleOtherChange = (event) => {
    setOtherOption(event.target.value);
    if (event.target.value) {
      setCheckedOptions((prev) => [...prev.filter((option) => option !== 'Other'), event.target.value]);
    } else {
      setCheckedOptions((prev) => prev.filter((option) => option !== 'Other'));
    }

    onChange(checkedOptions);
  };

  return (
    <div className="checkbox-input">
      {options.map((option, index) => (
        <div key={index}>
          <div className='option'>
            <input
              type="checkbox"
              value={option.name}
              checked={checkedOptions.includes(option.name)}
              onChange={handleCheckboxChange}
            />
            <p>{option.name}</p>
            {option.name === 'Outros:' && (
                     
                <input
                  type="text"
                  value={otherOption}
                  onChange={handleOtherChange}
                  placeholder="Digite aqui..."
                />
             
            )}
          </div>
          {option.description && <span>{option.description}</span>}
        </div>
      ))}
      
    </div>
  );
};

export default CheckboxInput;
