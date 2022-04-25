import { useState } from 'react';
import DatePicker from 'react-datepicker'
import './InputDateNasa.css'

const InputDateNasa = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
      />
    );
  };

export default InputDateNasa