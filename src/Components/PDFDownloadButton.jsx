import React from "react";
import "./PDFDownload.css";

const PDFDownloadButton = ({ pdfUrl }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "TitikshaGupta_Resume.pdf";
    link.click();
  };

  return (
    <button onClick={handleDownload} className="pdfbutton">
      Download Resume
    </button>
  );
};

export default PDFDownloadButton;
