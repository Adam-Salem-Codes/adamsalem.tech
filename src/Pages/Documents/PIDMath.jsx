import pdf from "./PID_math.pdf"

export default function PIDMath() {

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
            <a href="./PID_math">
              to the PDF!
            </a>
          </p>
        </object>
    </div>
  );
}
