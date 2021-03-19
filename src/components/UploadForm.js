import React, { useState } from 'react';
import App from '../App';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = [
    'image/png',
    'image/jpg',
    'image/jpeg',
    'image/mov',
    'image/gif',
  ];

  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('SELect an image type');
    }
  };
  return (
    <form>
      <input type="file" onChange={changeHandler} />
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div style={{ color: 'red' }}> uploading {file.name}</div>}
      </div>
    </form>
  );
};

export default UploadForm;
