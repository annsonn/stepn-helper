export const ShoeType = ({ sneaker: { type: sneakerType } = {} }) => {
  return <p>{JSON.stringify(sneakerType)}</p>;
};
