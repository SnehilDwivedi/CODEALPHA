import React, { useState } from 'react';
import "./main.css"
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { Document, Page, Text, View,StyleSheet  } from '@react-pdf/renderer';



const Resume = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [experience, setExperience] = useState([
    { company: 'KlowdBox', address: 'San Fr, CA', duration: 'Jan 2011 - Feb 2015', role: 'Fr developer', description: 'did This and that' },
    { company: 'Akount', address: 'San Monica, CA', duration: 'Jan 2011 - Feb 2015', role: 'Fr developer', description: 'did This and that' }
  ]);
  const [education, setEducation] = useState([
    { institute: 'Sample Institute of technology', address: 'San Fr, CA', duration: 'Jan 2011 - Feb 2015', degree: 'Fr developer', description: 'did This and that' },
    { institute: 'Akount', address: 'San Monica, CA', duration: 'Jan 2011 - Feb 2015', degree: 'Fr developer', description: 'did This and that' }
  ]);


  const [projects, setProjects] = useState([
    { name: 'DSP', description: 'I am a front-end developer with more than 3 years of experience writing HTML, CSS, and JS. I\'m motivated, result-focused and seeking a successful team-oriented company with opportunity to grow.' },
    { name: 'DSP', description: 'I am a front-end developer with more than 3 years of experience writing HTML, CSS, and JS. I\'m motivated, result-focused and seeking a successful team-oriented company with opportunity to grow.' }
  ]);
  const [skills, setSkills] = useState('python, Nodejs');
  const [interests, setInterests] = useState('Football, programming.');




  const handleExperienceChange = (index, field, value) => {
    const updatedExperience = [...experience];
    updatedExperience[index][field] = value;
    setExperience(updatedExperience);
  };

  const handleEducationChange = (index, field, value) => {
    const updatedEducation = [...education];
    updatedEducation[index][field] = value;
    setEducation(updatedEducation);
  };

  const handleProjectsChange = (index, field, value) => {
    const updatedProjects = [...projects];
    updatedProjects[index][field] = value;
    setProjects(updatedProjects);
  };

  const handleSkillsChange = (value) => {
    setSkills(value)
  };

  const handleInterestsChange = (value) => {
    setInterests(value);
  };




  return (
    <>


      <div className="container">
        <div className="row">


          <div className="col">
            <h2>Personal Details</h2>
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name:</Form.Label>
              <Form.Control
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formLastName">
              <Form.Label>Last Name:</Form.Label>
              <Form.Control
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>



            <Form.Group controlId="formEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formPhone">
              <Form.Label>Phone:</Form.Label>
              <Form.Control
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>



          </div>


          <div className="col">

            <h2>Experience</h2>
            {experience.map((exp, index) => (
              <div key={index}>
                <Form.Group >
                  <Form.Label column sm={2}>Company:</Form.Label>

                  <Form.Control
                    type="text"
                    value={exp.company}
                    onChange={(e) =>
                      handleExperienceChange(index, 'company', e.target.value)
                    }
                  />

                </Form.Group>

                <Form.Group >
                  <Form.Label column sm={2}>Address:</Form.Label>

                  <Form.Control
                    type="text"
                    value={exp.address}
                    onChange={(e) =>
                      handleExperienceChange(index, 'address', e.target.value)
                    }
                  />

                </Form.Group>

                <Form.Group >
                  <Form.Label column sm={2}>Duration:</Form.Label>

                  <Form.Control
                    type="text"
                    value={exp.duration}
                    onChange={(e) =>
                      handleExperienceChange(index, 'duration', e.target.value)
                    }
                  />

                </Form.Group>

                <Form.Group >
                  <Form.Label column sm={2}>Role:</Form.Label>

                  <Form.Control
                    type="text"
                    value={exp.role}
                    onChange={(e) =>
                      handleExperienceChange(index, 'role', e.target.value)
                    }
                  />

                </Form.Group>

                <Form.Group >
                  <Form.Label column sm={2}>Description:</Form.Label>

                  <Form.Control
                    type="text"
                    value={exp.description}
                    onChange={(e) =>
                      handleExperienceChange(index, 'description', e.target.value)
                    }
                  />

                </Form.Group>

                <hr />
              </div>
            ))}

           



          </div>


          <div className="col">
            <h2>Projects</h2>
            {projects.map((project, index) => (
              <div key={index}>
                <Form.Group controlId={`projectName${index}`}>
                  <Form.Label>Name:</Form.Label>
                  <Form.Control
                    type="text"
                    value={project.name}
                    onChange={(e) =>
                      handleProjectsChange(index, 'name', e.target.value)
                    }
                  />
                </Form.Group>
                <Form.Group controlId={`projectDescription${index}`}>
                  <Form.Label>Description:</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={project.description}
                    onChange={(e) =>
                      handleProjectsChange(index, 'description', e.target.value)
                    }
                  />
                </Form.Group>
                <hr />
              </div>
            ))}

            <h2>Skills</h2>
            <Form.Group controlId="interests">
              <Form.Control
                as="textarea"
                rows={3}
                value={skills}
                onChange={(e) => handleSkillsChange(e.target.value)}
              />
            </Form.Group>



            <h2>Interests</h2>
            <Form.Group controlId="interests">
              <Form.Control
                as="textarea"
                rows={3}
                value={interests}
                onChange={(e) => handleInterestsChange(e.target.value)}
              />
            </Form.Group>

          </div>


          <div className="col">
          <h2>Education</h2>
            {education.map((edu, index) => (
              <div key={index}>
                <Form.Group >
                  <Form.Label column sm={2}>Institute:</Form.Label>

                  <Form.Control
                    type="text"
                    value={edu.institute}
                    onChange={(e) =>
                      handleEducationChange(index, 'institute', e.target.value)
                    }
                  />

                </Form.Group>

                <Form.Group >
                  <Form.Label column sm={2}>Address:</Form.Label>

                  <Form.Control
                    type="text"
                    value={edu.address}
                    onChange={(e) =>
                      handleEducationChange(index, 'address', e.target.value)
                    }
                  />

                </Form.Group>

                <Form.Group >
                  <Form.Label column sm={2}>Duration:</Form.Label>

                  <Form.Control
                    type="text"
                    value={edu.duration}
                    onChange={(e) =>
                      handleEducationChange(index, 'duration', e.target.value)
                    }
                  />

                </Form.Group>

                <Form.Group >
                  <Form.Label column sm={2}>Degree:</Form.Label>

                  <Form.Control
                    type="text"
                    value={edu.degree}
                    onChange={(e) =>
                      handleEducationChange(index, 'degree', e.target.value)
                    }
                  />

                </Form.Group>

                <Form.Group >
                  <Form.Label column sm={2}>Description:</Form.Label>

                  <Form.Control
                    type="text"
                    value={edu.description}
                    onChange={(e) =>
                      handleEducationChange(index, 'description', e.target.value)
                    }
                  />

                </Form.Group>

                <hr />
              </div>
            ))}
          </div>

        </div>
      </div>











      {/* reusme-------------------------------------------------------------- */}

      
      <div style={{backgroundColor:"white"}} className="container text-dark">
        <div className="header">
          <div className="full-name">
            <span className="first-name">{firstName}</span>
            <span className="last-name">{lastName}</span>
          </div>
          <div className="contact-info">
            <span className="email">Email: </span>
            <span className="email-val">{email}</span>
            <span className="separator"></span>
            <span className="phone">Phone: </span>
            <span className="phone-val">{phone}</span>
          </div>
          <div className="about">
            <span className="position">Front-End Developer </span>
            <span className="desc">
              I am a front-end developer with more than 3 years of experience writing HTML, CSS, and JS. I'm motivated,
              result-focused and seeking a successful team-oriented company with opportunity to grow.
            </span>
          </div>
        </div>

        <div className="details">
          <div className="section">
            <div className="section__title">Experience</div>
            <div className="section__list">
              {experience.map((exp, index) => (
                <div className="section__list-item" key={index}>
                  <div className="left">
                    <div className="name">{exp.company}</div>
                    <div className="addr">{exp.address}</div>
                    <div className="duration">{exp.duration}</div>
                  </div>
                  <div className="right">
                    <div className="name">{exp.role}</div>
                    <div className="desc">{exp.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="section">
            <div className="section__title">Education</div>
            <div className="section__list">
              {education.map((edu, index) => (
                <div className="section__list-item" key={index}>
                  <div className="left">
                    <div className="name">{edu.institute}</div>
                    <div className="addr">{edu.address}</div>
                    <div className="duration">{edu.duration}</div>
                  </div>
                  <div className="right">
                    <div className="name">{edu.degree}</div>
                    <div className="desc">{edu.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="section">
            <div className="section__title">Projects</div>
            <div className="section__list">
              {projects.map((project, index) => (
                <div className="section__list-item" key={index}>
                  <div className="name">{project.name}</div>
                  <div className="text">{project.description}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="section">
            <div className="section__title">SkILLS</div>
            <div className="section__list">
              <div className="section__list-item">{skills}</div>
            </div>
          </div>

          <div className="section">
            <div className="section__title">Interests</div>
            <div className="section__list">
              <div className="section__list-item">{interests}</div>
            </div>
          </div>
        </div>
      </div> 

 


    </>

  );
};

export default Resume;




