export default function routes() {
  this.namespace = "api";

  this.get("/users", function (schema, request) {
    console.log("aa", request.queryParams);
    const query = request.queryParams.query;
    const data = schema.users.all();
    let filter = data.filter((q) => {
      return q.name.includes(query);
    });
    console.log("filter", filter);

    return query !== undefined ? filter : schema.users.all();
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
