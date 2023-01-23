import ContentLoader from "react-content-loader";

const PizzaBlockSkeleton = () => (
  <div className="pizza-block-wrapper">
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={255}
      height={460}
      viewBox="0 0 280 500"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="145" cy="134" r="134" />
      <rect x="0" y="300" rx="10" ry="10" width="280" height="22" />
      <rect x="0" y="350" rx="10" ry="10" width="280" height="88" />
      <rect x="0" y="463" rx="10" ry="10" width="134" height="30" />
      <rect x="157" y="455" rx="20" ry="20" width="123" height="45" />
    </ContentLoader>
  </div>
);

export default PizzaBlockSkeleton;
