"use client";

import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.mjs", import.meta.url).toString();

export default function ResumeViewer({ file }) {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [pages, setPages] = useState(0);
  const [failed, setFailed] = useState(false);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => setWidth(Math.min(900, Math.floor(entry.contentRect.width))));
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="resume-document">
      <p role="status" className={ready ? "visually-hidden" : "text-center p-3"}>
        {failed ? "The preview could not load. Use Open PDF or Download above." : ready ? "Resume ready to read." : "Loading resume…"}
      </p>
      {!failed && width > 0 && (
        <Document file={file} loading={null} suspense={false}
          onLoadSuccess={({ numPages }) => setPages(numPages)} onLoadError={() => setFailed(true)}>
          {Array.from({ length: pages }, (_, index) => (
            <Page key={index + 1} pageNumber={index + 1} width={width} suspense={false}
              renderTextLayer renderAnnotationLayer loading={null}
              onRenderSuccess={() => { if (index === 0) setReady(true); }}
              onRenderError={() => setFailed(true)} />
          ))}
        </Document>
      )}
    </div>
  );
}
