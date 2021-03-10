import React from 'react';

const Position = ({ position, company, period, location, infos }) => (
  <div>
    <div className="positionName">{position}</div>
    <div className="companyName">{company}</div>
    <div className="period">{period}</div>
    <div className="place">{location}</div>
    <div className="description">
      <ul>
        {infos.map((info, i) => (
          <li key={i}>{info}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default Position;
