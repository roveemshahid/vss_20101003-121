import React from 'react';
import './style.css';

export default function App() {
  const personalInfo = {
    name: 'Roveem',
    email: 'roveemshahid7@gmail.com',
    phone: '123-456-7890',
    address: 'Mayan pora, Sialkot, pakistan',
  };

  const education = [
    {
      degree: 'Bachelor of IT',
      school: 'University of Sialkot',
      year: '2010-2014',
    },
  ];

  const experience = [
    {
      position: 'Software Engineer',
      company: 'Tech Solutions Inc.',
      year: '2020-2024',
      responsibilities: [
        'Developed and maintained web applications.',
        'Collaborated with cross-functional teams.',
        'Troubleshooted and debugged software issues.',
      ],
    },
  ];
  return (
    <div className="cv-container">
      <div className="personal-info">
        <h1>{personalInfo.name}</h1>
        <p>Email: {personalInfo.email}</p>
        <p>Phone: {personalInfo.phone}</p>
        <p>Address: {personalInfo.address}</p>
      </div>

      <div className="education">
        <h2>Education</h2>
        {education.map((edu, index) => (
          <div key={index}>
            <p>{edu.degree}</p>
            <p>{edu.school}</p>
            <p>{edu.year}</p>
          </div>
        ))}
      </div>

      <div className="experience">
        <h2>Experience</h2>
        {experience.map((exp, index) => (
          <div key={index}>
            <p>{exp.position}</p>
            <p>{exp.company}</p>
            <p>{exp.year}</p>
            <ul>
              {exp.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
