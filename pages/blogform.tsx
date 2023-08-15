import React, { useState } from "react";

interface BlogFormData {
  title: string;
  body: string;
  slug: string;
  userId: string;
}
type Props = {}


// interface BlogFormProps {
//   onSubmit: (formData: BlogFormData) => void;
// }

const BlogForm = (props: Props) => {
  const initialFormData: BlogFormData = {
    title: "",
    body: "",
    slug: "",
    userId: "",
  };

  const [formData, setFormData] = useState<BlogFormData>(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // onSubmit(formData);
    setFormData(initialFormData);

    const apiUrl = "http://localhost:3000/api/postblog"

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
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto my-8 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Create Blog Post</h2>
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-opacity-50 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="body" className="block text-sm font-medium text-gray-700">
          Body
        </label>
        <textarea
          id="body"
          name="body"
          rows={4}
          value={formData.body}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-opacity-50 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="slug" className="block text-sm font-medium text-gray-700">
          Slug
        </label>
        <input
          type="text"
          id="slug"
          name="slug"
          value={formData.slug}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-opacity-50 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="userId" className="block text-sm font-medium text-gray-700">
          User ID
        </label>
        <input
          type="text"
          id="userId"
          name="userId"
          value={formData.userId}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-opacity-50 focus:ring-blue-500"
          required
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-blue-500"
      >
        Create Post
      </button>
    </form>
  );
  }

export default BlogForm;
