import Footer from "../Components/Footer";
import ReCAPTCHA from "react-google-recaptcha";

const sendDataToBackend = async (myData) => {
  var ok;
  fetch("https://adam-salem-api.hop.sh/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(myData),
  })
    .then((response) => {
      response.json();
      ok = response.ok;
    })
    .catch((error) => {
      console.log("API failure" + error);
    });
  return ok;
};

const Contact = () => {
  const handleSubmit = (event) => {
    // 👇️ prevent page refresh
    event.preventDefault();
    var ok = sendDataToBackend({
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
      emailback: document.getElementById("emailback").checked,
    });

    if (ok) {
      document.getElementById("check").style.display = "inline";
      document.getElementById("submit").style.marginRight = "6px";
    } else {
      document.getElementById("fail").style.display = "inline";
      document.getElementById("submit").style.marginRight = "6px";
    }
  };
  return (
    <div className="dark:bg-[#282828] dark:text-white">
      <div className="w-full h-[100vh] flex justify-center items-center max-sm:flex-col p-12 cursor-default text-center">
        <div className="p-6 duration-1000 hover:scale-110 hover:z-99 rounded-lg">
          <div class="max-w-sm rounded overflow-hidden shadow-lg dark:bg-neutral-700">
            <div class="px-6 py-12">
              <div class="font-bold text-xl mb-2">Contact!</div>
              <p class="text-gray-700 dark:text-white text-base text-center">
                Adam Salem
              </p>
            </div>

            <form id="form" onSubmit={handleSubmit}>
              <label>Email:</label>
              <br />
              <input
                type="email"
                id="email"
                className="bg-slate-100 outline-none border-b-[3px] w-[65%] focus:border-b-blue-400 mb-2 rounded-lg dark:bg-neutral-500"
                required
              />
              <br />
              <label>Message:</label>
              <br />
              <textarea
                className="bg-slate-100 outline-none border-b-[3px] h-14 w-[65%] focus:border-b-blue-400 resize-y rounded-lg dark:bg-neutral-500"
                id="message"
                required
              />
              <br />
              Do you want an email back?&nbsp;&nbsp;
              <input
                type="checkbox"
                className="focus:bg-blue-100"
                id="emailback"
              />
              <div className="flex justify-center my-4">
                <ReCAPTCHA
                  sitekey="xxx"
                  className=""
                  required
                />
              </div>
              <div className="p-2">
                <input
                  type="submit"
                  className="hover:translate-x-[-5px] mb-4 transition duration-200 ease-in-out w-fit p-3 px-8 h-12 border-b-4 shadow-lg border-b-blue-500 bg-blue-400 rounded-lg hover:bg-blue-300 font-bold text-white hover:translate-y-1 hover:border-b-0"
                  id="submit"
                />
                <i
                  className="fa-solid fa-check text-green-500 hidden"
                  id="check"
                ></i>
                <i
                  className="fa-solid fa-xmark text-red-500 hidden"
                  id="fail"
                ></i>
                <br />
              </div>
              <p className="text-sm text-red-500">
                *No data will be collected*
              </p>
            </form>

            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Discord: Void#0897
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <a href="mailto:adamsalem08@outlook.com">
                  Email: adamsalem08@outlook.com
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
