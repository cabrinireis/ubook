export default function routes() {
  this.namespace = "api";

  this.get("/users", (schema) => {
    return schema.users.all();
  });

  this.post("/users/", function (schema, request) {
    const data = JSON.parse(request.requestBody);
    return schema.users.create(data);
  });

  this.post(`/users/:id`, function (schema, request) {
    const id = request.params.id;
    const contact = schema.users.find(id);
    console.log(contact);
    const body = JSON.parse(request.requestBody);
    console.log(body);
    return contact.update(body);
  });

  this.delete(`/users/:id`, function (schema, request) {
    const id = request.params.id;
    console.log(request);
    const item = schema.users.find(id);
    return item.destroy();
  });
}
