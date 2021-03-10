import React from 'react';

const Section = ({ title, children }) => (
  <section>
    <div className="title">{title}</div>

    <div className="content">{children}</div>
  </section>
);

export default Section;
