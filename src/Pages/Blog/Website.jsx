import "./css/website.css";

import Codeblock from "../../Components/Codeblock";

const Website = () => {
  return (
    <div className="content dark:bg-[#282828] bg-white dark:text-white text-black min-h-screen flex justify-center items-center">
      <div className="w-screen h-full flex justify-center items-center pb-2">
        <div className="w-[75%] max-sm:w-[100%] h-full pb-12 max-sm:mt-32 rounded-lg text-center dark:text-white">
          <h1 className="mt-24">How I created this site!</h1>
          <div className="flex w-full justify-center items-center">
            <hr className="border-2 inset-2 dark:border-white border-black w-[25vw]" />
          </div>{" "}
          <section className="why" id="why">
            <h2>Why?</h2>
            <p>I decided to create this website because:</p>
            <ul>
              <li>&#x2022; It looks good on resumes.</li>
              <li>&#x2022; I was kind of bored.</li>
              <li>
                &#x2022; It's a fun project/way to better my knowledge of web
                development
              </li>
            </ul>
          </section>
          <h2>How?</h2>
          <div className="flex w-full justify-center items-center">
            <hr className="border-2 inset-2 dark:border-white border-black w-[15vw]" />
          </div>
          <section className="how m-2" id="how">
            <h1>Create-React-App</h1>
            <p>
              Create-React-App is a utility that helps you create a new React
              project. <br /> It is very useful for getting React projects up
              and running quickly.
            </p>
            <Codeblock
              langHeader="CMD"
              lang="sh"
              code="npx create-react-app my-app
cd my-app
npm start"
              h="5"
              w="5"
            />
            <div className="w-full h-fit flex justify-center items-center">
              <a
                href="https://www.npmjs.com/package/create-react-app"
                className="block transition duration-200 ease-in-out w-fit p-3 mt-6 px-8 h-fit border-b-4 shadow-lg border-b-blue-500 bg-blue-400 rounded-lg hover:bg-blue-300 font-bold text-white hover:translate-y-1 hover:translate-x-[-5px] hover:border-b-0"
              >
                NPM project for Create-React-App.
              </a>
            </div>
            <div className="w-full flex justify-center items-center mt-4">
              <div className="bg-neutral-900 pb-4 px-6 rounded-lg">
                <div className="w-fit px-12 h-fit bg-neutral-700 m-2 rounded-lg text-white">
                  CMD
                </div>
                <div className="bg-zinc-700  text-white w-fit p-2 rounded-lg">
                  <p>{`npx create-react-app my-app
cd my-app
npm start`}</p>
                </div>
              </div>
            </div>
            <br />
            <h1>TailwindCSS.</h1>
            <div className="flex w-full justify-center items-center mt-2">
              <hr className="border-2 inset-2 dark:border-white border-black w-[15vw]" />
            </div>
            <p className="mt-4">
              Tail wind CSS is contains utility classes for CSS. <br />
              Which speeds up development, and makes it way easier to code the
              website.
            </p>
            <h1>TailwindCSS Code Sample</h1>
            <div className="flex w-full justify-center items-center mt-2">
              <hr className="border-2 inset-2 dark:border-white border-black w-[15vw]" />
            </div>
            <Codeblock
              langHeader="CSS"
              lang="css"
              code={`element {
  margin-top: 5px;
}`}
              h="5"
              w="15"
            />

            <h3>Same code but with TailwindCSS</h3>
            <Codeblock
              langHeader="HTML"
              lang="html"
              code='<element class="mt-[5px]" />'
              h="16"
              w="15"
            />
            <h1>Making the Contact Form.</h1>
            <div className="flex w-full justify-center items-center mt-2">
              <hr className="border-2 inset-2 dark:border-white border-black w-[15vw]" />
            </div>
            <div className="flex justify-center items-center mb-6">
              <p className="mt-2 w-[65%]">
                For the contact form I had to learn a lot of new code. First, I
                learned how to make a backend with express.js second, I learned
                how to work with the google gmail API and reCAPTCHA to send
                emails and make sure my inbox doesn't get spammed. Then I had to
                learn how to deploy frontend and backend at the same time and
                have them communicate JSON data. I also had to make the contact
                form look pretty.
              </p>
            </div>
            <h1>
              Deploying with{" "}
              <a
                href="https://hop.io"
                className="underline underline-offset-4 hover:text-green-500 duration-300"
              >
                Hop.
              </a>
              <span className="text-red-600">❤</span>
            </h1>

            <div className="flex justify-center items-center">
              <p className="w-[65%]">
                After I was done with most of the code it was time to test.
                Before this point I had not deployed this particular project
                before. Some people may ask: "What's Hop"; and "Why Hop?". Hop;
                specifically Ignite let's you login with GitHub and deploy your
                app. Whenever you make a commit it rebuilds. Why Hop? Hop is
                free forever (inbound traffic), Hop is very easy to work with
                and whenever I did run into a bug (It's in private beta
                currently) The employees at Hop helped me out in a timely
                manner. Thanks Rob#0642, cody#0004, Dustin#1999, pxseu#3020.
              </p>
            </div>
            <br />
            <br />
            <br />
            <p>
              This concludes my first blog post. They will probably get better
              over time (This is my first one) especially since this one was
              kind of rushed.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Website;
