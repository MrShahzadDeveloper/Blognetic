import FreeMap from "../components/FreeMap";
import { contactList } from "../constant/cardLists";
import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mpwrrbpb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      alert("Error sending message: " + error.message);
    }
  };

  return (
    <>
      <section className="mt-16 mb-16 flex flex-col gap-10">
        <div className="flex flex-col items-center mx-4 sm:mx-0">
          <h1 className="text-[48px] font-[600] text-secondary ">
            Get in Touch
          </h1>
          <p className="text-center text-fourth  ">
            Contact us to publish your content and show ads to our{" "}
            <span className="sm:block mt-[1px] ">
              website and get a good reach.
            </span>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-10 sm:mx-32 lg:mx-52">
          {" "}
          {/* 3 columns with gap */}
          {contactList.map((items, index) => (
            <div
              key={index}
              className="flex flex-col gap-5 items-center bg-white p-16 rounded-3xl shadow-md h-full "
            >
              <div className="bg-primary p-4 rounded-full">{items.icon}</div>
              <h1 className="text-primary font-[500] text-xl text-center">
                {items.heading}
              </h1>
              <p className="text-third text-center">{items.para}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center gap-8 mb-[650px] md:mb-[500px] relative">
        <div className="w-full z-0 ">
          <FreeMap />
        </div>

        <div className="w-[80%] sm:w-1/2 bg-white p-8 rounded-xl shadow-md absolute top-[80%]">
          <h2 className="text-2xl font-bold mb-6 text-secondary">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="hidden"
              name="_subject"
              value={`New Contact: ${formData.subject || "No Subject"}`}
            />

            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-[48%]">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border  border-gray-300 rounded-md focus:outline-none focus:border-primary focus:ring-0 focus:ring-primary/50 transition-colors"
                  required
                />
              </div>

              <div className="w-full md:w-[48%]">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border  border-gray-300 rounded-md focus:outline-none focus:border-primary focus:ring-0 focus:ring-primary/50 transition-colors"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="w-full md:w-[48%]">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border  border-gray-300 rounded-md focus:outline-none focus:border-primary focus:ring-0 focus:ring-primary/50 transition-colors"
                />
              </div>

              <div className="w-full md:w-[48%]">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border  border-gray-300 rounded-md focus:outline-none focus:border-primary focus:ring-0 focus:ring-primary/50 transition-colors"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 p-2 w-full border  border-gray-300 rounded-md focus:outline-none focus:border-primary focus:ring-0 focus:ring-primary/50 transition-colors"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition md:px-8 md:py-3 cursor-pointer w-fit text-xs sm:text-base"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
