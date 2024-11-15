const mongoose = require('mongoose');

const userInfoSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },  // Link to the User schema
  name: { type: String, required: true },
  dob: { type: Date },
  gender: { type: String },
  address: { type: String },
  fathersName: { type: String },
  mothersName: { type: String },
  adharnumber: { type: String },
  pannumber: { type: String },
  maritalstatus: { type: String },
  nationality: { type: String },
  secondarySchoolName: { type: String },
  board: { type: String },
  secondaryPercentage: { type: Number },
  intermediateSchoolName: { type: String },
  intermediateBoard: { type: String },
  studyBackground: { type: String },
  intermediatePercentage: { type: Number },
  major: { type: String },
  exam: { type: String },
  yearsPreparing: { type: Number },
  alternativePlan: { type: String },
  beliefInSuccess: { type: String },
  commitmentYears: { type: Number },
  fathersOccupation: { type: String },
  mothersOccupation: { type: String },
  fathersIncome: { type: Number },
  parentsContact: { type: String },
  guardianOccupation: { type: String },
  guardianIncome: { type: Number },
  parentSignature: { type: String },
  candidateSignature: { type: String },
  declarationDate: { type: Date }
});

const UserInfo = mongoose.model('UserInfo', userInfoSchema);

module.exports = UserInfo;
