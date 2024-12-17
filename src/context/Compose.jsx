/* eslint-disable react/prop-types */
const Compose = (props) => {
  const { components = [], children } = props;

  return (
    <>
      {components.reduceRight((acc, Comp) => {
        return <Comp>{acc}</Comp>;
      }, children)}
    </>
  );
};

export default Compose;
