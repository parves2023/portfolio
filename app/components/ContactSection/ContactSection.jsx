
import Link from "next/link";
import { MdDownload } from "react-icons/md";
const ContactSection = () => {
 
 

 

  return (
    <section className="text-sky-600 body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-[#0d1224] rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="600"
            className="absolute inset-0"
            frameborder="0"
            title="map"
            marginheight="0"
            marginwidth="0"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29225.48770387285!2d90.4304531!3d23.705052300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9b7c6ad636b%3A0x199bbf99786b16f6!2sDcc%20(Sutrapur)%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1729489444634!5m2!1sen!2sbd"
            style={{ filter: 'grayscale(.731) contrast(1.2) opacity(0.4)' }}
          />
          <div className="bg-[#0d1224] relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-sky-500 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                Photo booth tattooed prism, portland taiyaki hoodie neutra
                typewriter
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-sky-500 tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-500 leading-relaxed">parvesmosarof2@email.com</a>
              <h2 className="title-font font-semibold text-sky-500 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">01516502364</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-[#0d1224] flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-sky-500 text-lg mb-1 font-medium title-font">
            Feedback
          </h2>
          <p className="leading-relaxed mb-5 text-sky-200">
            Post-ironic portland shabby chic echo park, banjo fashion axe
          </p>
          <form>
            <div className="relative mb-4">
              <label for="name" className="leading-7 text-sm text-sky-200">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                
              
                className="w-full bg-[#0d1224] rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label for="email" className="leading-7 text-sm text-sky-200">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
               
                className="w-full bg-[#0d1224] rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label for="message" className="leading-7 text-sm text-sky-200">
                Message
              </label>
              <textarea
                id="message"
                name="message"
             
                className="w-full bg-[#0d1224] rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <div className="w-full justify-center flex items-center gap-3 mt-6">
            <Link target="_blank" href='/' className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
              <button className="px-3 text-xs md:px-4 py-2 md:py-2.5 bg-[#0d1224] rounded-full border-none text-center font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Get Resume</span>
                <MdDownload size={16} />
              </button>
            </Link>
          </div>
          </form>
          <p className="text-xs text-gray-500 mt-3">
            Chicharrones blog helvetica normcore iceland tousled brook viral
            artisan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;