import React from 'react'

function Footer() {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '20px',
            padding: '20px',
            backgroundColor: '#1f2937',
            color: 'white',
            borderRadius: '10px',
            margin: '20px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
            alignItems: 'center'
        }}>
            <p style={{ margin: 0, textAlign: 'center' }}>GitHub: github.com/nikhiltiwari2004</p>
            <p style={{ margin: 0, textAlign: 'center' }}>LinkedIn: linkedin.com/in/nikhil-tiwari-2004</p>
            <p style={{ margin: 0, textAlign: 'center' }}>Email: t.dynasty19@gmail.com</p>
            <p style={{ margin: 0, textAlign: 'center' }}>Phone: +91 9667229978</p>
        </div>
    )
}

export default Footer