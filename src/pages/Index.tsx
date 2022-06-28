import React, { Fragment, useEffect } from 'react';
import { PhoneList } from '../features/phones/components/PhoneList';
import { usePhones } from '../features/phones/hooks/usePhones';

const Index = () => {
    const { getPhones, sortedContactsByName } = usePhones();

  useEffect(() => {
    getPhones();
  }, );

  return (
    <Fragment>
      <title>PhoneList</title>
      <PhoneList phones={sortedContactsByName} />
    </Fragment>
  );
};

export default Index;
