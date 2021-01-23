import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = [
    'image/png',
    'image/jpeg',
    'image/mov',
    'image/jpg',
    'image/gif',
  ];

  const imageType = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file');
    }
  };

  return (
    <form>
      <label className="input-name">
        <input
          type="text"
          id="fname"
          name="fname"
          placeholder="need to pass name to server"
        />
      </label>

      <label className="upload-image">
        <input type="file" onChange={imageType} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
