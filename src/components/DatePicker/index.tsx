import React, { useEffect } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';
import { dateFormatter } from '../../functions/intlfFunctions';


interface DateProps {
  setValue: React.Dispatch<React.SetStateAction<string>>;
  title: string;
  dataInfo?: any;
}

export default function BasicDatePicker({setValue, title, dataInfo}: DateProps) {
  const [data, setData] = useState(new Date()); // Valor inicial da data

  const handleDateChange = (date: any) => {
    setData(date);
  };

  useEffect(() => {
    setValue(dateFormatter(data))
  }, [data, setValue]) // setValue?

  return (
    <LocalizationProvider  dateAdapter={AdapterDateFns}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker 
        label={title}
        value={dataInfo ? dataInfo : data}
        onChange={handleDateChange}
        format="dd/MM/yyyy"
      />
      </DemoContainer>
    </LocalizationProvider>
  );
}