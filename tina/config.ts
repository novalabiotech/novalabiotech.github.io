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
  media: {
    tina: {
      mediaRoot: "img",
      publicFolder: "static",

    },
  },
  schema: {
    collections: [
      {
        name: "blog",
        label: "Blogs",
        path: "content/blog",
        ui: {
          filename: {
            slugify: (values) => {
              return `${values?.title?.toLowerCase()
                .replace(/ /g, '-')
                .replace(/[^-a-zA-Z_0-9]/g, '')}`
            },
          },
        },
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
            required: true
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
        ui: {
          filename: {
            slugify: (values) => {
              return `${values?.title?.toLowerCase()
                .replace(/ /g, '-')
                .replace(/[^-a-zA-Z_0-9]/g, '')}`
            },
          },
        },
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
      {
        name: "testimonial",
        label: "Testimonials",
        path: "data/testimonials",
        format: "yaml",
        ui: {
          filename: {
            slugify: (values) => {
              return `${values?.order || ''}-${values?.title
                ?.toLowerCase()
                .replace(/ /g, '-')
                .replace(/[^-a-zA-Z_0-9]/g, '')}`
            },
          },
        },
        fields: [
          {
            type: "string",
            name: "name",
            label: "Name",
            required: true,
          },
          {
            type: "number",
            name: "order",
            label: "Order(Lower comes first)",
            required: true,
          },
          {
            type: "string",
            name: "position",
            label: "Position",
          },
          {
            type: "image",
            name: "avatar",
            label: "Avatar",
          },
          {
            type: "string",
            name: "text",
            label: "Text",
            required: true,
            ui: {
              component: "textarea"
            }
          },
        ],
      },
      {
        name: "partners",
        label: "Partners",
        path: "data/clients",
        format: "yaml",
        ui: {
          filename: {
            // Example of using a custom slugify function
            slugify: (values) => {
              // Values is an object containing all the values of the form. In this case it is {title?: string, topic?: string}
              return `${values?.order || ''}-${values?.name
                ?.toLowerCase()
                .replace(/ /g, '-')
                .replace(/[^-a-zA-Z_0-9]/g, '')
              }`
            },
          },
        },
        fields: [
          {
            type: "string",
            name: "name",
            label: "Name",
            required: true,
          },
          {
            type: "number",
            name: "order",
            label: "Order(Lower comes first)",
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Image",
            required: true,
          },
          {
            type: "string",
            name: "url",
            label: "URL"
          },
        ],
      },
      {
        name: "team",
        label: "Team",
        path: "data/team/",
        format: "yaml",
        ui: {
          filename: {
            slugify: (values) => {
              return `${values?.order || ''}-${values?.name
                ?.toLowerCase()
                .replace(/ /g, '-')
                .replace(/[^-a-zA-Z_0-9]/g, '')}`
            },
          },
        },
        fields: [
          {
            type: "string",
            name: "name",
            label: "Name",
            required: true,
          },
          {
            type: "number",
            name: "order",
            label: "Order(Lower comes first)",
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Image",
            required: true,
          },
          {
            type: "string",
            name: "position",
            label: "Position",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            required: true
          },
        ],
      },
      {
        name: "advisor",
        label: "Advisors",
        path: "data/advisor/",
        format: "yaml",
        ui: {
          filename: {
            slugify: (values) => {
              return `${values?.order || ''}-${values?.name
                ?.toLowerCase()
                .replace(/ /g, '-')
                .replace(/[^-a-zA-Z_0-9]/g, '')}`
            },
          },
        },
        fields: [
          {
            type: "string",
            name: "name",
            label: "Name",
            required: true,
          },
          {
            type: "number",
            name: "order",
            label: "Order(Lower comes first)",
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Image",
            required: true,
          },
          {
            type: "string",
            name: "title",
            label: "Title and Affiliation",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            required: true
          },
        ],
      },
      {
        name: "about",
        label: "About pages",
        path: "content/about",
        match: {
          exclude: '{team,partners}'
        },
        ui: {
          filename: {
            slugify: (values) => {
              return `${values?.title?.toLowerCase()
                .replace(/ /g, '-')
                .replace(/[^-a-zA-Z_0-9]/g, '')}`
            },
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "image",
            name: "banner",
            label: "Banner",
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
