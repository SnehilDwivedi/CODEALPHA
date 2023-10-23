import React from 'react'

import { PDFDownloadLink } from '@react-pdf/renderer';
import Resume from './Resume';




function Btn() {
  return (
    <div className='container'>
      <div className="row">
        <div className="col">
        <h1>PDF Generator</h1>
    <PDFDownloadLink document={<Resume/>} fileName="my-pdf.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Loading...' : 'Download PDF'
      }
    </PDFDownloadLink>
        </div>
      </div>
   
  </div>
  )
}

export default Btn
