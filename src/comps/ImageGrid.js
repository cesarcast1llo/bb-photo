import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';
// import { createdAt } from '../hooks/useStorage';

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images');

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <div key={doc.id}>
            <motion.div
              className="img-wrap"
              layout
              onClick={() => setSelectedImg(doc.url)}
            >
              <motion.img
                src={doc.url}
                alt="uploaded pic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </motion.div>
            <div className="date-title">
              {doc.createdAt.toDate().toDateString()}
              {/* TODO need to make date work before upload */}

              {doc.name}
              {/* TODO need to grab name from storage */}
            </div>
          </div>
        ))}
    </div>
  );
};

export default ImageGrid;
