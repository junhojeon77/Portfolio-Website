export default function Footer() {
  return (
    <footer className="footer">
      <div className="container text-center">
        <h2 className="fs-3">Let&apos;s build something useful.</h2>
        <p className="text-secondary">Open to full-time developer roles.</p>
        <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
          <a className="btn btn-dark" href="mailto:junhojeon88@gmail.com">Email me</a>
          <a className="btn btn-outline-dark" href="https://www.linkedin.com/in/junho-jeon-a08060252" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <p className="small text-secondary mb-0">
          &copy; {new Date().getFullYear()} Designed by Junho Jeon.
        </p>
      </div>
    </footer>
  );
}
