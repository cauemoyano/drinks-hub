import { slugify } from "./slugify";

const strings = [
  ["Elon Musk considers move to Mars", "elon-musk-considers-move-to-mars"],
  [
    "Fintech startups raised $34B in 2019",
    "fintech-startups-raised-34b-in-2019",
  ],
  [
    "Shopify joins Facebook’s cryptocurrency Libra Association",
    "shopify-joins-facebooks-cryptocurrency-libra-association",
  ],
  [
    "What is a slug and how to optimize it?",
    "what-is-a-slug-and-how-to-optimize-it",
  ],
];
test.each(strings)(
  "should convert an string into kebab case",
  (input, expected) => {
    let res = slugify(input);
    expect(res).toBe(expected);
  }
);
