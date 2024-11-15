
const express = require('express');
const UserInfo = require('../Models/UserInfo');
const authenticateUser = require('../Utils/authenticateUser');

const Formrouter=express.Router()
// Add user info route
Formrouter.post('/user-info', authenticateUser,async (req, res) => {
    
    const {
      userId, name, dob, gender, address, fathersName, mothersName,
      adharnumber, pannumber, maritalstatus, nationality, secondarySchoolName,
      board, secondaryPercentage, intermediateSchoolName, intermediateBoard,
      studyBackground, intermediatePercentage, major, exam, yearsPreparing,
      alternativePlan, beliefInSuccess, commitmentYears, fathersOccupation,
      mothersOccupation, fathersIncome, parentsContact, guardianOccupation,
      guardianIncome, parentSignature, candidateSignature, declarationDate
    } = req.body;
  
    try {
      // Create and save user info
      const newUserInfo = new UserInfo({
        userId, name, dob, gender, address, fathersName, mothersName,
        adharnumber, pannumber, maritalstatus, nationality, secondarySchoolName,
        board, secondaryPercentage, intermediateSchoolName, intermediateBoard,
        studyBackground, intermediatePercentage, major, exam, yearsPreparing,
        alternativePlan, beliefInSuccess, commitmentYears, fathersOccupation,
        mothersOccupation, fathersIncome, parentsContact, guardianOccupation,
        guardianIncome, parentSignature, candidateSignature, declarationDate
      });
  
      await newUserInfo.save();
      res.status(201).json({ message: 'User info saved successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error saving user info', error });
    }
  });
  

  module.exports=Formrouter;