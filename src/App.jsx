

export function App () {
  const currentYear = new Date().getFullYear();

  return (
    <div className="container">
      {/* App Icon & Name */}
      <img src="./app_icon.jpeg" alt="Hosta" className="app-icon" />
      <h1>Hosta Health Care</h1>
      <p className="tagline">Your personal health companion for better healthcare management.</p>

      {/* Download Button */}
      {/* IMPORTANT: Replace # with your actual App Store Link once live */}
      <a href="[Your App Store Link]" className="download-button">
        Download on the App Store
      </a>

      {/* Screenshots */}
      <div className="screenshots">
        <img src="./hospital.jpeg" alt="Hospital" className="screenshot" />
        <img src="./blood.jpg" alt="Blood" className="screenshot" />
        <img src="./speciality.jpg" alt="Speciality" className="screenshot" />
      </div>

      {/* Features */}
      <div className="features">
        <div className="feature">
          <h3>🏥 Find Hospitals</h3>
          <p>Locate nearby hospitals and healthcare facilities with detailed information and ratings.</p>
        </div>
        <div className="feature">
          <h3>💊 Health Tracking</h3>
          <p>Track your medications, appointments, and health metrics in one place.</p>
        </div>
        <div className="feature">
          <h3>👨‍⚕️ Specialist Directory</h3>
          <p>Find and connect with specialized healthcare professionals for your needs.</p>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>
          <a href="https://zorrowtechitsolutions.github.io/Hosta-Privacy-Policy">Contact Support</a> | 
          <a href="https://zorrowtechitsolutions.github.io/Hosta-Privacy-Policy">Privacy Policy</a>
        </p>
        <p>&copy; {currentYear} Hosta Health Care. All rights reserved.</p>
      </footer>
    </div>
  );
};

