export default function routes() {
  this.namespace = "api";

  this.get("/users", (schema) => {
    console.log(schema);
    return schema.users.all();
  });

  this.post("/users/", function (schema, request) {
    const data = JSON.parse(request.requestBody);
    return schema.users.create(data);
  });
}
