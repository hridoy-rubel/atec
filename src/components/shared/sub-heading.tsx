import Balancer from "react-wrap-balancer";

type SubHeadingPropTypes = {
  content: string;
};

const SubHeading = ({ content }: SubHeadingPropTypes) => {
  return (
    <h3 className="text-blue-700 font-bold sm:text-lg md:text-xl lg:text-2xl mb-4 tracking-widest">
      {content}
    </h3>
  );
};

export default SubHeading;
