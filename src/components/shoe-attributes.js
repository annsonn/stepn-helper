export const ShoeAttributes = ({ sneaker: { attributes: sneakerAttributes } = {} }) => {
    return <p>{JSON.stringify(sneakerAttributes)}</p>;
  };
  