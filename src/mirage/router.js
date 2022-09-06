export default function routes() {
  this.namespace = "api";

  this.get("/contacts", function (schema, request) {
    console.log("aa", request.queryParams);
    const query = request.queryParams.query;
    const data = schema.contacts.all();
    let filter = data.filter((q) => {
      return q.name.includes(query);
    });
    console.log("filter", filter);

    return query !== undefined ? filter : schema.contacts.all();
  });

  this.post("/contacts/", function (schema, request) {
    const data = JSON.parse(request.requestBody);
    return schema.contacts.create(data);
  });

  this.post(`/contacts/:id`, function (schema, request) {
    const id = request.params.id;
    const contact = schema.contacts.find(id);
    console.log(contact);
    const body = JSON.parse(request.requestBody);
    console.log(body);
    return contact.update(body);
  });

  this.delete(`/contacts/:id`, function (schema, request) {
    const id = request.params.id;
    console.log(request);
    const item = schema.contacts.find(id);
    return item.destroy();
  });
}
