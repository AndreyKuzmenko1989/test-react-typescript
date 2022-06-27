import React, { useCallback } from 'react';
import { PhoneState } from '../ts';

interface PhoneListProps {
  phones: Array<PhoneState> | null;
}

export const PhoneList = ({ phones }: PhoneListProps) => {
  return (
    <div>
      <table className="text-center m-auto mt-5 w-75">
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Company</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};
