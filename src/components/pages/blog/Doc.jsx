import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";

import PDFFile from "./PDFFile";

const App = () => {
  return (
    <div className="App">
      <PDFDownloadLink document={<PDFFile />} filename="FORM">
      {({loading}) => (loading ? <button className="btn">Loading Document...</button> : <button className="btn">Download as pdf</button> )}
      </PDFDownloadLink>
      {/* <PDFFile /> */}
    </div>
  );
};

export default App;