import { useState } from 'react';
import MobilePageHeader from '#components/MobilePageHeader';
import { Download } from 'lucide-react';
import { pdfjs, Document, Page } from 'react-pdf';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

import localResumePdf from '../assets/pdfs/Myresume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const MobileResume = ({ data }) => {
  const [numPages, setNumPages] = useState(null);
  const title = data?.name ?? 'My Resume';
  const downloadName = title.endsWith('.pdf') ? title : `${title}.pdf`;

  function onLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="mobile-resume">
      <MobilePageHeader
        title={title}
        rightAction={
          <a
            href={localResumePdf}
            download={downloadName}
            className="mobile-header-action"
          >
            <Download size={20} />
          </a>
        }
      />

      <div className="mobile-resume-viewer">
        <Document
          file={localResumePdf}
          onLoadSuccess={onLoadSuccess}
          loading={
            <div className="mobile-resume-loading">Loading PDF...</div>
          }
        >
          {/* Render all pages in a scrollable container */}
          {numPages &&
            Array.from({ length: numPages }, (_, i) => (
              <Page
                key={`page_${i + 1}`}
                pageNumber={i + 1}
                width={Math.min(window.innerWidth - 32, 400)}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                className="mobile-resume-page"
              />
            ))}
        </Document>
      </div>
    </div>
  );
};

export default MobileResume;
