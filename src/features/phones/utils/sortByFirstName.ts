import { PhoneState } from '../ts';

const sortByFirstName = (a: PhoneState, b: PhoneState) => {
  const nameA = a.name.first.toLowerCase(),
    nameB = b.name.first.toLowerCase();

  if (nameA < nameB) {
    return -1;
  }

  if (nameA > nameB) {
    return 1;
  }

  return 0;
};

export default sortByFirstName;