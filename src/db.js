import Dexie from "dexie";

export const db = new Dexie("StepNHelper");

db.version(1).stores({
  sneakers: "++id, type, attributes, sockets",
});

db.open();