function showDetails(project) {
  const details = {
  blockchain: `
    <h4>Blockchain-Based Evidence Tracking</h4>
    <p>The Blockchain Evidence Tracker is a secure digital evidence management system designed to store, verify, and share digital evidence in a tamper-proof and transparent manner using blockchain technology .
    <p>This project explores the application of blockchain in maintaining data integrity , especially in legal, forensic, or law enforcement environments where evidence authenticity is critical. As part of the development process, I focused on ensuring immutability, access control, and audit trails — all core principles of data governance and cybersecurity.</p>
    <p>Type: Blockchain + Security<br>Tools Used: Solidity, Ethereum (or Hyperledger), Python, Smart Contracts, Web3.js/Truffle</p>
    <p>🔍 Key Features</p>
    <ol>
    <li><b>Immutable Storage</b> : Digital evidence (e.g., images, documents, videos) is stored with its hash recorded on the blockchain, ensuring that any change can be detected instantly.</li>
    <li><b>Smart Contracts</b> : Developed smart contracts to manage user roles (admin, investigator, auditor) and define rules for evidence upload, access, and modification.</li>
    <li><b>Decentralized Architecture</b> : Built using Ethereum-compatible tools (or Hyperledger for private blockchains) to eliminate single points of failure.</li>
    <li><b>Access Control & Logging</b> : Implemented permission-based access and logged every interaction with the system for auditing purposes.</li>
    <li><b>Frontend Interface</b> : Created a simple UI using HTML/CSS/JavaScript or React to interact with the blockchain backend via Web3.js or Ethers.js.</li>
    <li><b>Data Integrity Checks</b> : Used cryptographic hashing (e.g., SHA-256) to ensure the originality of evidence files.</li>
  `,
  air: `
    <h4>Air Quality Detection System</h4>
    <p>The Air Quality Detection System is an IoT-based environmental monitoring solution designed to detect and analyze air pollution levels in real-time. The system uses sensor nodes deployed in various locations to collect data on pollutants like CO₂, NO₂, PM2.5, temperature, and humidity.
    This project involved not only hardware setup but also data preprocessing, visualization, anomaly detection , and actionable insights generation , making it highly relevant to data analytics and machine learning roles .</p>
    <p>Type: IoT + Data Analysis<br>Tools Used: Python, Sensors (e.g., MQ135, DHT11), Pandas, NumPy, Matplotlib</p>
    <p>🧪 Key Features</p>
    <ol>
  <li><b>Real-Time Data Collection<b> : Sensors gather live environmental data at regular intervals.</li>
  <li><b>Data Storage<b> : Sensor readings are stored locally or uploaded to cloud platforms (like Firebase or AWS IoT).</li>
  <li><b>Data Cleaning & Preprocessing<b> : Removed noise, handled missing values, and normalized sensor readings using Pandas .</li>
  <li><b>Exploratory Data Analysis (EDA)<b> : Analyzed trends over time, identified correlations between pollutants and weather conditions.</li>
  <li><b>Anomaly Detection<b> : Built simple threshold-based alerts and experimented with statistical methods (Z-score) and basic ML models to identify unusual spikes in pollution levels.</li>
  <li><b>Visualization<b> : Created intuitive dashboards using Matplotlib/Seaborn/Tableau to display pollution trends and anomalies.</li>
  <li><b>Alert System<b> : Set up SMS/email notifications when pollutant levels exceeded safe thresholds.</li>
  </ol>


  `,
  medical: `
    <h4>AI-Based Medical Image Diagnosis</h4>
   <p>The AI-Based Medical Image Diagnosis System is an interactive dashboard that leverages deep learning models to analyze medical images (e.g., X-rays, MRIs) and assist in the pre-diagnosis of health conditions such as pneumonia, brain tumors, or diabetic retinopathy.

This project combines image processing , machine learning , and user-friendly visualization to help doctors and patients get faster insights from medical scans. It demonstrates my ability to work with real-world datasets , build predictive models , and present findings through intuitive dashboards .</p>
    <p>Type: Artificial Intelligence + Healthcare Analytics<br>
    Tools Used: Python, TensorFlow/Keras, OpenCV, Flask/Dash, Streamlit/Tableau</p>
    <p>🔍 Key Features</p>
    <ol>
    <li><b>Image Preprocessing</b> : Used OpenCV and PIL libraries to resize, normalize, and augment medical images before feeding them into the model.</li>
    <li><b>Deep Learning Model</b> : Trained a Convolutional Neural Network (CNN) using TensorFlow/Keras to classify images into categories like “Normal”, “Pneumonia”, “Tumor”, etc.</li>
    <li><b>Model Evaluation</b> : Measured performance using metrics like accuracy, precision, recall, and F1-score. Visualized confusion matrices for deeper insight.</li>
    <li><b>Interactive Dashboard</b> : Built a user interface using Streamlit , Flask , or Dash where users can upload an image and receive predictions along with confidence scores.</li>
    <li><b>Data Visualization</b> : Displayed heatmaps and activation maps to show which areas of the image influenced the diagnosis.</li>
    </ol>

  `
};
  document.getElementById("project-details").innerHTML = details[project];
  document.getElementById("project-details").style.display = "block";
}

function toggleSkill(type) {
  const dev = `<ul><li>Python</li><li>SQL</li><li>Java</li><li>Git</li><li>Linux</li></ul>`;
  const data = `<ul><li>Pandas</li><li>NumPy</li><li>Matplotlib</li><li>Seaborn</li><li>Tableau</li><li>MySQL</li></ul>`;
  const ml = `<ul><li>Scikit-learn</li><li>TensorFlow</li><li>Keras</li><li>EDA</li><li>Data Cleaning</li></ul>`;
  const other = `<ul><li>Public Speaking</li><li>Time Management</li><li>Team Management</li></ul>`;
  
  document.getElementById("skill-content").innerHTML = 
    type === 'data' ? data : type === 'ml' ? ml : type === 'other' ? other : dev;
}
