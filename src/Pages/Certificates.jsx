import React from "react";

function Certificates() {
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
          marginBottom: "40px",
        }}
      >
        My Certificates
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "30px",
        }}
      >
        {/* Certificate 1 */}
        <div
          style={{
            backgroundColor: "#e8f1ff",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
            textAlign: "center",
          }}
        >
          <img
            src="https://certifier.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fcertifier%2Fimage%2Fupload%2Fv1693771574%2Fsmall_55_participation_modern_pink_landscape_2e80d516ad.jpg&w=3840&q=100"
            alt="Certificate"
            style={{
              width: "120px",
              height: "120px",
              marginBottom: "20px",
            }}
          />

          <h2 style={{ color: "#1f2937" }}>
            Web Development Certificate
          </h2>

          <p>
            Successfully completed a Web Development course covering
            HTML, CSS, JavaScript, and responsive web design.
          </p>

        </div>

        {/* Certificate 2 */}
        <div
          style={{
            backgroundColor: "#e8f1ff",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
            textAlign: "center",
          }}
        >
          <img
            src="https://template.canva.com/EAFMchGNQ3g/2/0/800w-kRk1cJ0JlrA.jpg"
            alt="Certificate"
            style={{
              width: "120px",
              height: "120px",
              marginBottom: "20px",
            }}
          />

          <h2 style={{ color: "#1f2937" }}>
            Java Programming
          </h2>

          <p>
            Completed Java Programming with concepts of OOP,
            Collections, Exception Handling, and File Handling.
          </p>

        </div>

        {/* Certificate 3 */}
        <div
          style={{
            backgroundColor: "#e8f1ff",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
            textAlign: "center",
          }}
        >
          <img
            src="https://img.icons8.com/?size=512&id=40669&format=png"
            alt="Certificate"
            style={{
              width: "120px",
              height: "120px",
              marginBottom: "20px",
            }}
          />

          <h2 style={{ color: "#1f2937" }}>
            Python Programming
          </h2>

          <p>
            Learned Python fundamentals, data structures,
            object-oriented programming, and automation.
          </p>

        </div>

        {/* Certificate 4 */}
        <div
          style={{
            backgroundColor: "#e8f1ff",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
            textAlign: "center",
          }}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJZRvQIm-q67Lemtcy8KgQgJTZHXg7WDRAYv_hezEaUw&s"
            alt="Certificate"
            style={{
              width: "120px",
              height: "120px",
              marginBottom: "20px",
            }}
          />

          <h2 style={{ color: "#1f2937" }}>
            React Development
          </h2>

          <p>
            Gained practical experience in React, components,
            hooks, routing, and state management.
          </p>

        </div>
      </div>
    </div>
  );
}

export default Certificates;