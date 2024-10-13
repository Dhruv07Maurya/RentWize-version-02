import React, { useState } from "react";

const Review = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      user: "John Doe",
      image: "https://via.placeholder.com/40",
      rating: 3,
      title: "This product is so goated",
      content: "We jumped on it but it didn't break.",
    },
    {
      id: 2,
      user: "Jane Smith",
      image: "https://via.placeholder.com/40",
      rating: 4,
      title: "This Lorem ipsum dolor sit.",
      content: "We Lorem ipsum dolor sit amet consectetur.",
    },
    {
      id: 3,
      user: "Alice Johnson",
      image: "https://via.placeholder.com/40",
      rating: 5,
      title: "This product is so goated",
      content: "We jumped on it but it didn't break.",
    },
  ]);

  const [newReview, setNewReview] = useState({
    user: "",
    image: "",
    rating: 0,
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the new review to the list
    setReviews([
      ...reviews,
      {
        ...newReview,
        id: reviews.length + 1, // Assign a new ID
      },
    ]);
    // Reset the form
    setNewReview({
      user: "",
      image: "",
      rating: 0,
      title: "",
      content: "",
    });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Product Reviews
        </h1>

        {/* Form for submitting new reviews */}

        {/* Display existing reviews */}
        {reviews.map((review) => (
          <div key={review.id} className="border-b pb-6 mb-6">
            <div className="flex items-center mb-4">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src={review.image || "https://via.placeholder.com/40"}
                alt={review.user}
              />
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  {review.user}
                </h2>
                <div className="flex">
                  {[...Array(review.rating)].map((star, index) => (
                    <svg
                      key={index}
                      className="w-5 h-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.946a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.286 3.946c.3.921-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.175 0l-3.36 2.44c-.784.57-1.84-.197-1.54-1.118l1.286-3.946a1 1 0 00-.364-1.118l-3.36-2.44c-.784-.57-.381-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.946z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              {review.title}
            </h3>
            <p className="text-gray-600">{review.content}</p>
          </div>
        ))}

        <form onSubmit={handleSubmit} className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Submit a Review
          </h2>
          <input
            type="text"
            name="user"
            placeholder="Your Name"
            value={newReview.user}
            onChange={handleChange}
            required
            className="w-full mb-2 p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={newReview.image}
            onChange={handleChange}
            className="w-full mb-2 p-2 border border-gray-300 rounded"
          />
          <input
            type="number"
            name="rating"
            placeholder="Rating (1-5)"
            value={newReview.rating}
            onChange={handleChange}
            min="1"
            max="5"
            required
            className="w-full mb-2 p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="title"
            placeholder="Review Title"
            value={newReview.title}
            onChange={handleChange}
            required
            className="w-full mb-2 p-2 border border-gray-300 rounded"
          />
          <textarea
            name="content"
            placeholder="Your Review"
            value={newReview.content}
            onChange={handleChange}
            required
            className="w-full mb-4 p-2 border border-gray-300 rounded"
            rows="4"
          />
          <button
            type="submit"
            className="w-full bg-pink-600 text-white p-2 rounded"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default Review;
