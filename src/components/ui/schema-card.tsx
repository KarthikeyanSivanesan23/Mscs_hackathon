import React from 'react';

interface SchemaCardProps {
  image: string;
  title: string;
  subtitle: string;
  role: string;
  accentColor?: string;
}

export default function SchemaCard({ image, title, subtitle, role, accentColor = '#7946E5' }: SchemaCardProps) {
  return (
    <div className="leader-card">
      <div className="leader-card-visual">
        <div className="leader-card-grid" />
        <div className="leader-card-img-wrap">
          <img src={image} alt={title} className="leader-card-img" />
        </div>
      </div>
      <div className="leader-card-divider" />
      <div className="leader-card-body">
        <span className="leader-card-role" style={{ color: accentColor, borderColor: `${accentColor}40` }}>
          {role}
        </span>
        <h3 className="leader-card-title">{title}</h3>
        <p className="leader-card-subtitle">{subtitle}</p>
      </div>
    </div>
  );
}
