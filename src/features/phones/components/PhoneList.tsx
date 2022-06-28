import React, { useCallback } from 'react';
import { PhoneState } from '../ts';
import { Phone } from './Phone';

interface PhoneListProps {
  phones: Array<PhoneState> | null;
}

export const PhoneList = ({ phones }: PhoneListProps) => {
  const getFirstLetter = useCallback((index = 0) => phones?.[index]?.name?.first?.charAt(0) || '', [phones]);

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
        <tbody>
          {phones?.map((contact, index) => {
            let component = null;
            if (getFirstLetter(index) !== getFirstLetter(index - 1)) {
              component = (
                <tr key={index}>
                  <th colSpan={6} style={{ textAlign: 'left', paddingLeft: '20px' }}>
                    {getFirstLetter(index)}
                  </th>
                </tr>
              );
            }
            return [component, <Phone {...contact} key={contact.id} />];
          })}
        </tbody>
      </table>
    </div>
  );
};
