import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-min-noconflict/theme-chaos";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-min-noconflict/mode-sh";
import "ace-builds/src-min-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-html";
function Codeblock({ code, langHeader, lang }) {
  return (
    <div className="w-full flex justify-center items-center mt-4">
      <div className="dark:bg-black pb-4 px-6 max-sm:px-2 rounded-lg border-4 border-black bg-white shadow-2xl m-4 hover:scale-105">
        <div className="w-fit px-12 h-fit dark:bg-[#282828] bg-[#DDDDDD] m-2 rounded-lg text-black dark:text-white hover:scale-110">
          {langHeader}
        </div>
        <div
          className={`bg-[#DDDDDD] text-black dark:text-white dark:bg-[#0E151A] p-2 max-sm:p-1 rounded-lg hover:scale-105 hover:shadow-2xl`}
        >
          <AceEditor mode={lang} theme="chaos" value={code} readOnly />
        </div>
      </div>
    </div>
  );
}

export default Codeblock;
