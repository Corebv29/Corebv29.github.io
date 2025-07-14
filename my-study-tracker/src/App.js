import React, { useState } from 'react';

// Main App component for the Active Recall Study Tracker
const App = () => {
  // State to hold all study entries. Each entry is an object.
  const [studyEntries, setStudyEntries] = useState([]);

  /**
   * Handles changes to input fields within the table rows.
   * @param {number} index - The index of the entry in the studyEntries array.
   * @param {string} field - The name of the field being updated (e.g., 'date', 'topic').
   * @param {string} value - The new value for the field.
   */
  const handleChange = (index, field, value) => {
    // Create a mutable copy of the entries array
    const updatedEntries = [...studyEntries];
    // Update the specific field of the specific entry
    updatedEntries[index][field] = value;
    // Set the state with the updated array, triggering a re-render
    setStudyEntries(updatedEntries);
  };

  /**
   * Adds a new, empty row to the study tracker table.
   * Initializes all fields for the new entry to empty strings.
   */
  const addRow = () => {
    setStudyEntries([
      ...studyEntries,
      {
        date: '',
        topic: '',
        concept: '',
        studyType: '',
        questions: '',
        confidence: '',
        struggled: '',
        nextReviewDate: '',
      },
    ]);
  };

  /**
   * Deletes a row from the study tracker table.
   * @param {number} indexToDelete - The index of the entry to be deleted.
   */
  const deleteRow = (indexToDelete) => {
    // Filter out the entry at the specified index
    const updatedEntries = studyEntries.filter((_, index) => index !== indexToDelete);
    // Update the state with the new array, effectively deleting the row
    setStudyEntries(updatedEntries);
  };

  return (
    // Main container for the application with responsive padding and background
    <div className="p-4 sm:p-6 md:p-8 bg-gray-100 min-h-screen font-sans antialiased">
      {/* Page Title */}
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-6 sm:mb-8 tracking-tight">
        📚 Active Recall Study Tracker
      </h1>

      {/* Table Container with responsive overflow and styling */}
      <div className="overflow-x-auto bg-white rounded-xl shadow-lg p-4 ring-1 ring-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          {/* Table Header */}
          <thead className="bg-gray-50">
            <tr>
              {/* Table Headers with consistent styling */}
              <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider rounded-tl-lg">Date</th>
              <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Topic</th>
              <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Concept/Chapter</th>
              <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Study Type</th>
              <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Questions/Prompts</th>
              <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Confidence (1-5)</th>
              <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Struggled?</th>
              <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Next Review Date</th>
              {/* New Delete Column Header */}
              <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider rounded-tr-lg">Actions</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody className="bg-white divide-y divide-gray-200">
            {/* Map through studyEntries to render each row */}
            {studyEntries.map((entry, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors duration-150">
                {/* Date Input */}
                <td className="px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap">
                  <input
                    type="date"
                    value={entry.date}
                    onChange={(e) => handleChange(index, 'date', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm shadow-sm"
                  />
                </td>
                {/* Topic Input */}
                <td className="px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap">
                  <input
                    type="text"
                    value={entry.topic}
                    onChange={(e) => handleChange(index, 'topic', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm shadow-sm"
                    placeholder="e.g., Python"
                  />
                </td>
                {/* Concept/Chapter Input */}
                <td className="px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap">
                  <input
                    type="text"
                    value={entry.concept}
                    onChange={(e) => handleChange(index, 'concept', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm shadow-sm"
                    placeholder="e.g., Variables & Data Types"
                  />
                </td>
                {/* Study Type Dropdown */}
                <td className="px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap">
                  <select
                    value={entry.studyType}
                    onChange={(e) => handleChange(index, 'studyType', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm shadow-sm bg-white"
                  >
                    <option value="">Select...</option>
                    <option value="New Learning">New Learning</option>
                    <option value="Revisit">Revisit</option>
                  </select>
                </td>
                {/* Questions/Prompts Textarea */}
                <td className="px-4 py-2 sm:px-6 sm:py-4">
                  <textarea
                    value={entry.questions}
                    onChange={(e) => handleChange(index, 'questions', e.target.value)}
                    rows="2"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm shadow-sm resize-y"
                    placeholder="e.g., What are the 5 basic data types? What is a loop?"
                  ></textarea>
                </td>
                {/* Confidence Score Dropdown */}
                <td className="px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap">
                  <select
                    value={entry.confidence}
                    onChange={(e) => handleChange(index, 'confidence', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm shadow-sm bg-white"
                  >
                    <option value="">Select...</option>
                    <option value="1">1 (Forgot)</option>
                    <option value="2">2 (Vague)</option>
                    <option value="3">3 (Some Gaps)</option>
                    <option value="4">4 (Mostly Knew)</option>
                    <option value="5">5 (Perfect)</option>
                  </select>
                </td>
                {/* Struggled? Dropdown */}
                <td className="px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap">
                  <select
                    value={entry.struggled}
                    onChange={(e) => handleChange(index, 'struggled', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm shadow-sm bg-white"
                  >
                    <option value="">Select...</option>
                    <option value="Y">Y</option>
                    <option value="N">N</option>
                  </select>
                </td>
                {/* Next Review Date Input */}
                <td className="px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap">
                  <input
                    type="date"
                    value={entry.nextReviewDate}
                    onChange={(e) => handleChange(index, 'nextReviewDate', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm shadow-sm"
                  />
                </td>
                {/* Delete Button */}
                <td className="px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-center">
                  <button
                    onClick={() => deleteRow(index)}
                    className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 text-sm"
                    title="Delete Row"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Button to add a new row */}
      <div className="mt-8 flex justify-center">
        <button
          onClick={addRow}
          className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2"
        >
          Add New Study Entry
        </button>
      </div>

      {/* Instructions/Tips Section */}
      <div className="mt-10 p-6 bg-white rounded-xl shadow-lg ring-1 ring-gray-200">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">How to Use This Tracker:</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            **Date & Next Review Date:** Use the calendar picker to select dates.
          </li>
          <li>
            **Study Type:** Select "New Learning" for your first encounter with a concept, and "Revisit" for subsequent reviews.
          </li>
          <li>
            **Questions/Key Recall Prompts:** This is your active recall.
            <ul className="list-circle list-inside ml-4 mt-1">
              <li>**New Learning:** As you read, turn headings/key ideas into questions or list main points.</li>
              <li>**Revisit:** *Before* opening the book, try to answer these prompts from memory.</li>
            </ul>
          </li>
          <li>
            **Confidence Score (1-5):** Rate your recall *after* attempting to remember (for "Revisit" sessions) or after your initial learning.
          </li>
          <li>
            **Struggled? (Y/N):** Mark 'Y' if you had difficulty recalling or understanding.
          </li>
          <li>
            **Next Review Date (Spaced Repetition):**
            <ul className="list-circle list-inside ml-4 mt-1">
              <li>**New Learning:** Set to `Date + 2 days`.</li>
              <li>**Revisit (High Confidence/No Struggle):** Advance to the next interval (e.g., if current was `+2`, make it `+5`).</li>
              <li>**Revisit (Medium/Low Confidence or Struggled 'Y'):** Shorten the interval (e.g., repeat the current interval, or even go back to `+2` if needed).</li>
            </ul>
          </li>
        </ul>
        <p className="mt-4 text-gray-600 italic">
          Remember, the key is consistent active recall before revisiting your book for deeper understanding.
        </p>
      </div>
    </div>
  );
};

export default App;
