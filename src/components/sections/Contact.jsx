import React from "react";

export default function Contact() {
  const [result, setResult] = React.useState("");
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiURL = import.meta.env.VITE_API_URL;

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending Email....");
    const formData = new FormData(event.target);
    console.log(apiKey);
    formData.append("access_key", apiKey);

    const response = await fetch(apiURL, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="px-3 w-150">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Please Reach Out!
        </h2>
        <h4 className="text-sm mb-1.5 text-center">
          Reach out to dylanhunter34@gmail.com if there are any issues with the
          form.
        </h4>
        <form className="space-y-6" onSubmit={onSubmit}>
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="Name"
            />
          </div>

          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="relative">
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="Type your message here 😊"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 border border-blue-700 rounded text-white py-3 px-6 font medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            Send
          </button>
        </form>
        <span className="w-full text-white font medium relative">{result}</span>
      </div>
    </section>
  );
}
