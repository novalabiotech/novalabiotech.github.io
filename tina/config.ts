import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
// const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";
const branch = "main";

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "static"
  },
  // media: {
  //   tina: {
  //     mediaRoot: "img",
  //     publicFolder: "static",

  //   },
  // },
  schema: {
    collections: [
      {
        name: "blog",
        label: "Blogs",
        path: "content/blog",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "boolean",
            name: "featured",
            label: "Featured",
          },
          {
            type: "string",
            name: "synopsis",
            label: "Synopsis (text to appear on home page)",
          },
          {
            type: "image",
            name: "banner",
            label: "Banner",
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true
          },
          {
            type: "string",
            name: "categories",
            label: "Categories",
            list: true
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "product",
        label: "Products",
        path: "content/products",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "boolean",
            name: "featured",
            label: "Featured on homepage",
          },
          {
            type: "string",
            name: "synopsis",
            label: "Synopsis (text to appear on home page)",
          },
          {
            type: "string",
            name: "icon",
            label: "Icon (if appears on home page)",
          },
          {
            type: "image",
            name: "banner",
            label: "Banner",
          },
          {
            type: "number",
            name: "order",
            label: "Order(Lower comes first)",
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true
          },
          {
            type: "string",
            name: "keywords",
            label: "Keywords",
            list: true
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
