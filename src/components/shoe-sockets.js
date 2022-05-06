export const ShoeSockets = ({ sneaker: { sockets: sneakerSockets = {} } = {} }) => {
    return (<p>{JSON.stringify(sneakerSockets)}</p>);
  };
  