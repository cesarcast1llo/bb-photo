import { useState, useEffect } from 'react';
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from '../firebase/config';

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  // const [name, setName] = useState(null);
  // TODO pass in name to storage, to be pulled down for ImageGrid

  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection('images');

    storageRef.put(file).on(
      'state_changed',
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },

      (err) => {
        setError(err);
      },

      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        // const name = await storageRef.getName();

        await collectionRef.add({
          url,
          createdAt,
          // name
        });

        // setName(name);
        setUrl(url);
      }
    );
  }, [file]);

  return {
    progress,
    url,
    error,
    // name
  };
};

export default useStorage;
