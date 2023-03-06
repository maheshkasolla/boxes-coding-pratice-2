const Box = (props) => {
  //  Write your code here.
  const { className, children } = props;
  return (
    <div className="bg_container">
      <div className={className}>{children}</div>;
    </div>
  );
};

const element = (
  //  Write your code here.
  <div>
    <h1 className="heading">Boxes</h1>
    <Box className="container1 paragraph" children="small" />
    <Box className="container2 paragraph" children="medium" />
    <Box className="container3 paragraph" children="large" />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
