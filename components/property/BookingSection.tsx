// components/property/BookingSection.tsx
import React, { useState, useMemo } from "react";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const totalDays = useMemo(() => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);
    return diff > 0 ? diff : 0;
  }, [checkIn, checkOut]);

  const totalPayment = totalDays * price;

  return (
    <div className="bg-white p-6 shadow-md rounded-lg sticky top-24">
      <h3 className="text-xl font-semibold">${price}/night</h3>

      {/* Check-in */}
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-600">
          Check-in
        </label>
        <input
          type="date"
          className="border p-2 w-full mt-1 rounded-md"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
        />
      </div>

      {/* Check-out */}
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-600">
          Check-out
        </label>
        <input
          type="date"
          className="border p-2 w-full mt-1 rounded-md"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
        />
      </div>

      {/* Total payment */}
      <div className="mt-4">
        <p>
          Total payment:{" "}
          <strong>${totalPayment > 0 ? totalPayment : 0}</strong>
        </p>
      </div>

      {/* Reserve button */}
      <button
        disabled={totalDays === 0}
        className="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md w-full"
      >
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;
