import React from "react";

type Props = {};

const ChooseUs = (props: Props) => {
  return (
    <div className="still_background_img p-8 text-accent-white">
      <div className="mx-auto w-5/6">
        {/* Heading */}
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold">Choose Us</h1>
          <p className="underline underline-offset-8">
            The Perfect Partner for your construction needs
          </p>
        </div>
        {/* content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 py-8">
          {/* 1 */}
          <div className="flex flex-col gap-1">
            <div className="text-xl font-bold text-accent-orange">
              Unmatched Expertise
            </div>
            <div>
              With a rich history and a team of highly skilled professionals, we
              bring extensive expertise and experience to every project,
              ensuring exceptional results.
            </div>
          </div>
          {/* 2 */}
          <div className="flex flex-col gap-1">
            <div className="text-xl font-bold text-accent-orange">
              Commitment to excellence
            </div>
            <div>
              We are deeply committed to delivering projects of the highest
              quality and innovation, surpassing client expectations and
              creating lasting value.
            </div>
          </div>
          {/* 3 */}
          <div className="flex flex-col gap-1">
            <div className="text-xl font-bold text-accent-orange">
              Strong Core Values
            </div>
            <div>
              Our foundation is built on integrity, professionalism,
              collaboration, and sustainability, guiding our actions and
              ensuring ethical practices throughout every aspect of our work.
            </div>
          </div>
          {/* 4 */}
          <div className="flex flex-col gap-1">
            <div className="text-xl font-bold text-accent-orange">
              Safety First
            </div>
            <div>
              We prioritize the safety and well-being of our workforce, clients,
              and communities. Our stringent safety protocols and continuous
              training guarantee a secure working environment on all our
              construction sites.
            </div>
          </div>
          {/* 5 */}
          <div className="flex flex-col gap-1">
            <div className="text-xl font-bold text-accent-orange">
              Sustainability Champions
            </div>
            <div>
              We are dedicated to minimizing environmental impact and promoting
              sustainability. Through innovative practices and the use of
              eco-friendly materials, we create buildings that are both visually
              appealing and environmentally conscious.
            </div>
          </div>
          {/* 6 */}
          <div className="flex flex-col gap-1">
            <div className="text-xl font-bold text-accent-orange">
              Technological Advancements
            </div>
            <div>
              Embracing emerging technologies and digital tools, such as BIM and
              advanced project management software, we enhance efficiency,
              optimize communication, and deliver projects with precision.
            </div>
          </div>
          {/* 7 */}
          <div className="flex flex-col gap-1">
            <div className="text-xl font-bold text-accent-orange">
              Long-Term Partnerships
            </div>
            <div>
              We foster strong, enduring partnerships with our clients, valuing
              their trust and collaborating closely to achieve their vision. Our
              client testimonials and endorsements are a testament to our
              commitment to excellence.
            </div>
          </div>
          {/* end */}
        </div>
        {/* more */}
        <div className="font-bold max-w-md text-accent-orange">
          Choosing our construction company means choosing a reliable,
          professional, and forward-thinking partner who will deliver
          exceptional results while upholding the highest standards of
          integrity, safety, and sustainability. We are excited to embark on new
          construction ventures and contribute to the realization of your
          vision.
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
