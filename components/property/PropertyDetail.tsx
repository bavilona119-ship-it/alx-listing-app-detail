// components/property/PropertyDetail.tsx
import React, { useState } from "react";
import { PropertyProps } from "@/interfaces";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const [activeTab, setActiveTab] = useState("offer");

  return (
    <div className="container mx-auto p-6">
      {/* Header */}
      <h1 className="text-4xl font-bold">{property.name}</h1>
      <div className="flex items-center space-x-2 mt-2 text-gray-600">
        <span className="text-yellow-500 font-semibold">{property.rating} ★</span>
        <span>
          {property.address.city}, {property.address.country}
        </span>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <img
          src={property.image}
          alt={property.name}
          className="col-span-2 w-full h-96 object-cover rounded-lg"
        />
        {/* Add more images here if available */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
        {/* Left Side */}
        <div className="md:col-span-2">
          {/* Tabs */}
          <div className="flex space-x-4 border-b mb-4">
            {["offer", "reviews", "about"].map((tab) => (
              <button
                key={tab}
                className={`pb-2 capitalize ${
                  activeTab === tab
                    ? "border-b-2 border-green-500 text-green-600 font-semibold"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === "offer"
                  ? "What We Offer"
                  : tab === "reviews"
                  ? "Reviews"
                  : "About Host"}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === "offer" && (
            <>
              <h2 className="text-2xl font-semibold mb-2">Description</h2>
              <p className="text-gray-700 mb-4">{property.description}</p>

              <h2 className="text-2xl font-semibold mt-4 mb-2">
                What this place offers
              </h2>
              <ul className="flex flex-wrap gap-2">
                {property.category.map((amenity, index) => (
                  <li
                    key={index}
                    className="bg-gray-200 text-gray-700 px-3 py-2 rounded-md"
                  >
                    {amenity}
                  </li>
                ))}
              </ul>
            </>
          )}

          {activeTab === "reviews" && (
            <ReviewSection reviews={property.reviews} />
          )}

          {activeTab === "about" && (
            <div className="text-gray-700">
              <h2 className="text-2xl font-semibold mb-2">About the Host</h2>
              <p>
                Hosted by <strong>John Doe</strong>, a Superhost known for
                hospitality and excellent communication.
              </p>
            </div>
          )}
        </div>

        {/* Right Side Booking Section */}
        <div className="md:col-span-1">
          <BookingSection price={property.price} />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
