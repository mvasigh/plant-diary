import React from 'react';

const Avatar = ({ imageSrc }) => {
  return (
    <p className="image is-64x64">
      <img
        alt=""
        style={{
          borderRadius: '50%'
        }}
        src={imageSrc}
      />
    </p>
  );
};

export default Avatar;
