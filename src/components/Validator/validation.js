export const validation = {
  name: [{ check: value => !!value, errorMsg: 'name is mandantory!' }],
  email: [
    { check: value => !!value, errorMsg: 'email is mandantory!' },
    {
      check: value =>
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value),
      errorMsg: 'email is invalid!'
    }
  ],
  confirm: [
    { check: value => !!value, errorMsg: 'confirm email is mandantory!' }
  ],
  address: [{ check: value => !!value, errorMsg: 'address is mandantory!' }],
  postCode: [
    { check: value => !!value, errorMsg: 'post code is mandantory!' },
    {
      check: value => /^\d{4}$/.test(value),
      errorMsg: 'post code should be 4 number!'
    }
  ],
  contactNumber: [
    { check: value => !!value, errorMsg: 'contact number is mandantory!' },
    {
      check: value => /^\d+$/.test(value),
      errorMsg: 'contact number should be number!'
    }
  ]
};
