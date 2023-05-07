const User = require('../models/userModel.js');

exports.saveUserInDB = async (profile, authType) => {
  let newUser;
  newUser = new User({
    name: profile.displayName || profile.name,
    email: profile.email || profile.emails[0]?.value,
    providers: [{ provider: authType, id: profile.sub || profile.userId }],
  });

  try {
    await newUser.save({ validateBeforeSave: false });
  } catch (error) {}

  return newUser;
};
