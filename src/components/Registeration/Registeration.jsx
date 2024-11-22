import React, { useState } from "react";

const MemberDetailsForm = () => {
  const [members, setMembers] = useState([
    { name: "", university: "", yearOfStudy: "", mobileNumber: "", paymentSlip: null },
  ]);
  const [teamName, setTeamName] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    setMembers((prevMembers) =>
      prevMembers.map((member, i) =>
        i === index ? { ...member, [name]: value } : member
      )
    );
  };

  const handleFileChange = (index, e) => {
    const file = e.target.files[0];
    setMembers((prevMembers) =>
      prevMembers.map((member, i) =>
        i === index ? { ...member, paymentSlip: file } : member
      )
    );
  };

  const handleTeamNameChange = (e) => {
    setTeamName(e.target.value);
  };

  const handleAddMember = () => {
    if (members.length < 4) {
      setMembers([
        ...members,
        { name: "", university: "", yearOfStudy: "", mobileNumber: "", paymentSlip: null },
      ]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const scriptURL = import.meta.env.VITE_GOOGLE_URL;
  
    const form = new FormData();

    form.append("teamName", teamName);

    members.forEach((member, index) => {
      form.append(`name_${index + 1}`, member.name);
      form.append(`university_${index + 1}`, member.university);
      form.append(`yearOfStudy_${index + 1}`, member.yearOfStudy);
      form.append(`mobileNumber_${index + 1}`, member.mobileNumber);
      if (index === 0 && member.paymentSlip) {
        form.append("paymentSlip", member.paymentSlip);
      }
    });

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: form,
      });
      const result = await response.json();

      if (result.result === "success") {
        setStatus("Success! Your form has been submitted.");
        setTeamName("");
        setMembers([
          { name: "", university: "", yearOfStudy: "", mobileNumber: "", paymentSlip: null },
        ]);
      } else {
        setStatus("Error: " + result.error);
      }
    } catch (error) {
      setStatus("Error: Could not submit the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r font-techno from-black via-green-900 to-black">
      <form
        className="isolate aspect-video w-96 rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5 p-6 mt-16"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold text-center mb-4">
          Member Details
        </h2>

        {/* Team Name */}
        <div className="mb-6">
          <label
            htmlFor="teamName"
            className="block text-sm font-medium text-white"
          >
            Team Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="teamName"
            value={teamName}
            onChange={handleTeamNameChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter team name"
          />
        </div>

        {members.map((member, index) => (
          <div key={index} className="mb-6 border-b pb-4 last:border-none">
            <h3 className="text-lg font-semibold mb-2">Member {index + 1}</h3>

            <div className="mb-4">
              <label
                htmlFor={`name_${index}`}
                className="block text-sm font-medium text-white"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id={`name_${index}`}
                name="name"
                value={member.name}
                onChange={(e) => handleChange(index, e)}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter member's name"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor={`university_${index}`}
                className="block text-sm font-medium text-white"
              >
                University <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id={`university_${index}`}
                name="university"
                value={member.university}
                onChange={(e) => handleChange(index, e)}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter university"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-white">
                Year of Study <span className="text-red-500">*</span>
              </label>
              <div className="mt-2 space-y-2">
                {["1st Year", "2nd Year", "3rd Year", "4th Year"].map(
                  (year) => (
                    <div key={year} className="flex items-center">
                      <input
                        type="radio"
                        id={`year_${index}_${year}`}
                        name="yearOfStudy"
                        value={year}
                        checked={member.yearOfStudy === year}
                        onChange={(e) => handleChange(index, e)}
                        required
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <label
                        htmlFor={`year_${index}_${year}`}
                        className="ml-2 block text-sm text-gray-700"
                      >
                        {year}
                      </label>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor={`mobileNumber_${index}`}
                className="block text-sm font-medium text-white"
              >
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id={`mobileNumber_${index}`}
                name="mobileNumber"
                value={member.mobileNumber}
                onChange={(e) => handleChange(index, e)}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter mobile number"
              />
            </div>

            {index === 0 && (
              <div className="mb-4">
                <label
                  htmlFor={`paymentSlip_${index}`}
                  className="block text-sm font-medium text-white"
                >
                  Upload Your Payment Registration Slip{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  id={`paymentSlip_${index}`}
                  name="paymentSlip"
                  onChange={(e) => handleFileChange(index, e)}
                  required
                  className="mt-1 block w-full text-sm text-gray-500 border border-gray-300 rounded-md shadow-sm"
                />
              </div>
            )}
          </div>
        ))}

        <div className="mb-4">
          <button
            type="button"
            onClick={handleAddMember}
            className={`w-full py-2 px-4 rounded-md ${
              members.length < 4
                ? "bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            disabled={members.length >= 4}
          >
            {members.length < 4
              ? "Add Another Member"
              : "Maximum Members Reached"}
          </button>
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>

        {status && (
          <div className="mt-4 text-center">
            <p
              className={`text-lg ${
                status.startsWith("Error") ? "text-red-500" : "text-green-500"
              }`}
            >
              {status}
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default MemberDetailsForm;
