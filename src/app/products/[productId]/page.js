const DynamicPage = ({ params }) => {
  return (
    <div>
      <h1>Dynamic Produc page{params.productId}</h1>
    </div>
  );
};

export default DynamicPage;
