import React, { useContext } from "react";
import myContext from "../context/myContext";
import faq from './faq';

const Testimonial = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6 text-center">FAQ</h1>
            <ul className="space-y-4">
                {faq.map((item, index) => (
                    <li key={index} className="bg-white shadow-2xl rounded-lg p-6">
                        <h2 className="text-xl font-semibold mb-2">{item.question}</h2>
                        <p className="text-gray-700">{item.answer}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Testimonial;
