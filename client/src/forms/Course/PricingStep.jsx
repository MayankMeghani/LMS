import React from 'react';

const PricingStep = ({ formData, updateFormData }) => {
  // Handle the input change for price and discount
  const handleInputChange = (key, value) => {
    // Ensuring that the value is numeric for price and discount percentage
    const parsedValue = key === 'price' || key === 'discount' ? parseFloat(value) : value;
    updateFormData('pricing', {
      ...formData.pricing,
      [key]: isNaN(parsedValue) ? value : parsedValue,
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Instructor and Pricing Details</h2>

      {/* Course Price */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-semibold">Course Price (USD)</span>
        </label>
        <input
          type="number"
          className="input input-bordered"
          placeholder="Enter course price"
          value={formData.pricing?.price || ""}
          onChange={(e) => handleInputChange("price", e.target.value)}
          aria-label="Course Price"
          min="0"
        />
      </div>

      {/* Discount Option */}
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text font-semibold">Offer Discount?</span>
          <input
            type="checkbox"
            className="toggle toggle-primary"
            checked={formData.pricing?.discountEnabled || false}
            onChange={(e) => handleInputChange("discountEnabled", e.target.checked)}
            aria-label="Enable discount"
          />
        </label>
      </div>

      {/* Discount Percentage */}
      {formData.pricing?.discountEnabled && (
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Discount Percentage</span>
          </label>
          <input
            type="number"
            className="input input-bordered"
            placeholder="Enter discount percentage"
            value={formData.pricing?.discount || ""}
            onChange={(e) => handleInputChange("discount", e.target.value)}
            aria-label="Discount Percentage"
            min="0"
            max="100"
          />
        </div>
      )}
    </div>
  );
};

export default PricingStep;
