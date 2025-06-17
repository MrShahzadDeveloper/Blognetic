const Terms = () => {
  return (
    <section className="flex flex-col justify-center items-center mt-16 ">
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="text-3xl sm:text-5xl font-[500] text-secondary ">
          Terms & Conditions
        </h1>
        <p className="text-third text-center text-xl mx-8 md:mx-0 ">
          Welcome to Blognetic. By accessing and using this website, you agree
          to comply with these Terms & Conditions.{" "}
          <span className="block ">
            If you do not agree, please refrain from using this site.
          </span>
        </p>
      </div>
      <section className="mt-16 mb-16 w-[80%] flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <h1 className="text-secondary text-2xl font-[500] ">1. Intellectual Property</h1>
          <p className="text-third text-lg ml-6 ">
            All content on this blog (articles, images, logos, etc.) is the
            property of Blognetic and protected by copyright laws. Unauthorized
            use, reproduction, or distribution without permission is strictly
            prohibited.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-secondary text-2xl font-[500] ">2. User Responsibilities</h1>
          <ul
            className="list-inside list-decimal text-lg text-third ml-6 "
            style={{ listStyleType: "none" }}
          >
            <li>
              <span style={{ marginRight: "0.5rem" }} className="font-bold text-2xl text-primary">•</span>You may not use
              this site for illegal or harmful purposes.
            </li>
            <li>
              <span style={{ marginRight: "0.5rem" }} className="font-bold text-2xl text-primary">•</span>Do not copy,
              redistribute, or claim our content as your own.
            </li>
            <li>
              <span style={{ marginRight: "0.5rem" }} className="font-bold text-2xl text-primary">•</span>Comments should be
              respectful; spam or abusive content will be removed
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-secondary text-2xl font-[500] ">3. Disclaimer</h1>
          <p className="text-third text-lg ml-6 ">
            The information provided on this blog is for general purposes only.
            We do not guarantee accuracy, completeness, or reliability. Use the
            content at your own risk.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-secondary text-2xl font-[500] ">4. Limitation of Liability</h1>
          <p className="text-third text-lg ml-6 ">
            Blognetic is not liable for any damages or losses resulting from the
            use of this website.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-secondary text-2xl font-[500] ">5. External Links</h1>
          <p className="text-third text-lg ml-6 ">
            This blog may contain links to third-party websites. We are not
            responsible for their content or privacy practices.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-secondary text-2xl font-[500] ">6. Changes to These Terms</h1>
          <p className="text-third text-lg ml-6 ">
            We may update these Terms & Conditions at any time. Continued use of
            the site means you accept the revised terms.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-secondary text-2xl font-[500] ">7. Governing Law</h1>
          <p className="text-third text-lg ml-6 ">These terms are governed by the laws of Pakistan/Rawalpindi.</p>
        </div>
      </section>
    </section>
  );
};

export default Terms;
