import { faker } from "@faker-js/faker";

type FilteredImages =
  | "/eventCover/presentation-cover.webp"
  | "/eventCover/get-together-cover.webp"
  | "/eventCover/gluhwein-cover.webp"
  | "/eventCover/professor-cover.webp"
  | "/eventCover/meeting-room-cover.webp"
  | "/eventCover/blue-presentation-cover.webp";

export interface Event {
  _id: string;
  name: string;
  description: string;
  date: string;
  location: string;
  price: string;
  image: FilteredImages;
  presenter: string;
  tickets: number;
}

export function fetchEvents(): Event[] {
  return Array.from({ length: 10 }, () => ({
    _id: faker.string.uuid(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    date: faker.date.future().getDay() + "/" + faker.date.future().getMonth(),
    location: faker.location.city(),
    price: faker.commerce.price(),
    image: faker.helpers.arrayElement([
      "/eventCover/presentation-cover.webp",
      "/eventCover/gluhwein-cover.webp",
      "/eventCover/professor-cover.webp",
      "/eventCover/get-together-cover.webp",
      "/eventCover/meeting-room-cover.webp",
      "/eventCover/blue-presentation-cover.webp",
    ]),
    presenter: faker.name.fullName(),
    tickets: faker.number.int({ min: 0, max: 100 }),
  }));
}
