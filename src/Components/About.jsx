import React from 'react'
import myImage from "../assets/myimage.jpeg";

function About() {
  return (
    <div
        style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '30px',
            padding: '30px',
            margin: '20px',
            backgroundColor: '#e8f1ff',
            color: '#1f2937',
            borderRadius: '12px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
            alignItems: 'center'
        }}
        >
        <div
            style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            padding: '20px',
            borderRight: '2px solid rgba(255,255,255,0.2)'
            }}
        >
            <img
            src={myImage}
            alt="Profile"
            style={{
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                marginBottom: '20px',
                border: '4px solid white'
            }}
            />

            <h1 style={{ marginBottom: '10px' }}>Nikhil Tiwari</h1>
            <h3 style={{ margin: '5px 0', color: '#586a85' }}>(2401220100165)</h3>
            <h3 style={{ margin: '5px 0', color: '#586a85' }}>Software Engineer</h3>
            <p style={{ marginTop: '10px' }}>Welcome to my portfolio!</p>
        </div>

        <div style={{ padding: '10px 20px' }}>
            <h2 style={{ marginBottom: '20px' }}>About Me</h2>

            <p style={{ lineHeight: '1.8', textAlign: 'justify' }}>
            I am a passionate Software Engineer with a strong interest in web
            development, software design, and problem-solving. I enjoy creating
            responsive, user-friendly applications that combine functionality with
            clean and modern designs.
            </p>

            <p style={{ lineHeight: '1.8', textAlign: 'justify' }}>
            My technical skills include HTML, CSS, JavaScript, React, Java, Python,
            and database management. I continuously explore new technologies and
            frameworks to improve my development skills and stay up to date with
            industry trends.
            </p>

            <p style={{ lineHeight: '1.8', textAlign: 'justify' }}>
            I am enthusiastic about learning, collaborating with teams, and solving
            real-world challenges through technology. My goal is to build efficient,
            scalable, and impactful software solutions while growing as a developer.
            </p>
        </div>
    </div>
  )
}

export default About