export interface ICategories {
  id: number;
  name: string;
  parentId: number | null;
}

// let categories = Array.from($0.querySelectorAll('.node-label')).map(el => el.textContent.trim());
// console.log(categories);

// Turn this into subcategories
[
  "Baby Boys",
  "Baby Girls",
  "Other (Baby)"
]
export const categories: ICategories[] = [
  {
    id: 1,
    name: 'Fashion',
    parentId: null
  },
  {
    id: 2,
    name: "Baby",
    parentId: 1
  },
  {
    id: 3,
    name: "Bags & Luggage",
    parentId: 1
  },
  {
    id: 4,
    name: "Boys",
    parentId: 1
  },
  {
    id: 5,
    name: "Girls",
    parentId: 1
  },
  {
    id: 6,
    name: "Men",
    parentId: 1
  },
  {
    id: 7,
    name: "Novelty & Special Use",
    parentId: 1
  },
  {
    id: 8,
    name: "Other (Fashion)",
    parentId: 1
  },
  {
    id: 9,
    name: "Shoe, Jewelry & Watch Accessories",
    parentId: 1
  },
  {
    id: 10,
    name: "Sport Specific Clothing",
    parentId: 1
  },
  {
    id: 11,
    name: "Women",
    parentId: 1
  }
];
