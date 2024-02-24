export const validateMaxLength = (value, maxLength) => {
  const regex = new RegExp(`^[a-zA-Z-]{0,${maxLength}}$`);
  return required(value) && regex.test(value);
};
export const validateMinLength = (value, minLength) => {
  const regex = new RegExp(`^(?=.*[a-zA-Z]).{${minLength},}$`);
  return required(value) && regex.test(value);
};
export const validateEmail = (value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return required(value) && emailRegex.test(value);
};
export const validatePassword = (value) => {
  // 8 caracteres alfanuméricos, un número y un caracter especial
  const regex = /^(?=.*[A-Za-z0-9]{8})(?=.*\d)(?=.*[!@#$%^&*()-+=]).*$/;
  console.log("test", regex.test(value));
  console.log("value", value);
  return required(value) && regex.test(value);
};
export const validateIsSameText = (pass1, pass2) => {
  return required(value) && pass1 === pass2;
};
export const required = (value) => {
  return value ? true : false;
};
