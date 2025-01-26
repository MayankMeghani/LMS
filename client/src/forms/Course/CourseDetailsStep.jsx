const CourseDetailsStep = ({ formData, updateFormData }) => {
  const details = formData.details;

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Course Details</h2>

      {/* Course Level */}
      <div className="form-control">
        <label htmlFor="course-level" className="label font-medium">
          Course Level
        </label>
        <select
          id="course-level"
          className="select select-bordered w-full"
          value={details.level}
          onChange={(e) =>
            updateFormData("details", {
              ...details,
              level: e.target.value,
            })
          }
        >
          <option value="">Select Level</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>

      {/* Course Language */}
      <div className="form-control">
        <label htmlFor="course-language" className="label font-medium">
          Language
        </label>
        <input
          id="course-language"
          type="text"
          className="input input-bordered w-full"
          placeholder="e.g., English"
          value={details.language || ""}
          onChange={(e) =>
            updateFormData("details", {
              ...details,
              language: e.target.value,
            })
          }
        />
      </div>
    </div>
  );
};

export default CourseDetailsStep;
