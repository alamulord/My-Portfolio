import { useState } from "react";
import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import { Download, ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from "lucide-react";
import { pdfjs, Document, Page } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Import PDF directly; our custom Vite config base64-encodes this purely into memory
import resumePdf from '../assets/pdfs/Myresume.pdf';

// Stable worker bypassing Vite imports
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.2);

  function onLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <>
      <div id="window-header">
        <WindowControls target="resume" />
        <h2 className="resume">My Resume</h2>

        <a href={resumePdf} download="Abdulsamad_Resume.pdf" title="Download resume">
          <Download className="icon w-5 text-gray-600 hover:text-black cursor-pointer transition-colors" />
        </a>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-3 p-2 bg-gray-50 border-b border-gray-200">
        <button
          className="p-1 hover:bg-gray-200 rounded disabled:opacity-50"
          onClick={() => setPageNumber(p => Math.max(p - 1, 1))}
          disabled={pageNumber <= 1}
        >
          <ChevronLeft className="w-5 text-gray-600" />
        </button>

        <span className="text-sm font-medium text-gray-700 min-w-24 text-center">
          Page {pageNumber} of {numPages || "--"}
        </span>

        <button
          className="p-1 hover:bg-gray-200 rounded disabled:opacity-50"
          onClick={() => setPageNumber(p => Math.min(p + 1, numPages))}
          disabled={numPages && pageNumber >= numPages}
        >
          <ChevronRight className="w-5 text-gray-600" />
        </button>

        <div className="w-px h-5 bg-gray-300 mx-2"></div>

        <button className="p-1 hover:bg-gray-200 rounded" onClick={() => setScale(s => s + 0.2)}>
          <ZoomIn className="w-5 text-gray-600 hover:text-black" />
        </button>

        <button className="p-1 hover:bg-gray-200 rounded" onClick={() => setScale(s => Math.max(s - 0.2, 0.6))}>
          <ZoomOut className="w-5 text-gray-600 hover:text-black" />
        </button>
      </div>

      {/* PDF Viewer */}
      <div className="flex justify-center overflow-auto bg-gray-100 p-4" style={{ height: "calc(100% - 90px)" }}>
        <Document
          file={resumePdf}
          onLoadSuccess={onLoadSuccess}
          loading="Loading PDF..."
        >
          <Page
            key={`page_${pageNumber}_scale_${scale}`}
            pageNumber={pageNumber}
            scale={scale}
            renderTextLayer={true}
            renderAnnotationLayer={true}
            className="shadow-md transition-all duration-300"
          />
        </Document>
      </div>
    </>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");
export default ResumeWindow;
