export default function seeds(server) {
  server.createList("user", 5);
  server.create("user", { name: "ola" });
}
