import React from 'react';
import './FlowerBloom.css';

const FlowerBloom = ({ flowerType, isAnimating }) => {
  const renderFlower = () => {
    switch (flowerType) {
      case 'rose':
        return (
          <svg
            className="flower-svg"
            viewBox="0 0 300 260"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* RED ROSE 1 (Kiri) */}
            <g
              className="petal petal-1"
              style={{ transformOrigin: '90px 240px' }}
            >
              {/* Batang */}
              <path
                d="M90 240 L90 150"
                stroke="#2e7d32"
                strokeWidth="4"
              />

              {/* Daun */}
              <path
                d="M90 190 Q60 180 55 160 Q70 150 90 170"
                fill="#4caf50"
              />
              <path
                d="M90 200 Q120 185 125 165 Q110 155 90 175"
                fill="#388e3c"
              />

              {/* Bunga */}
              <g transform="translate(90 135)">
                {/* Outer petals */}
                {Array.from({ length: 6 }).map((_, i) => (
                  <ellipse
                    key={i}
                    cx="0"
                    cy="-26"
                    rx="16"
                    ry="34"
                    fill="#c62828"
                    transform={`rotate(${i * 60})`}
                  />
                ))}

                {/* Middle petals */}
                {Array.from({ length: 5 }).map((_, i) => (
                  <ellipse
                    key={i}
                    cx="0"
                    cy="-18"
                    rx="12"
                    ry="26"
                    fill="#d32f2f"
                    transform={`rotate(${i * 72 + 20})`}
                  />
                ))}

                {/* Inner bud */}
                <ellipse cx="0" cy="-8" rx="10" ry="18" fill="#e53935" />
                <circle cx="0" cy="0" r="6" fill="#f44336" />
              </g>
            </g>

            {/* RED ROSE 2 (Tengah – Lebih Besar) */}
            <g
              className="petal petal-2"
              style={{ transformOrigin: '150px 250px' }}
            >
              {/* Batang */}
              <path
                d="M150 250 L150 120"
                stroke="#1b5e20"
                strokeWidth="5"
              />

              {/* Daun */}
              <path
                d="M150 200 Q110 190 105 165 Q125 155 150 180"
                fill="#43a047"
              />
              <path
                d="M150 210 Q190 190 195 165 Q175 155 150 180"
                fill="#2e7d32"
              />

              {/* Bunga */}
              <g transform="translate(150 105)">
                {/* Outer */}
                {Array.from({ length: 8 }).map((_, i) => (
                  <ellipse
                    key={i}
                    cx="0"
                    cy="-30"
                    rx="18"
                    ry="40"
                    fill="#b71c1c"
                    transform={`rotate(${i * 45})`}
                  />
                ))}

                {/* Middle */}
                {Array.from({ length: 6 }).map((_, i) => (
                  <ellipse
                    key={i}
                    cx="0"
                    cy="-20"
                    rx="14"
                    ry="30"
                    fill="#c62828"
                    transform={`rotate(${i * 60 + 15})`}
                  />
                ))}

                {/* Inner bud */}
                <ellipse cx="0" cy="-10" rx="12" ry="22" fill="#e53935" />
                <circle cx="0" cy="0" r="8" fill="#f44336" />
              </g>
            </g>

            {/* RED ROSE 3 (Kanan – Kecil) */}
            <g
              className="petal petal-3"
              style={{ transformOrigin: '210px 240px' }}
            >
              {/* Batang */}
              <path
                d="M210 240 L210 160"
                stroke="#2e7d32"
                strokeWidth="3"
              />

              {/* Daun */}
              <path
                d="M210 195 Q190 185 185 170 Q195 165 210 180"
                fill="#4caf50"
              />

              {/* Bunga */}
              <g transform="translate(210 150)">
                {Array.from({ length: 5 }).map((_, i) => (
                  <ellipse
                    key={i}
                    cx="0"
                    cy="-20"
                    rx="12"
                    ry="28"
                    fill="#d32f2f"
                    transform={`rotate(${i * 72})`}
                  />
                ))}

                <circle cx="0" cy="0" r="6" fill="#f44336" />
              </g>
            </g>
          </svg>
        );

    case 'tulip':
        return (
          <svg className="flower-svg" viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg">
            
            {/* TULIP 1 (Kiri) - Animasi urutan ke-1 */}
            <g className="petal petal-1" style={{ transformOrigin: '70px 220px' }}>
              {/* Daun */}
              <path d="M70 220 Q40 160 30 140 Q20 120 40 150 Q60 180 70 220" fill="#7cb342" />
              <path d="M70 220 Q80 160 85 140 Q90 120 80 150 Q75 180 70 220" fill="#558b2f" />
              {/* Batang */}
              <path d="M70 220 L75 100" stroke="#558b2f" strokeWidth="4" fill="none" />
              {/* Mahkota Bunga */}
              <path d="M55 80 Q55 120 75 120 Q95 120 95 80 Q95 50 75 50 Q55 50 55 80" fill="#d63354" />
              <ellipse className="petal petal-6" cx="65" cy="80" rx="10" ry="25" fill="#ef4468" transform="rotate(-10 65 80)" />
              <ellipse className="petal petal-6" cx="85" cy="80" rx="10" ry="25" fill="#ef4468" transform="rotate(10 85 80)" />
            </g>

            {/* TULIP 2 (Tengah Tinggi) - Animasi urutan ke-2 */}
            <g className="petal petal-2" style={{ transformOrigin: '130px 240px' }}>
              {/* Daun Besar */}
              <path d="M130 240 Q100 150 100 120" stroke="#7cb342" strokeWidth="0" fill="#7cb342" />
              <path d="M100 120 Q110 160 130 240" fill="#558b2f" />
              <path d="M130 240 Q160 150 160 130" stroke="#7cb342" strokeWidth="0" fill="#7cb342" />
              {/* Batang */}
              <path d="M130 240 L135 90" stroke="#558b2f" strokeWidth="4" fill="none" />
              {/* Mahkota Bunga */}
              <path d="M115 70 Q115 110 135 110 Q155 110 155 70 Q155 40 135 40 Q115 40 115 70" fill="#d63354" />
              <ellipse className="petal petal-6" cx="135" cy="70" rx="15" ry="30" fill="#ef4468" />
            </g>

            {/* TULIP 3 (Kuncup Kecil) - Animasi urutan ke-3 */}
            <g className="petal petal-3" style={{ transformOrigin: '170px 230px' }}>
              {/* Daun & Batang */}
              <path d="M170 230 Q160 190 160 170" stroke="#7cb342" strokeWidth="3" fill="none" />
              <path d="M170 230 L172 140" stroke="#558b2f" strokeWidth="3" fill="none" />
              {/* Kuncup */}
              <ellipse className="petal petal-6" cx="172" cy="135" rx="8" ry="12" fill="#d63354" />
              <ellipse className="petal petal-6" cx="172" cy="135" rx="5" ry="10" fill="#ef4468" />
            </g>

            {/* TULIP 4 (Kanan) - Animasi urutan ke-4 */}
            <g className="petal petal-4" style={{ transformOrigin: '210px 230px' }}>
              {/* Daun Lebar */}
              <path d="M210 230 Q240 150 250 120" stroke="#7cb342" strokeWidth="0" fill="#7cb342" />
              <path d="M250 120 Q230 160 210 230" fill="#558b2f" />
              {/* Batang */}
              <path d="M210 230 L215 100" stroke="#558b2f" strokeWidth="4" fill="none" />
              {/* Mahkota Bunga */}
              <path d="M195 85 Q195 125 215 125 Q235 125 235 85 Q235 55 215 55 Q195 55 195 85" fill="#d63354" />
              <ellipse className="petal petal-6" cx="205" cy="85" rx="10" ry="25" fill="#ef4468" transform="rotate(-5 205 85)" />
              <ellipse className="petal petal-6" cx="225" cy="85" rx="10" ry="25" fill="#ef4468" transform="rotate(5 225 85)" />
            </g>

          </svg>
        );
      
        case 'lavender':
          return (
            <svg
              className="flower-svg"
              viewBox="0 20 300 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* LAVENDER 1 (Kiri) */}
              <g
                className="petal petal-1"
                style={{ transformOrigin: '90px 240px' }}
              >
                {/* Batang */}
                <path
                  d="M90 240 L90 120"
                  stroke="#5e7d60"
                  strokeWidth="4"
                />

                {/* Bunga Padat */}
                <g transform="translate(90 120)">
                  {Array.from({ length: 14 }).map((_, i) => (
                    <circle
                      key={i}
                      cx={(i % 3 - 1) * 6}
                      cy={-i * 10}
                      r="6"
                      fill={i % 2 === 0 ? '#c3a6ff' : '#b39ddb'}
                    />
                  ))}
                </g>
              </g>

              {/* LAVENDER 2 (Tengah – Lebih Besar) */}
              <g
                className="petal petal-2"
                style={{ transformOrigin: '150px 250px' }}
              >
                {/* Batang */}
                <path
                  d="M150 250 L150 90"
                  stroke="#4f6f52"
                  strokeWidth="5"
                />

                {/* Bunga Padat */}
                <g transform="translate(150 90)">
                  {Array.from({ length: 18 }).map((_, i) => (
                    <circle
                      key={i}
                      cx={(i % 4 - 1.5) * 7}
                      cy={-i * 9}
                      r="7"
                      fill={i % 2 === 0 ? '#b388ff' : '#9575cd'}
                    />
                  ))}
                </g>
              </g>

              {/* LAVENDER 3 (Kanan – Pendek) */}
              <g
                className="petal petal-3"
                style={{ transformOrigin: '210px 240px' }}
              >
                {/* Batang */}
                <path
                  d="M210 240 L210 140"
                  stroke="#5e7d60"
                  strokeWidth="3"
                />

                {/* Bunga Padat */}
                <g transform="translate(210 140)">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <circle
                      key={i}
                      cx={(i % 3 - 1) * 5}
                      cy={-i * 9}
                      r="5"
                      fill="#d1c4e9"
                    />
                  ))}
                </g>
              </g>
            </svg>
          );
      
        case 'sunflower':
          return (
            <svg
              className="flower-svg"
              viewBox="0 0 300 260"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* SUNFLOWER 1 (Kiri) */}
              <g
                className="petal petal-1"
                style={{ transformOrigin: '80px 240px' }}
              >
                {/* Daun */}
                <path
                  d="M80 240 Q40 200 45 160 Q50 130 80 170"
                  fill="#8bc34a"
                />
                <path
                  d="M80 240 Q110 200 115 160 Q120 130 95 170"
                  fill="#689f38"
                />

                {/* Batang */}
                <path
                  d="M80 240 L82 120"
                  stroke="#558b2f"
                  strokeWidth="5"
                />

                {/* Kelopak */}
                <g transform="translate(80 100)">
                  {Array.from({ length: 14 }).map((_, i) => (
                    <ellipse
                      key={i}
                      cx="0"
                      cy="-30"
                      rx="6"
                      ry="20"
                      fill={i % 2 === 0 ? '#ffd200' : '#ffbf00'}
                      transform={`rotate(${i * 25})`}
                    />
                  ))}
                </g>

                {/* Tengah */}
                <circle cx="80" cy="100" r="20" fill="#8b4a1f" />
                <circle cx="80" cy="100" r="15" fill="#6d3b17" />
              </g>

              {/* SUNFLOWER 2 (Tengah – Lebih Tinggi) */}
              <g
                className="petal petal-2"
                style={{ transformOrigin: '150px 250px' }}
              >
                {/* Daun */}
                <path
                  d="M150 250 Q110 190 115 150"
                  fill="#8bc34a"
                />
                <path
                  d="M150 250 Q190 190 185 150"
                  fill="#689f38"
                />

                {/* Batang */}
                <path
                  d="M150 250 L152 90"
                  stroke="#558b2f"
                  strokeWidth="6"
                />

                {/* Kelopak */}
                <g transform="translate(150 80)">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <ellipse
                      key={i}
                      cx="0"
                      cy="-36"
                      rx="7"
                      ry="24"
                      fill={i % 2 === 0 ? '#ffd200' : '#ffbf00'}
                      transform={`rotate(${i * 22.5})`}
                    />
                  ))}
                </g>

                {/* Tengah */}
                <circle cx="150" cy="80" r="24" fill="#7a3f14" />
                <circle cx="150" cy="80" r="18" fill="#5a2d0c" />
              </g>

              {/* SUNFLOWER 3 (Kanan – Lebih Kecil) */}
              <g
                className="petal petal-3"
                style={{ transformOrigin: '220px 240px' }}
              >
                {/* Daun */}
                <path
                  d="M220 240 Q245 200 250 170"
                  fill="#8bc34a"
                />

                {/* Batang */}
                <path
                  d="M220 240 L222 130"
                  stroke="#558b2f"
                  strokeWidth="4"
                />

                {/* Kelopak */}
                <g transform="translate(220 120)">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <ellipse
                      key={i}
                      cx="0"
                      cy="-26"
                      rx="5"
                      ry="18"
                      fill="#ffd200"
                      transform={`rotate(${i * 30})`}
                    />
                  ))}
                </g>

                {/* Tengah */}
                <circle cx="220" cy="120" r="16" fill="#8b4a1f" />
              </g>
            </svg>
          );

        case 'cherry':
          return (
            <svg className="flower-svg" viewBox="0 0 300 260" xmlns="http://www.w3.org/2000/svg">

              {/* CHERRY BLOSSOM 1 (Kiri) */}
              <g style={{ transformOrigin: '80px 240px' }}>

                {/* Batang */}
                <path d="M80 240 L80 150" stroke="#6d4c41" strokeWidth="4" />

                {/* Bunga */}
                <g transform="translate(80 135)">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <path
                      key={i}
                      d="M0 0 
                        C -10 -20, -25 -25, -20 -5
                        C -10 10, -5 15, 0 12
                        C 5 15, 10 10, 20 -5
                        C 25 -25, 10 -20, 0 0 Z"
                      fill="#f8bbd0"
                      transform={`rotate(${i * 72})`}
                    />
                  ))}

                  {/* Tengah */}
                  <circle cx="0" cy="0" r="6" fill="#fdd835" />
                </g>
              </g>

              {/* CHERRY BLOSSOM 2 (Tengah – Lebih Besar) */}
              <g style={{ transformOrigin: '150px 250px' }}>

                {/* Batang */}
                <path d="M150 250 L150 110" stroke="#5d4037" strokeWidth="5" />

                {/* Bunga */}
                <g transform="translate(150 95)">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <path
                      key={i}
                      d="M0 0 
                        C -12 -25, -30 -30, -22 -5
                        C -12 12, -5 18, 0 14
                        C 5 18, 12 12, 22 -5
                        C 30 -30, 12 -25, 0 0 Z"
                      fill="#f48fb1"
                      transform={`rotate(${i * 72})`}
                    />
                  ))}

                  {/* Tengah */}
                  <circle cx="0" cy="0" r="8" fill="#fbc02d" />
                </g>
              </g>

              {/* CHERRY BLOSSOM 3 (Kanan – Kecil) */}
              <g style={{ transformOrigin: '220px 240px' }}>

                {/* Batang */}
                <path d="M220 240 L220 160" stroke="#6d4c41" strokeWidth="3" />

                {/* Bunga */}
                <g transform="translate(220 150)">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <path
                      key={i}
                      d="M0 0 
                        C -8 -18, -20 -22, -15 -4
                        C -8 8, -4 12, 0 10
                        C 4 12, 8 8, 15 -4
                        C 20 -22, 8 -18, 0 0 Z"
                      fill="#fce4ec"
                      transform={`rotate(${i * 72})`}
                    />
                  ))}

                  {/* Tengah */}
                  <circle cx="0" cy="0" r="5" fill="#fdd835" />
                </g>
              </g>

            </svg>
          );

      default:
        return null;
    }
  };

  return (
    <div className={`flower-bloom ${isAnimating ? 'animating' : ''}`}>
      {renderFlower()}
    </div>
  );
};

export default FlowerBloom;
