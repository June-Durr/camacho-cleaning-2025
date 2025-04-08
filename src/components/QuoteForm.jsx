import React, { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { API_ENDPOINT, SIMULATE_API } from "../aws-config";

const QuoteForm = ({ isOpen, onClose }) => {
  // Form state
  const [formData, setFormData] = useState({
    id: uuidv4(), // Generate a unique ID for each submission
    fullName: "",
    email: "",
    phone: "",
    zipCode: "",
    serviceType: "residential",
    propertySize: "",
    frequency: "weekly",
    message: "",
    timestamp: new Date().toISOString(),
  });

  // New state for validation errors
  const [errors, setErrors] = useState({});

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  const modalRef = useRef(null);

  // Validation functions
  const validateFullName = (name) => {
    if (!name.trim()) return "Full name is required";
    if (name.trim().length < 2)
      return "Full name must be at least 2 characters";
    const nameparts = name.trim().split(/\s+/);
    if (nameparts.length < 2) return "Please enter first and last name";
    return "";
  };

  const validateEmail = (email) => {
    if (!email.trim()) return "Email is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return "Please enter a valid email address";
    }
    return "";
  };

  const validatePhone = (phone) => {
    if (!phone.trim()) return "Phone number is required";

    // Remove non-digit characters
    const cleanedPhone = phone.replace(/\D/g, "");

    // Check for 10 digit phone number
    if (cleanedPhone.length !== 10) {
      return "Please enter a valid 10-digit phone number";
    }
    return "";
  };

  // Comprehensive form validation
  const validateForm = () => {
    const newErrors = {};

    // Validate each field
    const fullNameError = validateFullName(formData.fullName);
    if (fullNameError) newErrors.fullName = fullNameError;

    const emailError = validateEmail(formData.email);
    if (emailError) newErrors.email = emailError;

    const phoneError = validatePhone(formData.phone);
    if (phoneError) newErrors.phone = phoneError;

    return newErrors;
  };

  // Handle form input changes with real-time validation
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Optional: Clear specific error when user starts typing
    if (errors[name]) {
      const { [name]: removedError, ...rest } = errors;
      setErrors(rest);
    }
  };

  // Handle explicit step navigation
  const goToPreviousStep = () => {
    setCurrentStep(1);
  };

  // Handle step navigation with validation
  const goToNextStep = () => {
    const stepOneErrors = {};

    const fullNameError = validateFullName(formData.fullName);
    if (fullNameError) stepOneErrors.fullName = fullNameError;

    const emailError = validateEmail(formData.email);
    if (emailError) stepOneErrors.email = emailError;

    const phoneError = validatePhone(formData.phone);
    if (phoneError) stepOneErrors.phone = phoneError;

    // If any errors, set them and prevent moving to next step
    if (Object.keys(stepOneErrors).length > 0) {
      setErrors(stepOneErrors);
      return;
    }

    // Move to next step if no errors
    setCurrentStep(2);
  };

  // Submit form data to AWS API Gateway
  const submitToAWS = async (formData) => {
    try {
      console.log("Submitting to API:", API_ENDPOINT);

      const response = await fetch(`${API_ENDPOINT}/quotes`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Response status:", response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error response:", errorText);
        throw new Error(
          `HTTP error! status: ${response.status}, message: ${errorText}`
        );
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Detailed error submitting form:", error);
      throw new Error(`Network error: ${error.message}`);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate entire form before submission
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      // Add timestamp for when the form is submitted
      const dataToSubmit = {
        ...formData,
        timestamp: new Date().toISOString(),
      };

      console.log("Form data to submit:", dataToSubmit);

      let result;
      if (SIMULATE_API) {
        // Use simulation in development
        console.log("DEVELOPMENT MODE: Simulating successful API submission");
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Fake delay
        result = {
          message: "Form submitted successfully (SIMULATION MODE)",
          id: dataToSubmit.id,
        };
      } else {
        // Use actual API
        result = await submitToAWS(dataToSubmit);
      }

      console.log("Submission result:", result);

      // Show success message
      setIsSuccess(true);

      // Reset form after delay
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
        setCurrentStep(1);
        setFormData({
          id: uuidv4(),
          fullName: "",
          email: "",
          phone: "",
          zipCode: "",
          serviceType: "residential",
          propertySize: "",
          frequency: "weekly",
          message: "",
          timestamp: new Date().toISOString(),
        });
        setErrors({});
      }, 3000);
    } catch (err) {
      setError(
        err.message ||
          "There was a problem submitting your form. Please try again."
      );
      console.error("Form submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Component render code
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-xl w-full max-w-md md:max-w-lg mx-4 my-8"
      >
        <div className="relative">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-t-lg p-6">
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className="text-2xl font-bold text-white">
              Get Your Free Cleaning Estimate
            </h2>
            <p className="text-blue-100 mt-2">
              Fill out the form and we'll contact you with a customized quote.
            </p>
          </div>

          {/* Form content */}
          <div className="p-6">
            {isSuccess ? (
              <div className="text-center py-8">
                <svg
                  className="mx-auto h-16 w-16 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <h3 className="mt-4 text-xl font-semibold text-gray-800">
                  Thank You!
                </h3>
                <p className="mt-2 text-gray-600">
                  Your request has been submitted successfully. We'll be in
                  touch soon!
                </p>
              </div>
            ) : (
              <>
                {/* Error message if submission fails */}
                {error && (
                  <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                    <p>{error}</p>
                  </div>
                )}

                {/* Progress indicator - now just 2 steps */}
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span
                      className={`text-sm ${
                        currentStep >= 1
                          ? "text-blue-600 font-semibold"
                          : "text-gray-500"
                      }`}
                    >
                      Contact Info
                    </span>
                    <span
                      className={`text-sm ${
                        currentStep >= 2
                          ? "text-blue-600 font-semibold"
                          : "text-gray-500"
                      }`}
                    >
                      Service Details
                    </span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600"
                      style={{ width: `${(currentStep / 2) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Step 1: Contact Information */}
                {currentStep === 1 && (
                  <div>
                    <div className="space-y-4">
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-gray-700 font-medium mb-1"
                        >
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border ${
                            errors.fullName
                              ? "border-red-500 focus:ring-red-500"
                              : "border-gray-300 focus:ring-blue-500"
                          } rounded-md focus:outline-none focus:ring-2`}
                          required
                        />
                        {errors.fullName && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.fullName}
                          </p>
                        )}
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-gray-700 font-medium mb-1"
                          >
                            Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border ${
                              errors.email
                                ? "border-red-500 focus:ring-red-500"
                                : "border-gray-300 focus:ring-blue-500"
                            } rounded-md focus:outline-none focus:ring-2`}
                            required
                          />
                          {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.email}
                            </p>
                          )}
                        </div>
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-gray-700 font-medium mb-1"
                          >
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border ${
                              errors.phone
                                ? "border-red-500 focus:ring-red-500"
                                : "border-gray-300 focus:ring-blue-500"
                            } rounded-md focus:outline-none focus:ring-2`}
                            required
                          />
                          {errors.phone && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.phone}
                            </p>
                          )}
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="zipCode"
                          className="block text-gray-700 font-medium mb-1"
                        >
                          Zip Code <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="zipCode"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                    </div>

                    <div className="mt-6 flex justify-end">
                      <button
                        type="button"
                        onClick={goToNextStep}
                        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 2: Service Details - Form wrapped here */}
                {currentStep === 2 && (
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div>
                        <label
                          htmlFor="serviceType"
                          className="block text-gray-700 font-medium mb-1"
                        >
                          Service Type
                        </label>
                        <select
                          id="serviceType"
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="residential">
                            Residential Cleaning
                          </option>
                          <option value="commercial">
                            Commercial Cleaning
                          </option>
                          <option value="deep">Deep Cleaning</option>
                          <option value="move">Move In/Out Cleaning</option>
                          <option value="other">Other Services</option>
                        </select>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="propertySize"
                            className="block text-gray-700 font-medium mb-1"
                          >
                            Property Size
                          </label>
                          <select
                            id="propertySize"
                            name="propertySize"
                            value={formData.propertySize}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            <option value="">Select property size</option>
                            <option value="small">
                              Small (up to 1,000 sq ft)
                            </option>
                            <option value="medium">
                              Medium (1,000-2,000 sq ft)
                            </option>
                            <option value="large">
                              Large (2,000-3,000 sq ft)
                            </option>
                            <option value="xl">
                              Extra Large (3,000+ sq ft)
                            </option>
                          </select>
                        </div>
                        <div>
                          <label
                            htmlFor="frequency"
                            className="block text-gray-700 font-medium mb-1"
                          >
                            Service Frequency
                          </label>
                          <select
                            id="frequency"
                            name="frequency"
                            value={formData.frequency}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            <option value="weekly">Weekly</option>
                            <option value="biweekly">Bi-weekly</option>
                            <option value="monthly">Monthly</option>
                            <option value="once">One-time</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-gray-700 font-medium mb-1"
                        >
                          Additional Information
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows="4"
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Tell us more about your specific cleaning needs..."
                        ></textarea>
                      </div>

                      <div className="mt-2 text-sm text-gray-600">
                        <p>
                          By submitting this form, you agree to be contacted
                          about our cleaning services.
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex justify-between">
                      <button
                        type="button"
                        onClick={goToPreviousStep}
                        className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
                      >
                        Back
                      </button>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-400"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Submitting...
                          </span>
                        ) : (
                          "Submit Request"
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteForm;
