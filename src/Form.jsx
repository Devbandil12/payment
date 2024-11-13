import React, { useState } from 'react';
import "./Form.css"
function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    gender: '',
    address: '',
    fathersName: '',
    mothersName: '',
    email: '',
    phone: '',
    adharnumber: '',
    pannumber: '',
    maritalstatus: '',
    nationality: '',
    secondarySchoolName: '',
    board: '',
    secondaryPercentage: '',
    intermediateSchoolName: '',
    intermediateBoard: '',
    studyBackground: '',
    intermediatePercentage: '',
    major: '',
    exam: '',
    yearsPreparing: '',
    alternativePlan: '',
    beliefInSuccess: '',
    commitmentYears: '',
    fathersOccupation: '',
    mothersOccupation: '',
    fathersIncome: '',
    parentsContact: '',
    guardianOccupation: '',
    guardianIncome: '',
    parentSignature: '',
    candidateSignature: '',
    declarationDate: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Application Submitted Successfully!');
    setFormData({});
  };

  const handleDeclarationSubmit = (e) => {
    const { parentSignature, candidateSignature, declarationDate } = formData;
    if (!parentSignature || !candidateSignature || !declarationDate) {
      alert('Please complete the declaration section.');
      e.preventDefault();
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Application Form</h1>
      <hr />
      <br />
      <form id="applicationForm" onSubmit={handleSubmit}>
      <PersonalDetails formData={formData} handleChange={handleChange} />
        <EducationalDetails formData={formData} handleChange={handleChange} />
        <ExamDetails formData={formData} handleChange={handleChange} />
        <FamilyBackground formData={formData} handleChange={handleChange} />
        <DeclarationSection formData={formData} handleChange={handleChange} />
        <button type="submit" className="submit-button" onClick={handleDeclarationSubmit}>Submit Application</button>
      </form>
    </div>
  );
}

// Personal Details Component
function PersonalDetails({ formData, handleChange }) {
  return (
    <div className="form-section" >
      <h2>Personal Details</h2>
      <label htmlFor="name" className="my_head">Full Name:</label>
      <input type="text" placeholder="Enter your full name" id="name" value={formData.name} onChange={handleChange} required />

      <label htmlFor="dob" className="my_head">Date of Birth:</label>
      <input type="date" id="dob" value={formData.dob} onChange={handleChange} required />

      <label className="my_head">Gender:</label>
      <div className="radio-group">
        <input type="radio" id="CBSE" name="gender" value="Male" onChange={handleChange} />
        <label htmlFor="male">Male</label>

        <input type="radio" id="feCBSE" name="gender" value="Female" onChange={handleChange} />
        <label htmlFor="female">Female</label>

        <input type="radio" id="other" name="gender" value="Other" onChange={handleChange} />
        <label htmlFor="other">Other</label>
      </div>

      <label htmlFor="address" className="my_head">Address:</label>
      <input type="text" placeholder="Enter your full address" id="address" value={formData.address} onChange={handleChange} required />

      <label htmlFor="fathersName" className="my_head">Father's Name:</label>
      <input type="text" id="fathersName" placeholder="Enter your father's name" value={formData.fathersName} onChange={handleChange} required />

      <label htmlFor="mothersName" className="my_head">Mother's Name:</label>
      <input type="text" id="mothersName" placeholder="Enter your mother's name" value={formData.mothersName} onChange={handleChange} required />

      <label htmlFor="email" className="my_head">Email:</label>
      <input type="email" id="email" placeholder="Enter your email address" value={formData.email} onChange={handleChange} required />

      <label htmlFor="phone" className="my_head">Phone:</label>
      <input type="tel" id="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} required />

      <label htmlFor="adharnumber" className="my_head">Adhar Number:</label>
      <input type="number" id="adharnumber" placeholder="Enter your adhar number" value={formData.adharnumber} onChange={handleChange} required />

      <label htmlFor="pannumber" className="my_head">Pan Number:</label>
      <input type="text" id="pannumber" placeholder="Enter your pan number" value={formData.pannumber} onChange={handleChange} required />

      <label htmlFor="maritalstatus" className="my_head">Marital Status:</label>
      <select id="maritalstatus" value={formData.maritalstatus} onChange={handleChange} required>
        <option value="">Select your marital status</option>
        <option value="Single">Single</option>
        <option value="Married">Married</option>
        <option value="Widowed">Widowed</option>
        <option value="Divorced">Divorced</option>
      </select>

      <label htmlFor="nationality" className="my_head">Nationality:</label>
      <select id="nationality" value={formData.nationality} onChange={handleChange} required>
        <option value="">Select your nationality</option>
        <option value="Indian">Indian</option>
        <option value="Other">Other</option>
      </select> 
    </div>
  );
}

// Educational Details Component
function EducationalDetails({ formData, handleChange }) {
  return (
    <div className="form-section">
      <h2>Educational Details</h2>
      <label htmlFor="secondarySchoolName" className="my_head">Secondary School Name:</label>
      <input type="text" placeholder="Enter your secondary school name" id="secondarySchoolName" value={formData.secondarySchoolName} onChange={handleChange} required />

      <label className="my_head">Education Board:</label>
      <div className="radio-group">
        <input type="radio" id="CBSE" name="education details" value="CBSE" onChange={handleChange} />
        <label htmlFor="CBSE">CBSE</label>

        <input type="radio" id="ICSE" name="education details" value="ICSE" onChange={handleChange} />
        <label htmlFor="ICSE">ICSE</label>

        <input type="radio" id="other" name="education details" value="state board" onChange={handleChange} />
        <label htmlFor="state board">State Board</label>
      </div>

      <label htmlFor="secondaryPercentage" className="my_head">Secondary School Percentage:</label>
      <input type="number" id="secondaryPercentage" placeholder="Enter your secondary school percentage" value={formData.secondaryPercentage} onChange={handleChange} required />
      
{/* secondary board start */}
<label htmlFor="IntermediateSchoolName" className="my_head">Intermediate School Name:</label>
<input type="text" placeholder="Enter your Intermediate school name" id="intermediateSchoolName" value={formData.intermediateSchoolName} onChange={handleChange} required />

<label className="my_head">Education Board:</label>
      <div className="radio-group">
        <input type="radio" id="CBSE" name="education details" value="CBSE" onChange={handleChange} />
        <label htmlFor="CBSE">CBSE</label>

        <input type="radio" id="ICSE" name="education details" value="ICSE" onChange={handleChange} />
        <label htmlFor="ICSE">ICSE</label>

        <input type="radio" id="other" name="education details" value="state board" onChange={handleChange} />
        <label htmlFor="state board">State Board</label>
      </div>

      <label className="my_head">Study Background:</label>
<div className="radio-group">
  <input type="radio" id="PCB" name="studyBackground" value="PCB" />
  <label htmlFor="PCB">Science (PCB)</label>

  <input type="radio" id="PCM" name="studyBackground" value="PCM" />
  <label htmlFor="PCM">Science (PCM)</label>

  <input type="radio" id="Commerce" name="studyBackground" value="Commerce" />
  <label htmlFor="Commerce">Commerce</label>

  <input type="radio" id="Humanities" name="studyBackground" value="Humanities" />
  <label htmlFor="Humanities">Humanities</label>
</div>

      <label htmlFor="percentage" className="my_head">Secondary School percentage:</label>
<input 
  type="number" 
  placeholder="Enter your secondary school percentage" 
  id="percentage" 
  min="0" 
  max="100" 
  required 
/>

<label htmlFor="college" className="my_head">In Your Tertiary Education/College, What Type of Course Are You In?</label>
<select id="major">
  <option value="Bachelors Of Arts">Bachelors Of Arts</option>
  <option value="Bachelors Of Commerce">Bachelors Of Commerce</option>
  <option value="Bachelors Of Science">Bachelors Of Science</option>
  <option value="Bachelors Of Technology">Bachelors Of Technology</option>
  <option value="Bachelors Of Business Administration">Bachelors Of Business Administration</option>
  <option value="Other">Others</option>
</select>


    </div>
  );
}

// Exam Details Component
function ExamDetails({ formData, handleChange }) {
  return (
    <div className="form-section">
    <h2>Exam Details Preparing For:</h2>
    <label htmlFor="major" className="my_head">Government Exam you are Preparing for:</label>
    <select id="major">
      <option value="UPSC">UPSC</option>
      <option value="GATE">GATE</option>
      <option value="SSC-CGL">SSC-CGL</option>
      <option value="IBPS">IBPS</option>
      <option value="RRB JE">RRB JE</option>
      <option value="ISRO">ISRO</option>
      <option value="DRDO">DRDO</option>
      <option value="Other">Other State Based Exam</option>
    </select>

    <div>
  <label htmlFor="preparationYears" className="my_head">From How Many Years You are Preparing For This exam:</label>
  <input
    type="number"
    id="preparationYears"
    placeholder="Enter number of years"
    min="0"
    max="20"
    required
  />
</div>
<div>
  <label htmlFor="alternatePlan" className="my_head">
    What If You Are Not Able To Clear The Exam Within Your Decided Limit Date So In Which Sector Will You Go?
  </label>
  <select id="alternatePlan">
    <option value="Job In Some Private Sector">Job In Some Private Sector</option>
    <option value="Handle Business">Handle Business</option>
    <option value="Continue Studies">Continue Studies</option>
    <option value="Other">Other</option>
  </select>
</div>

<div>
  <label htmlFor="beliefPercentage" className="my_head">
    How Much Percentage Of Belief You Have That You Will Clear The Exam?
  </label>
  <select id="beliefPercentage">
    <option value="10-25%">10-25%</option>
    <option value="25-50%">25-50%</option>
    <option value="50-75%">50-75%</option>
    <option value="75-100%">75-100%</option>
  </select>

  <label htmlFor="preparationYears" className="my_head">
    For How Many Years You Will Give To Yourself To Clear The Exam?
  </label>
  <select id="preparationYears">
    <option value="Present Year">Present Year</option>
    <option value="2 Years More">2 Years More</option>
    <option value="3 Years More">3 Years More</option>
    <option value="Until I Clear">Until I Clear</option>
  </select>
</div>


  </div>
  
  );
}

// Family Background Component
function FamilyBackground({ formData, handleChange }) {
  return (
    <div className="form-section">
      <h2>Family Background</h2>
      <label htmlFor="fathersOccupation" className="my_head">Father's Occupation:</label>
      <input type="text" placeholder="Enter Your Father's Occupation" id="fathersOccupation" value={formData.fathersOccupation} onChange={handleChange} required />

      <label htmlFor="mothersOccupation" className="my_head">Mother's Occupation:</label>
      <input type="text" placeholder="Enter Your Mother's Occupation" id="mothersOccupation" value={formData.mothersOccupation} onChange={handleChange} required />

      <div>
  <label htmlFor="fathersIncome" className="my_head">Father's Annual Income:</label>
  <input
    type="text"
    id="fathersIncome"
    placeholder="Enter your father's annual income"
    required
  />

  <label htmlFor="parentsContactNumber" className="my_head">Parent's Contact Number:</label>
  <input
    type="number"
    id="parentsContactNumber"
    placeholder="Enter your parent's contact number"
    required
  />

  <label htmlFor="guardianOccupation" className="my_head">Guardian Occupation:</label>
  <input
    type="text"
    id="guardianOccupation"
    placeholder="Guardian Occupation"
    required
  />

  <label htmlFor="motherGuardianIncome" className="my_head">Mother/Guardian Annual Income:</label>
  <input
    type="number"
    id="motherGuardianIncome"
    placeholder="Enter your Mother/Guardian Annual Income"
    required
  />
</div>

    </div>
  );
}


// Declaration Section Component
function DeclarationSection({ formData, handleChange }) {
    return (
      <div className="form-section">
        <h2>Declaration</h2>
        <p>
          I, the undersigned, hereby declare that all the information provided in this form is accurate and complete to the best of my knowledge.
        </p>
        <label htmlFor="parentSignature" className="my_head">Parent/Guardian Signature:</label>
        <input type="text" id="parentSignature" placeholder="Enter parent's/guardian's signature" value={formData.parentSignature} onChange={handleChange} required />
  
        <label htmlFor="candidateSignature" className="my_head">Candidate's Signature:</label>
        <input type="text" id="candidateSignature" placeholder="Enter candidate's signature" value={formData.candidateSignature} onChange={handleChange} required />
  
        <label htmlFor="declarationDate" className="my_head">Date:</label>
        <input type="date" id="declarationDate" value={formData.declarationDate} onChange={handleChange} required />
      </div>
    );
  }
export default ApplicationForm;
