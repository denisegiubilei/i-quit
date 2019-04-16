const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.passwordConfirm = !isEmpty(data.passwordConfirm) ? data.passwordConfirm : "";
  data.date = !isEmpty(data.date) ? data.date : "";
  data.pricePerPack = !isEmpty(data.pricePerPack) ? data.pricePerPack : "";
  data.packsPerWeek = !isEmpty(data.packsPerWeek) ? data.packsPerWeek : "";

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (Validator.isEmpty(data.passwordConfirm)) {
    errors.passwordConfirm = "Confirm password field is required";
  }

  // if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
  //   errors.password = "Password must be at least 6 characters";
  // }

  if (!Validator.equals(data.password, data.passwordConfirm)) {
    errors.passwordConfirm = "Passwords must match";
  }

  if (Validator.isEmpty(data.date)) {
    errors.date = "Quit date is required";
  }

  if (Validator.isEmpty(data.pricePerPack)) {
    errors.pricePerPack = "Price per pack information is required";
  }

  if (Validator.isEmpty(data.packsPerWeek)) {
    errors.packsPerWeek = "Packs per week information is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
