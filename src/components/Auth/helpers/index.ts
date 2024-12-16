export const returnErrorMessage = (name: string, value: string) => {
  if (!value.length) {
    return { [name]: { value, message: 'Required' } };
  }
  if (value && value.length < 3) {
    return { [name]: { value, message: 'Must be at least 3 characters long' } };
  }
  return {};
};
