// constants/index.ts
import { PropertyProps } from "@/interfaces";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Modern Apartment",
    rating: 4.8,
    address: { city: "Nairobi", country: "Kenya" },
    image: "/images/apartment.jpg",
    description:
      "Experience modern living in the heart of the city with stunning views and premium amenities.",
    category: ["Wi-Fi", "Air Conditioning", "Kitchen", "Free Parking"],
    price: 120,
    reviews: [
      {
        name: "Alice Johnson",
        avatar: "/images/user1.jpg",
        rating: 5,
        comment: "Amazing stay! The apartment was clean and cozy.",
      },
      {
        name: "Michael Lee",
        avatar: "/images/user2.jpg",
        rating: 4,
        comment: "Great location, will definitely book again.",
      },
    ],
  },
  {
    name: "Beach House",
    rating: 4.6,
    address: { city: "Mombasa", country: "Kenya" },
    image: "/images/beach.jpg",
    description:
      "Relax in this beautiful beach house with ocean views, perfect for family vacations.",
    category: ["Pool", "Beach Access", "Wi-Fi", "Breakfast"],
    price: 200,
    reviews: [
      {
        name: "Sarah Kim",
        avatar: "/images/user3.jpg",
        rating: 5,
        comment: "The beach view was incredible and the host was very helpful!",
      },
    ],
  },
];
