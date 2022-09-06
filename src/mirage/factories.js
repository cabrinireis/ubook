import { faker } from "@faker-js/faker";
import { Factory } from "miragejs";

export default {
  contact: Factory.extend({
    name() {
      return faker.name.fullName();
    },
    email() {
      return faker.internet.email();
    },
    phone() {
      return faker.phone.number("(62)#####-####");
    },
  }),
};
