import ContentLoader from "react-content-loader";

const PizzaBlockSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={250}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="145" cy="134" r="134" />
    <rect x="0" y="294" rx="10" ry="10" width="280" height="22" />
    <rect x="0" y="343" rx="10" ry="10" width="280" height="88" />
    <rect x="0" y="460" rx="10" ry="10" width="134" height="30" />
    <rect x="157" y="452" rx="20" ry="20" width="123" height="45" />
  </ContentLoader>
);

export default PizzaBlockSkeleton;
