import React, { useEffect } from 'react';

import useStorage from '../hooks/useStorage';

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);
  return (
    <div className="progress-bar" style={{ width: progress + '%' }}>
      uploading{' '}
      <span role="img" aria-label="img">
        🤪
      </span>
    </div>
  );
};

export default ProgressBar;
