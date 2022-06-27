import React, { Fragment } from 'react';
import { PhoneList } from '../features/phone/components/PhoneList';

const PhoneListPage = () => {
  return (
    <Fragment>
      <title>PhoneList</title>
      <PhoneList phones={[]} />
    </Fragment>
  );
};

export default PhoneListPage;
