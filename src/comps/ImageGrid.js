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
          <>
            <motion.div
              className="img-wrap"
              key={doc.id}
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
            {console.log(doc.url)}
            {console.log(new Date(doc.createdAt.nanoseconds))}
            <div className="date-title">
              {new Date(doc.createdAt.toDate()).toDateString()}
            </div>
          </>
        ))}
    </div>
  );
};

export default ImageGrid;
