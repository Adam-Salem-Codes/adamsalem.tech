import pdf from "./PID.pdf"

export default function PID() {
  
  return (
    <div className="w-[100vw] h-[100vh]">
        <object
          data={pdf}
          type="application/pdf"
          width="100%"
          height="100%"
        >
          <p>
            Alternative text - include a link{" "}
            <a href="./PID">
              to the PDF!
            </a>
          </p>
        </object>
    </div>
  );
}
