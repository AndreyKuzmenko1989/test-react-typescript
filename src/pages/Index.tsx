import React, { Fragment, useEffect } from 'react';
import { PhoneList } from '../features/phones/components/PhoneList';
import { usePhones } from '../features/phones/hooks/usePhones';

const Index = () => {
  const { phones, getPhones } = usePhones();

  useEffect(() => {
    getPhones();
  }, [getPhones]);

  return (
    <Fragment>
      <title>PhoneList</title>
      <PhoneList phones={phones} />
    </Fragment>
  );
};

export default Index;
