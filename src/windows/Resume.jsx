import { useState } from 'react';
import { WindowControls } from '#components';
import WindowWrapper from '#hoc/WindowWrapper';
import useWindowStore from '#store/window';
import {
  Download,
  ZoomIn,
  ZoomOut,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { pdfjs, Document, Page } from 'react-pdf';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Local bundled resume (used when pdfSrc === 'local')
import localResumePdf from '../assets/pdfs/Myresume.pdf';

// Stable worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Resume = () => {
  const { windows } = useWindowStore();
  const data = windows.resume?.data;

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.2);

  // Determine which PDF to show
  const pdfFile = localResumePdf;
  const title = data?.name ?? 'My Resume';
  const downloadName = title.endsWith('.pdf') ? title : `${title}.pdf`;

  function onLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1); // reset to first page on PDF change
  }

  return (
    <>
      <div id='window-header'>
        <WindowControls target='resume' />
        <h2 className='resume'>{title}</h2>

        <a href={pdfFile} download={downloadName} title='Download resume'>
          <Download className='icon w-5 text-[#bcc8d1] hover:text-white cursor-pointer transition-colors' />
        </a>
      </div>

      {/* Controls */}
      <div className='flex items-center justify-center gap-3 p-2 bg-[#171f33]/40 backdrop-blur-md border-b border-white/10'>
        <button
          className='p-1 hover:bg-white/10 rounded disabled:opacity-50'
          onClick={() => setPageNumber((p) => Math.max(p - 1, 1))}
          disabled={pageNumber <= 1}
        >
          <ChevronLeft className='w-5 text-[#bcc8d1]' />
        </button>

        <span className='text-sm font-medium text-[#dae2fd] min-w-24 text-center'>
          Page {pageNumber} of {numPages || '--'}
        </span>

        <button
          className='p-1 hover:bg-white/10 rounded disabled:opacity-50'
          onClick={() => setPageNumber((p) => Math.min(p + 1, numPages))}
          disabled={numPages && pageNumber >= numPages}
        >
          <ChevronRight className='w-5 text-[#bcc8d1]' />
        </button>

        <div className='w-px h-5 bg-white/20 mx-2'></div>

        <button
          className='p-1 hover:bg-white/10 rounded'
          onClick={() => setScale((s) => s + 0.2)}
        >
          <ZoomIn className='w-5 text-[#bcc8d1] hover:text-white' />
        </button>

        <button
          className='p-1 hover:bg-white/10 rounded'
          onClick={() => setScale((s) => Math.max(s - 0.2, 0.6))}
        >
          <ZoomOut className='w-5 text-[#bcc8d1] hover:text-white' />
        </button>
      </div>

      {/* PDF Viewer */}
      <div className='flex justify-center window-content bg-[#0b1326]/40 p-2 overflow-auto flex-1 min-h-0'>
        <Document
          file={pdfFile}
          onLoadSuccess={onLoadSuccess}
          loading='Loading PDF...'
          className='flex justify-center'
        >
          <Page
            key={`page_${pageNumber}_scale_${scale}`}
            pageNumber={pageNumber}
            scale={scale}
            renderTextLayer={true}
            renderAnnotationLayer={true}
            className='shadow-md transition-all duration-300'
          />
        </Document>
      </div>
    </>
  );
};

const ResumeWindow = WindowWrapper(Resume, 'resume');
export default ResumeWindow;
