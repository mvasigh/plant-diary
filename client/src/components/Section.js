import React from 'react';

const Section = props => {
  return (
    <section className="section">
      <div style={{ maxWidth: '620px' }} className="container">
        {props.children}
      </div>
    </section>
  );
};

export default Section;
