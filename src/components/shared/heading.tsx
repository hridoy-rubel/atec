import Balancer from "react-wrap-balancer";

type HeadingPropTypes = {
  content: string;
};

const Heading = ({ content }: HeadingPropTypes) => {
  return (
    <h1 className="animate-fade-up font-urbanist text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-4">
      <Balancer>
        <span className="bg-gradient-to-r from-pink-700 to-purple-500 bg-clip-text font-extrabold text-transparent">
          {content}
        </span>
      </Balancer>
    </h1>
  );
};

export default Heading;
