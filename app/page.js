"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { useTheme } from "./components/ThemeProvider";
import toast from "react-hot-toast";

export default function Home() {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const portfolioRef = useRef(null);
  const { display } = useTheme();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      toast.success("✅ Message sent successfully!");
      setForm({ name: "", email: "", subject: "", message: "" });
    } else {
      toast.error("❌ Failed to send message. Try again later.");
    }

    setIsSubmitting(false);
  };

  // Check if any field is empty
  const isFormValid = form.name && form.email && form.subject && form.message;

  const scrollToPortfolio = () => {
    portfolioRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main
      className={`flex w-screen justify-center ${
        display ? "bg-white text-gray-900" : "bg-gray-900 text-gray-100"
      }`}
    >
      <div className="flex flex-col w-full">
        <section className="flex lg:flex-row flex-col lg:mb-0 mb-15 items-center w-full min-h-screen">
          <div className="flex flex-col p-10 justify-center lg:w-[50%] w-[85%]">
            <h1
              className={`${
                display ? "text-gray-800" : "text-white"
              } text-3xl sm:text-4xl md:text-6xl lg:text-start text-center font-bold leading-tight mb-4`}
            >
              Crafting Digital Experiences with{" "}
              <span className="text-transparent lg:text-start text-center bg-clip-text gradient-logo">
                Sanket Visuals
              </span>
            </h1>
            <p
              className={`text-[16px] sm:text-lg lg:text-start text-center md:text-xl mb-8 ${
                display ? "text-gray-700" : "text-white"
              }`}
            >
              Fullstack developer building beautiful, functional, and user
              centric websites and applications.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              <span
                onClick={scrollToPortfolio}
                className="bg-[#F59E0B] text-gray-900 text-[10px] sm:text-[16px] font-semibold sm:py-3 sm:px-8 py-1 px-2 rounded-full hover:opacity-90 transition-opacity hover:cursor-pointer"
              >
                View My Work
              </span>
              <span
                onClick={scrollToContact}
                className="bg-gray-200 hover:cursor-pointer sm:text-[16px] text-[10px] font-semibold sm:py-3 sm:px-8 py-1 px-2 rounded-full hover:bg-gray-300 !text-black transition-colors"
              >
                Get In Touch
              </span>
            </div>
          </div>
          <div className="w-[50%] flex justify-center items-center">
            <div className="w-32 h-32 sm:w-64 sm:h-64 lg:w-96 lg:h-96 rounded-full gradient-logo flex items-center justify-center shadow-2xl">
              <span className="text-white text-6xl sm:text-8xl md:text-9xl font-bold">
                SV
              </span>
            </div>
          </div>
        </section>
        <section
          className={`py-20 ${display ? "" : "bg-gray-800"} scroll-mt-0`}
          id="about"
          ref={aboutRef}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-text-light">
              About Me
            </h2>
            <div className="flex flex-col lg:flex-row items-center xl:gap-12 gap-20">
              <div className="md:w-1/3">
                <div className="w-64 h-64 lg:w-96 lg:h-96 rounded-2xl gradient-logo flex items-center justify-center shadow-2xl">
                  <span className="text-white text-8xl md:text-9xl font-bold">
                    SV
                  </span>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold mb-4 text-text-light">
                  Hello, I'm Sanket!
                </h3>
                <p
                  className={`${
                    display ? "text-gray-600" : "text-white"
                  } leading-relaxed mb-4`}
                >
                  I'm a passionate fullstack developer with a keen eye for
                  design and a love for creating seamless digital experiences.
                  My journey into development started with a fascination for how
                  things work, which quickly evolved into a career building
                  robust and beautiful applications.
                </p>
                <p
                  className={`${
                    display ? "text-gray-600" : "text-white"
                  } leading-relaxed`}
                >
                  With a foundation in both front-end and back-end technologies,
                  I bring ideas to life from conception to deployment. My goal
                  is to not just write code, but to solve problems and create
                  value for my clients and their users. Let's build something
                  amazing together!
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          className="py-20 scroll-mt-0 bg-background-light"
          id="services"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-text-light">
              Services I Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div
                className={`p-8 rounded-lg shadow-md ${
                  display ? "" : "bg-gray-800"
                } hover:shadow-xl transition-shadow duration-300`}
              >
                <div className="flex items-center mb-4">
                  <span className="material-icons text-4xl text-primary mr-4">
                    <Image
                      width={35}
                      height={35}
                      priority
                      src={"/code.svg"}
                      alt="Code"
                    />
                  </span>
                  <h3 className="text-xl font-semibold text-text-light">
                    Web Development
                  </h3>
                </div>
                <p className={`${display ? "text-gray-600" : "text-white"}`}>
                  From scratch or based on a template, I build responsive,
                  high-performing websites that look great on all devices.
                </p>
              </div>
              <div
                className={`p-8 rounded-lg shadow-md ${
                  display ? "" : "bg-gray-800"
                } hover:shadow-xl transition-shadow duration-300`}
              >
                <div className="flex items-center mb-4">
                  <span className="material-icons text-4xl text-primary mr-4">
                    <Image
                      width={35}
                      height={35}
                      priority
                      src={"/palette.svg"}
                      alt="Palette"
                    />
                  </span>
                  <h3 className="text-xl font-semibold text-text-light">
                    Web Design
                  </h3>
                </div>
                <p className={`${display ? "text-gray-600" : "text-white"}`}>
                  I create intuitive and beautiful user interfaces that enhance
                  user experience and engagement.
                </p>
              </div>
              <div
                className={`p-8 rounded-lg shadow-md ${
                  display ? "" : "bg-gray-800"
                } hover:shadow-xl transition-shadow duration-300`}
              >
                <div className="flex items-center mb-4">
                  <span className="material-icons text-4xl text-primary mr-4">
                    <Image
                      width={35}
                      height={35}
                      priority
                      src={"/storage.svg"}
                      alt="Storage"
                    />
                  </span>
                  <h3 className="text-xl font-semibold text-text-light">
                    Backend Development
                  </h3>
                </div>
                <p className={`${display ? "text-gray-600" : "text-white"}`}>
                  Building scalable and secure server-side applications and APIs
                  to power your web projects.
                </p>
              </div>
              <div
                className={`p-8 rounded-lg shadow-md ${
                  display ? "" : "bg-gray-800"
                } hover:shadow-xl transition-shadow duration-300`}
              >
                <div className="flex items-center mb-4">
                  <span className="material-icons text-4xl text-primary mr-4">
                    <Image
                      width={35}
                      height={35}
                      priority
                      src={"/bug_report.svg"}
                      alt="Bug"
                    />
                  </span>
                  <h3 className="text-xl font-semibold text-text-light">
                    Bug Fixing
                  </h3>
                </div>
                <p className={`${display ? "text-gray-600" : "text-white"}`}>
                  Annoying bug slowing you down? I'll hunt it down and squash it
                  for good, ensuring your website or app runs smoothly.
                </p>
              </div>
              <div
                className={`p-8 rounded-lg shadow-md ${
                  display ? "" : "bg-gray-800"
                } hover:shadow-xl transition-shadow duration-300`}
              >
                <div className="flex items-center mb-4">
                  <span className="material-icons text-4xl text-primary mr-4">
                    <Image
                      width={35}
                      height={35}
                      priority
                      src={"/system_update.svg"}
                      alt="System Update"
                    />
                  </span>
                  <h3 className="text-xl font-semibold text-text-light">
                    Plugin/Theme Updates
                  </h3>
                </div>
                <p className={`${display ? "text-gray-600" : "text-white"}`}>
                  Keeping your tech stack up-to-date is crucial. I'll handle
                  updates for plugins and themes to keep your site secure and
                  modern.
                </p>
              </div>
              <div
                className={`p-8 rounded-lg shadow-md ${
                  display ? "" : "bg-gray-800"
                } hover:shadow-xl transition-shadow duration-300`}
              >
                <div className="flex items-center mb-4">
                  <span className="material-icons text-4xl text-primary mr-4">
                    <Image
                      width={35}
                      height={35}
                      priority
                      src={"/monitor.svg"}
                      alt="monitor"
                    />
                  </span>
                  <h3 className="text-xl font-semibold text-text-light">
                    Performance Monitoring
                  </h3>
                </div>
                <p className={`${display ? "text-gray-600" : "text-white"}`}>
                  A slow site loses visitors. I'll monitor performance, identify
                  bottlenecks, and implement optimizations for fast load times.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          className=" py-20 scroll-mt-0"
          id="portfolio"
          ref={portfolioRef}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-12 text-text-light">
              Portfolio
            </h2>
            <p className={`${display ? "text-gray-600" : "text-white"} mb-8`}>
              My work is coming soon. Please check back later!
            </p>
            <h3 className="mt-10 font-bold text-5xl">No work yet..</h3>
          </div>
        </section>
        <section ref={contactRef} className="py-20 scroll-mt-0 bg-background-light" id="contact">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-4 text-text-light">
              Contact Me
            </h2>
            <p
              className={`${
                display ? "text-gray-600" : "text-white"
              } mb-8 max-w-2xl mx-auto text-center`}
            >
              I'm currently available for freelance projects. If you have a
              project in mind or just want to say hello, feel free to reach out.
            </p>
            <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <form onSubmit={handleSubmit} className="space-y-6" method="POST">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <div className="mt-1">
                    <input
                      className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm text-text-light"
                      id="name"
                      autoComplete="name"
                      name="name"
                      type="text"
                      value={form.name} // ✅ connect to state
                      onChange={handleChange} // ✅ update state
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <div className="mt-1">
                    <input
                      className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm text-text-light"
                      id="email"
                      autoComplete="email"
                      name="email"
                      type="email"
                      value={form.email} // ✅ connect to state
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <div className="mt-1">
                    <input
                      className="block w-full px-3 py-2 bg-white border-gray-300  rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm text-text-light"
                      id="subject"
                      name="subject"
                      type="text"
                      value={form.subject} // ✅ connect to state
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      className="block text-gray-900 w-full px-3 py-2 bg-white border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm "
                      id="message"
                      name="message"
                      rows="4"
                      value={form.message} // ✅ connect to state
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <button
                    className={`bg-[#F59E0B] text-white text-[10px] sm:text-[16px] font-semibold sm:py-3 sm:px-8 py-1 px-2 rounded-full transition-opacity ${
                      !isFormValid || isSubmitting
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:opacity-90 hover:cursor-pointer"
                    }`}
                    type="submit"
                    disabled={!isFormValid || isSubmitting} // ✅ disable until all filled
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
