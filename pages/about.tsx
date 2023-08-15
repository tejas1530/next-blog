import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <main title="About">
      <div className="max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-semibold mb-4">About Us</h1>
        <p className="text-gray-700">
          Welcome to our About page! We are a team of passionate individuals dedicated to creating high-quality web applications.
        </p>
        <p className="mt-4 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus nulla in nunc lacinia, nec egestas sapien aliquet.
        </p>
      </div>
    </main>
  )
}

export default About