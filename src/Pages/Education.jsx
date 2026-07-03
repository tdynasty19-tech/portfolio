import React from "react";

function Education() {
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
          marginBottom: "35px",
        }}
      >
        Education
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "25px",
        }}
      >
        {/* B.Tech */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "180px 1fr",
            gap: "25px",
            backgroundColor: "#e8f1ff",
            padding: "25px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
            alignItems: "center",
          }}
        >
          <img
            src="https://images.openai.com/static-rsc-4/yRyp_xQEqkBfiIJFJQuzFXN12Iv6aU9dhl7jsduwfzy_RpImh0PDPSQm2mY_TSEdbsIoAvfhitnkccqEx25wQQnGCttLv6Q2JY0yxWnnbAgyONEZ4L4Q1nQIqleXSCtI0B9vj5WYQ1V4rK1LjrEIObm6GQgV20UEfE3imdaNUJw?purpose=inline"
            alt="SRMCEM Logo"
            style={{
              width: "140px",
              height: "140px",
              objectFit: "contain",
              justifySelf: "center",
            }}
          />

          <div>
            <h2 style={{ color: "#1f2937" }}>
              Bachelor of Technology (B.Tech)
            </h2>

            <h3 style={{ color: "#4b5563" }}>
              Shri Ramswaroop Memorial College of Engineering & Management,
              Lucknow
            </h3>

            <p><strong>Degree:</strong> Bachelor of Technology</p>
            <p><strong>Status:</strong> Currently Pursuing</p>
            <p><strong>Location:</strong> Lucknow, Uttar Pradesh</p>

            <p style={{ lineHeight: "1.7" }}>
              Currently pursuing my B.Tech with a focus on programming,
              software development, web technologies, data structures,
              algorithms, and problem-solving while working on practical
              software projects.
            </p>
          </div>
        </div>

        {/* Class 12 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "180px 1fr",
            gap: "25px",
            backgroundColor: "#e8f1ff",
            padding: "25px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
            alignItems: "center",
          }}
        >
          <img
            src="https://images.openai.com/static-rsc-4/Rf-9ghlq-CV58NXhoUXH-pLucpPHgMmKka4MgB0h_1TOEwTqE2nYrWoq2OVl57xzJuuaM3IsZm4hSD_UpdehF9-Dg9e3vBbkv0rjdXjkOBFzggFkG9gAPSu6t3I9J03BQXC9BJTKN5KBFCBccY-5g1Lb_7eFjzH2wWVrtESMP-U?purpose=inline"
            alt="JNV Logo"
            style={{
              width: "130px",
              height: "130px",
              objectFit: "contain",
              justifySelf: "center",
            }}
          />

          <div>
            <h2 style={{ color: "#1f2937" }}>
              Senior Secondary Education (Class XII)
            </h2>

            <h3 style={{ color: "#4b5563" }}>
              Jawahar Navodaya Vidyalaya, Gurugram
            </h3>

            <p><strong>Board:</strong> CBSE</p>
            <p><strong>Percentage:</strong> 90%</p>

            <p style={{ lineHeight: "1.7" }}>
              Successfully completed higher secondary education with an
              excellent academic record, strengthening my foundation in
              Mathematics, Physics, and Computer Science.
            </p>
          </div>
        </div>

        {/* Class 10 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "180px 1fr",
            gap: "25px",
            backgroundColor: "#e8f1ff",
            padding: "25px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
            alignItems: "center",
          }}
        >
          <img
            src="https://images.openai.com/static-rsc-4/Rf-9ghlq-CV58NXhoUXH-pLucpPHgMmKka4MgB0h_1TOEwTqE2nYrWoq2OVl57xzJuuaM3IsZm4hSD_UpdehF9-Dg9e3vBbkv0rjdXjkOBFzggFkG9gAPSu6t3I9J03BQXC9BJTKN5KBFCBccY-5g1Lb_7eFjzH2wWVrtESMP-U?purpose=inline"
            alt="JNV Logo"
            style={{
              width: "130px",
              height: "130px",
              objectFit: "contain",
              justifySelf: "center",
            }}
          />

          <div>
            <h2 style={{ color: "#1f2937" }}>
              Secondary Education (Class X)
            </h2>

            <h3 style={{ color: "#4b5563" }}>
              Jawahar Navodaya Vidyalaya, Gurugram
            </h3>

            <p><strong>Board:</strong> CBSE</p>
            <p><strong>Percentage:</strong> 87%</p>

            <p style={{ lineHeight: "1.7" }}>
              Completed secondary education with strong academic performance,
              developing analytical thinking and a keen interest in technology,
              programming, and logical problem-solving.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;