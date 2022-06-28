import React from 'react';
import { PhoneState } from '../ts';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../routes/constants';

export const Phone = (phoneObject: PhoneState) => {
  return (
    <tr>
      <td>{phoneObject.name.first}</td>
      <td>{phoneObject.name.last}</td>
      <td>{phoneObject.age}</td>
      <td>{phoneObject.phone}</td>
      <td>{phoneObject.company}</td>
      <td>
        <Link className="btn btn-info m-1" to={ROUTES.dynamic.viewPhone(phoneObject.id)}>
          View
        </Link>
        <Link className="btn btn-warning m-1" to={ROUTES.dynamic.editPhone(phoneObject.id)}>
          Edit
        </Link>
      </td>
    </tr>
  );
};
