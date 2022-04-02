import { slugify, replaceSpaceByUnderline } from "./string.functions";

const slugifyStrings = [
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
const replacedSpaceStrings = [
  ["Elon Musk considers move to Mars", "Elon_Musk_considers_move_to_Mars"],
  [
    "Fintech startups raised $34B in 2019",
    "Fintech_startups_raised_$34B_in_2019",
  ],
  [
    "What is a slug and how to optimize it?",
    "What_is_a_slug_and_how_to_optimize_it?",
  ],
];

test.each(slugifyStrings)(
  "should convert an string into kebab case",
  (input, expected) => {
    let res = slugify(input);
    expect(res).toBe(expected);
  }
);
test.each(replacedSpaceStrings)(
  "should replace space by underscore",
  (input, expected) => {
    let res = replaceSpaceByUnderline(input);
    expect(res).toBe(expected);
  }
);
