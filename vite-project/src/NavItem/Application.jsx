import React, { useState } from 'react';

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
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
  <h1 className="text-2xl font-semibold text-center bg-blue-500 mb-6">Application Form</h1>
  <hr className="my-4" />
  <form id="applicationForm" className='' onSubmit={handleSubmit}>
    <PersonalDetails formData={formData} handleChange={handleChange} />
    <EducationalDetails formData={formData} handleChange={handleChange} />
    <ExamDetails formData={formData} handleChange={handleChange} />
    <FamilyBackground formData={formData} handleChange={handleChange} />
    <DeclarationSection formData={formData} handleChange={handleChange} />
    <button type="submit" className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 mt-4" onClick={handleDeclarationSubmit}>Submit Application</button>
  </form>
</div>

  );
}

// Personal Details Component
function PersonalDetails({ formData, handleChange }) {
  return (
    <div className="space-y-6 mt-12 ">
  <h2 className="text-xl font-bold">Personal Details</h2>
  <div>
    <label htmlFor="name" className="block text-sm font-semibold">Full Name:</label>
    <input type="text" id="name" value={formData.name} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" required />
  </div>
  <div>
    <label htmlFor="dob" className="block text-sm font-semibold">Date of Birth:</label>
    <input type="date" id="dob" value={formData.dob} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" required />
  </div>
  <div>
    <label className="block text-sm font-semibold">Gender:</label>
    <div className="flex space-x-4">
      <label className="flex items-center space-x-2">
        <input type="radio" id="male" name="gender" value="Male" onChange={handleChange} className="h-4 w-4 text-blue-500" />
        <span>Male</span>
      </label>
      <label className="flex items-center space-x-2">
        <input type="radio" id="female" name="gender" value="Female" onChange={handleChange} className="h-4 w-4 text-blue-500" />
        <span>Female</span>
      </label>
      <label className="flex items-center space-x-2">
        <input type="radio" id="other" name="gender" value="Other" onChange={handleChange} className="h-4 w-4 text-blue-500" />
        <span>Other</span>
      </label>
    </div>
  </div>
  <div>
    <label htmlFor="address" className="block text-sm font-semibold">Address:</label>
    <input type="text" id="address" value={formData.address} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" required />
  </div>
  <div>
    <label htmlFor="fathersName" className="block text-sm font-semibold">Father's Name:</label>
    <input type="text" id="fathersName" value={formData.fathersName} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" required />
  </div>
  <div>
    <label htmlFor="mothersName" className="block text-sm font-semibold">Mother's Name:</label>
    <input type="text" id="mothersName" value={formData.mothersName} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" required />
  </div>
  <div>
    <label htmlFor="email" className="block text-sm font-semibold">Email:</label>
    <input type="email" id="email" value={formData.email} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" required />
  </div>
  <div>
    <label htmlFor="phone" className="block text-sm font-semibold">Phone:</label>
    <input type="tel" id="phone" value={formData.phone} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" required />
  </div>
  <div>
    <label htmlFor="adharnumber" className="block text-sm font-semibold">Adhar Number:</label>
    <input type="number" id="adharnumber" value={formData.adharnumber} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" required />
  </div>
  <div>
    <label htmlFor="pannumber" className="block text-sm font-semibold">Pan Number:</label>
    <input type="text" id="pannumber" value={formData.pannumber} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" required />
  </div>
  <div>
    <label htmlFor="maritalstatus" className="block text-sm font-semibold">Marital Status:</label>
    <select id="maritalstatus" value={formData.maritalstatus} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" required>
      <option value="">Select your marital status</option>
      <option value="Single">Single</option>
      <option value="Married">Married</option>
      <option value="Widowed">Widowed</option>
      <option value="Divorced">Divorced</option>
    </select>
  </div>
  <div>
    <label htmlFor="nationality" className="block text-sm font-semibold">Nationality:</label>
    <select id="nationality" value={formData.nationality} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" required>
      <option value="">Select your nationality</option>
      <option value="Indian">Indian</option>
      <option value="Other">Other</option>
    </select>
  </div>
</div>

  );
}

// Educational Details Component
function EducationalDetails({ formData, handleChange }) {
    return (
      <div className="space-y-6 mt-12">
        <h2 className="text-xl font-bold">Educational Details</h2>
        
        <div>
          <label htmlFor="secondarySchoolName" className="block text-sm font-semibold">Secondary School Name:</label>
          <input 
            type="text" 
            placeholder="Enter your secondary school name" 
            id="secondarySchoolName" 
            value={formData.secondarySchoolName} 
            onChange={handleChange} 
            className="w-full p-2 border border-gray-300 rounded-md" 
            required 
          />
        </div>
  
        <div>
          <label className="block text-sm font-semibold">Education Board:</label>
          <div className="flex space-x-4">
            <label className="flex items-center space-x-2">
              <input 
                type="radio" 
                id="CBSE" 
                name="educationDetails" 
                value="CBSE" 
                onChange={handleChange} 
                className="h-4 w-4 text-blue-500" 
              />
              <span>CBSE</span>
            </label>
            <label className="flex items-center space-x-2">
              <input 
                type="radio" 
                id="ICSE" 
                name="educationDetails" 
                value="ICSE" 
                onChange={handleChange} 
                className="h-4 w-4 text-blue-500" 
              />
              <span>ICSE</span>
            </label>
            <label className="flex items-center space-x-2">
              <input 
                type="radio" 
                id="other" 
                name="educationDetails" 
                value="State Board" 
                onChange={handleChange} 
                className="h-4 w-4 text-blue-500" 
              />
              <span>State Board</span>
            </label>
          </div>
        </div>
  
        <div>
          <label htmlFor="secondaryPercentage" className="block text-sm font-semibold">Secondary School Percentage:</label>
          <input 
            type="number" 
            id="secondaryPercentage" 
            placeholder="Enter your secondary school percentage" 
            value={formData.secondaryPercentage} 
            onChange={handleChange} 
            className="w-full p-2 border border-gray-300 rounded-md" 
            required 
          />
        </div>
  
        {/* Intermediate Details */}
        <div>
          <label htmlFor="intermediateSchoolName" className="block text-sm font-semibold">Intermediate School Name:</label>
          <input 
            type="text" 
            placeholder="Enter your Intermediate school name" 
            id="intermediateSchoolName" 
            value={formData.intermediateSchoolName} 
            onChange={handleChange} 
            className="w-full p-2 border border-gray-300 rounded-md" 
            required 
          />
        </div>
  
        <div>
          <label className="block text-sm font-semibold">Education Board:</label>
          <div className="flex space-x-4">
            <label className="flex items-center space-x-2">
              <input 
                type="radio" 
                id="CBSE" 
                name="educationDetails" 
                value="CBSE" 
                onChange={handleChange} 
                className="h-4 w-4 text-blue-500" 
              />
              <span>CBSE</span>
            </label>
            <label className="flex items-center space-x-2">
              <input 
                type="radio" 
                id="ICSE" 
                name="educationDetails" 
                value="ICSE" 
                onChange={handleChange} 
                className="h-4 w-4 text-blue-500" 
              />
              <span>ICSE</span>
            </label>
            <label className="flex items-center space-x-2">
              <input 
                type="radio" 
                id="other" 
                name="educationDetails" 
                value="State Board" 
                onChange={handleChange} 
                className="h-4 w-4 text-blue-500" 
              />
              <span>State Board</span>
            </label>
          </div>
        </div>
  
        <div>
          <label htmlFor="studyBackground" className="block text-sm font-semibold">Study Background:</label>
          <div className="flex space-x-4">
            <label className="flex items-center space-x-2">
              <input 
                type="radio" 
                id="PCB" 
                name="studyBackground" 
                value="PCB" 
                onChange={handleChange} 
                className="h-4 w-4 text-blue-500" 
              />
              <span>Science (PCB)</span>
            </label>
            <label className="flex items-center space-x-2">
              <input 
                type="radio" 
                id="PCM" 
                name="studyBackground" 
                value="PCM" 
                onChange={handleChange} 
                className="h-4 w-4 text-blue-500" 
              />
              <span>Science (PCM)</span>
            </label>
            <label className="flex items-center space-x-2">
              <input 
                type="radio" 
                id="Commerce" 
                name="studyBackground" 
                value="Commerce" 
                onChange={handleChange} 
                className="h-4 w-4 text-blue-500" 
              />
              <span>Commerce</span>
            </label>
            <label className="flex items-center space-x-2">
              <input 
                type="radio" 
                id="Humanities" 
                name="studyBackground" 
                value="Humanities" 
                onChange={handleChange} 
                className="h-4 w-4 text-blue-500" 
              />
              <span>Humanities</span>
            </label>
          </div>
        </div>
  
        <div>
          <label htmlFor="percentage" className="block text-sm font-semibold">Intermediate School Percentage:</label>
          <input 
            type="number" 
            id="percentage" 
            placeholder="Enter your intermediate school percentage" 
            min="0" 
            max="100" 
            required 
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
  
        <div>
          <label htmlFor="major" className="block text-sm font-semibold">In Your Tertiary Education/College, What Type of Course Are You In?</label>
          <select id="major" className="w-full p-2 border border-gray-300 rounded-md">
            <option value="Bachelors Of Arts">Bachelors Of Arts</option>
            <option value="Bachelors Of Commerce">Bachelors Of Commerce</option>
            <option value="Bachelors Of Science">Bachelors Of Science</option>
            <option value="Bachelors Of Technology">Bachelors Of Technology</option>
            <option value="Bachelors Of Business Administration">Bachelors Of Business Administration</option>
            <option value="Other">Others</option>
          </select>
        </div>
      </div>
    );
  }
  

// Exam Details Component
function ExamDetails({ formData, handleChange }) {
    return (
      <div className="space-y-6 mt-12">
        <h2 className="text-xl font-bold">Exam Details Preparing For:</h2>
        
        <div>
          <label htmlFor="major" className="block text-sm font-semibold">Government Exam you are Preparing for:</label>
          <select id="major" className="w-full p-2 border border-gray-300 rounded-md">
            <option value="UPSC">UPSC</option>
            <option value="GATE">GATE</option>
            <option value="SSC-CGL">SSC-CGL</option>
            <option value="IBPS">IBPS</option>
            <option value="RRB JE">RRB JE</option>
            <option value="ISRO">ISRO</option>
            <option value="DRDO">DRDO</option>
            <option value="Other">Other State Based Exam</option>
          </select>
        </div>
  
        <div>
          <label htmlFor="preparationYears" className="block text-sm font-semibold">From How Many Years You are Preparing For This Exam:</label>
          <input 
            type="number" 
            id="preparationYears" 
            placeholder="Enter number of years" 
            min="0" 
            max="20" 
            required 
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
  
        <div>
          <label htmlFor="alternatePlan" className="block text-sm font-semibold">
            What If You Are Not Able To Clear The Exam Within Your Decided Limit Date So In Which Sector Will You Go?
          </label>
          <select id="alternatePlan" className="w-full p-2 border border-gray-300 rounded-md">
            <option value="Job In Some Private Sector">Job In Some Private Sector</option>
            <option value="Handle Business">Handle Business</option>
            <option value="Continue Studies">Continue Studies</option>
            <option value="Other">Other</option>
          </select>
        </div>
  
        <div>
          <label htmlFor="beliefPercentage" className="block text-sm font-semibold">
            How Much Percentage Of Belief You Have That You Will Clear The Exam?
          </label>
          <select id="beliefPercentage" className="w-full p-2 border border-gray-300 rounded-md">
            <option value="10-25%">10-25%</option>
            <option value="25-50%">25-50%</option>
            <option value="50-75%">50-75%</option>
            <option value="75-100%">75-100%</option>
          </select>
        </div>
  
        <div>
          <label htmlFor="preparationYears" className="block text-sm font-semibold">
            For How Many Years You Will Give To Yourself To Clear The Exam?
          </label>
          <select id="preparationYears" className="w-full p-2 border border-gray-300 rounded-md">
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
      <div className="space-y-6 mt-12">
        <h2 className="text-xl font-bold">Family Background</h2>
        
        <div>
          <label htmlFor="fathersOccupation" className="block text-sm font-semibold">Father's Occupation:</label>
          <input 
            type="text" 
            placeholder="Enter Your Father's Occupation" 
            id="fathersOccupation" 
            value={formData.fathersOccupation} 
            onChange={handleChange} 
            className="w-full p-2 border border-gray-300 rounded-md" 
            required 
          />
        </div>
  
        <div>
          <label htmlFor="mothersOccupation" className="block text-sm font-semibold">Mother's Occupation:</label>
          <input 
            type="text" 
            placeholder="Enter Your Mother's Occupation" 
            id="mothersOccupation" 
            value={formData.mothersOccupation} 
            onChange={handleChange} 
            className="w-full p-2 border border-gray-300 rounded-md" 
            required 
          />
        </div>
  
        <div>
          <label htmlFor="fathersIncome" className="block text-sm font-semibold">Father's Annual Income:</label>
          <input 
            type="number" 
            id="fathersIncome" 
            placeholder="Enter your father's annual income" 
            className="w-full p-2 border border-gray-300 rounded-md" 
            required 
          />
        </div>
  
        <div>
          <label htmlFor="parentsContactNumber" className="block text-sm font-semibold">Parent's Contact Number:</label>
          <input 
            type="number" 
            id="parentsContactNumber" 
            placeholder="Enter your parent's contact number" 
            className="w-full p-2 border border-gray-300 rounded-md" 
            required 
          />
        </div>
  
        <div>
          <label htmlFor="guardianOccupation" className="block text-sm font-semibold">Guardian Occupation:</label>
          <input 
            type="text" 
            id="guardianOccupation" 
            placeholder="Guardian Occupation" 
            className="w-full p-2 border border-gray-300 rounded-md" 
            required 
          />
        </div>
  
        <div>
          <label htmlFor="motherGuardianIncome" className="block text-sm font-semibold">Mother/Guardian Annual Income:</label>
          <input 
            type="number" 
            id="motherGuardianIncome" 
            placeholder="Enter your Mother/Guardian Annual Income" 
            className="w-full p-2 border border-gray-300 rounded-md" 
            required 
          />
        </div>
      </div>
    );
  }
  


// Declaration Section Component
function DeclarationSection({ formData, handleChange }) {
    return (
        <div className="space-y-4 mt-12">
        <h2 className="text-xl font-bold ">Declaration</h2>
        <p className="text-sm">I, the undersigned, hereby declare that all the information provided in this form is accurate and complete to the best of my knowledge.</p>
        <div>
          <label htmlFor="parentSignature" className="block text-sm font-semibold">Parent/Guardian Signature:</label>
          <input type="text" id="parentSignature" value={formData.parentSignature} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div>
          <label htmlFor="candidateSignature" className="block text-sm font-semibold">Candidate's Signature:</label>
          <input type="text" id="candidateSignature" value={formData.candidateSignature} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div>
          <label htmlFor="declarationDate" className="block text-sm font-semibold">Date:</label>
          <input type="date" id="declarationDate" value={formData.declarationDate} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" required />
        </div>
      </div>
      
    );
  }
export default ApplicationForm;