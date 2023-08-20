import React, { useState } from 'react';
import axios from 'axios';

const UploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('Userinfo', selectedFile);

    try {
      await axios.post('http://localhost:5000/api/upload', formData);
      console.log('Image uploaded successfully!');
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div className="auth-wrapper">
        <div className="auth-inner">
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      </div>
    </div>
  );
};

export default UploadForm;
