import React from "react";

function Projects() {
  return (
    <div
      style={{
        backgroundColor: "#f3f4f6",
        minHeight: "100vh",
        padding: "30px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#1f2937",
          marginBottom: "30px",
        }}
      >
        My Projects
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "25px",
        }}
      >
        {/* Project 1 */}
        <div
          style={{
            backgroundColor: '#e8f1ff',
            color: '#1f2937',
            padding: "25px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          }}
        >
          <h2>CP Pharma</h2>
          <p>
            A responsive medicine ordering website developed using Flask,
            HTML, CSS, and JavaScript.
          </p>

          <h3>Features</h3>
          <ul>
            <li>Upload prescriptions</li>
            <li>Medicine ordering</li>
            <li>Admin dashboard</li>
            <li>Responsive design</li>
          </ul>

          <p>
            <strong>Technologies:</strong> Flask, Python, HTML, CSS,
            JavaScript
          </p>
        </div>

        {/* Project 2 */}
        <div
          style={{
            backgroundColor: '#e8f1ff',
            color: '#1f2937',
            padding: "25px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          }}
        >
          <h2>Portfolio Website</h2>

          <p>
            A personal portfolio showcasing my skills, education,
            certificates, and projects.
          </p>

          <h3>Features</h3>
          <ul>
            <li>Modern UI</li>
            <li>React Router Navigation</li>
            <li>Responsive Layout</li>
            <li>Project Showcase</li>
          </ul>

          <p>
            <strong>Technologies:</strong> React, HTML, CSS
          </p>
        </div>

        {/* Project 3 */}
        <div
          style={{
            backgroundColor: '#e8f1ff',
            color: '#1f2937',
            padding: "25px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          }}
        >
          <h2>Stock Price Monitor</h2>

          <p>
            Java application that fetches live stock prices using the Yahoo
            Finance API and stores updates in a queue.
          </p>

          <h3>Features</h3>
          <ul>
            <li>Live stock prices</li>
            <li>Queue implementation</li>
            <li>Automatic refresh</li>
            <li>Time-stamped records</li>
          </ul>

          <p>
            <strong>Technologies:</strong> Java, Yahoo Finance API
          </p>
        </div>

        {/* Project 4 */}
        <div
          style={{
            backgroundColor: '#e8f1ff',
            color: '#1f2937',
            padding: "25px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          }}
        >
          <h2>Future Project</h2>

          <p>
            A placeholder for upcoming projects involving AI, cloud
            computing, and full-stack development.
          </p>

          <h3>Planned Features</h3>
          <ul>
            <li>AI Integration</li>
            <li>Cloud Deployment</li>
            <li>User Authentication</li>
            <li>Database Management</li>
          </ul>

          <p>
            <strong>Technologies:</strong> React, Node.js, MongoDB
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;