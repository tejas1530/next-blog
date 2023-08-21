import React, { useState } from "react";

type Props = {
  
}

interface FormData {
  name: string;
  email: string;
  message: string;
}



const Contact = (props: Props) => {
  const initialFormData: FormData = {
    name: "",
    email: "",
    message: "",
  };
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    alert("from submitted")
    // You can perform further actions, such as sending data to a server

    const apiUrl = "http://localhost:3000/api/postcontact"

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const data = await response.json();
      console.log("Post response:", data);
      // You can perform further actions with the response data
    } catch (error) {
      console.error("Error:", error);
      // Handle error as needed
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto my-8 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-opacity-50 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-opacity-50 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-opacity-50 focus:ring-blue-500"
          required
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-blue-500"
      >
        Submit
      </button>
    </form>
  );
};

export default Contact;
