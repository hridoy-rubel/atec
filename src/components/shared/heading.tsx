import Balancer from "react-wrap-balancer";

type HeadingPropTypes = {
  content: string;
};

const Heading = ({ content }: HeadingPropTypes) => {
  return (
    <h1 className="animate-fade-up font-urbanist  font-extrabold tracking-tight text-2xl md:text-4xl lg:text-5xl xl:text-5xl mb-4">
      <Balancer>
        <span className="bg-gradient-to-r from-pink-700 to-purple-500 bg-clip-text font-extrabold text-transparent">
          {content}
        </span>
      </Balancer>
    </h1>
  );
};

export default Heading;
