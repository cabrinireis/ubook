import { faker } from "@faker-js/faker";
import { Factory } from "miragejs";

export default {
  user: Factory.extend({
    name() {
      return faker.name.fullName();
    },
  }),
};
