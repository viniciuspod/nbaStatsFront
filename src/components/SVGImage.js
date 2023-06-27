import React from 'react'

const SVGImage = ({ svgString }) => {
    const svgDataUrl = `data:image/svg+xml,${encodeURIComponent(svgString)}`;

    return <img src={svgDataUrl} alt="SVG Image" />;
  }

export default SVGImage