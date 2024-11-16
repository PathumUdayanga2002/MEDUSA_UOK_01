import React, { useState } from 'react';

const MemberDetailsForm = () => {
  const [members, setMembers] = useState([
    { name: '', university: '', yearOfStudy: '', mobileNumber: '' },
  ]);
  const [loading, setLoading] = useState(false); // Loading state for the submit button
  const [status, setStatus] = useState(''); // State for form submission status

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    setMembers((prevMembers) =>
      prevMembers.map((member, i) =>
        i === index ? { ...member, [name]: value } : member
      )
    );
  };

  const handleAddMember = () => {
    if (members.length < 5) {
      setMembers([
        ...members,
        { name: '', university: '', yearOfStudy: '', mobileNumber: '' },
      ]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxJ_yE_Lokh5J2Y-SOQQD3l7fgQdcebKop2qTmwNjhct5hDI3ltBffmUmLLZBLm8HIQRA/exec';
    const form = new FormData();

    members.forEach((member, index) => {
      form.append(`name_${index + 1}`, member.name);
      form.append(`university_${index + 1}`, member.university);
      form.append(`yearOfStudy_${index + 1}`, member.yearOfStudy);
      form.append(`mobileNumber_${index + 1}`, member.mobileNumber);
    });

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: form
      });
      const result = await response.json();

      if (result.result === 'success') {
        setStatus('Success! Your form has been submitted.');
        console.log("submitted");
        setFormData({
          name: '',
          university: '',
          yearOfStudy: '',
          mobileNumber: ''
        });
      } else {
        setStatus('Error0! ' + result.error);
      }
    } catch (error) {
      
    }finally {
      setLoading(false); // Set loading state back to false
    }
  };


  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r font-techno from-black via-green-900 to-black">
      <form
        className="isolate aspect-video w-96 rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5 p-6"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold text-center mb-4">Member Details</h2>

        {members.map((member, index) => (
          <div key={index} className="mb-6 border-b pb-4 last:border-none">
            <h3 className="text-lg font-semibold mb-2">Member {index + 1}</h3>

            {/* Name Field */}
            <div className="mb-4">
              <label
                htmlFor={`name_${index}`}
                className="block text-sm font-medium text-white"
              >
                Name
              </label>
              <input
                type="text"
                id={`name_${index}`}
                name="name"
                value={member.name}
                onChange={(e) => handleChange(index, e)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter member's name"
              />
            </div>

            {/* University Field */}
            <div className="mb-4">
              <label
                htmlFor={`university_${index}`}
                className="block text-sm font-medium text-white"
              >
                University
              </label>
              <input
                type="text"
                id={`university_${index}`}
                name="university"
                value={member.university}
                onChange={(e) => handleChange(index, e)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter university"
              />
            </div>

            {/* Year of Study */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-white">
                Year of Study
              </label>
              <div className="mt-2 space-y-2">
                {['1st Year', '2nd Year', '3rd Year', '4th Year'].map((year) => (
                  <div key={year} className="flex items-center">
                    <input
                      type="radio"
                      id={`year_${index}_${year}`}
                      name="yearOfStudy"
                      value={year}
                      checked={member.yearOfStudy === year}
                      onChange={(e) => handleChange(index, e)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <label
                      htmlFor={`year_${index}_${year}`}
                      className="ml-2 block text-sm text-gray-700"
                    >
                      {year}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Number */}
            <div className="mb-4">
              <label
                htmlFor={`mobileNumber_${index}`}
                className="block text-sm font-medium text-gray-700"
              >
                Mobile Number
              </label>
              <input
                type="text"
                id={`mobileNumber_${index}`}
                name="mobileNumber"
                value={member.mobileNumber}
                onChange={(e) => handleChange(index, e)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter mobile number"
              />
            </div>
          </div>
        ))}

        {/* Add Member Button */}
        <div className="mb-4">
          <button
            type="button"
            onClick={handleAddMember}
            className={`w-full py-2 px-4 rounded-md ${members.length < 5 ? 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
            disabled={members.length >= 5}
          >
            {members.length < 5 ? 'Add Another Member' : 'Maximum Members Reached'}
          </button>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </div>

        {/* Status Message */}
        {status && (
          <div className="mt-4 text-center">
            <p className={`text-lg ${status.startsWith('Error') ? 'text-red-500' : 'text-green-500'}`}>
              {status}
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default MemberDetailsForm;
