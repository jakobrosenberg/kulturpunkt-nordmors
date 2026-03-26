import { defineConfig } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "home",
        label: "Home Page",
        path: "content",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        fields: [
          {
            name: "meta",
            label: "SEO",
            type: "object",
            fields: [
              {
                name: "title",
                label: "Page title",
                type: "string",
                required: true
              },
              {
                name: "description",
                label: "Meta description",
                type: "string",
                required: true
              }
            ]
          },
          {
            name: "hero",
            label: "Hero",
            type: "object",
            fields: [
              {
                name: "titleLineOne",
                label: "Title line one",
                type: "string",
                required: true
              },
              {
                name: "titleLineTwo",
                label: "Title line two",
                type: "string",
                required: true
              },
              {
                name: "subtitle",
                label: "Subtitle",
                type: "string",
                required: true
              },
              {
                name: "dateLineOne",
                label: "Date line one",
                type: "string",
                required: true
              },
              {
                name: "dateLineTwo",
                label: "Date line two",
                type: "string",
                required: true
              },
              {
                name: "location",
                label: "Location",
                type: "string",
                required: true
              },
              {
                name: "timeBadge",
                label: "Time badge",
                type: "string",
                required: true
              },
              {
                name: "scrollHint",
                label: "Scroll hint",
                type: "string",
                required: true
              }
            ]
          },
          {
            name: "intro",
            label: "Intro band",
            type: "object",
            fields: [
              {
                name: "beforeHighlight",
                label: "Text before highlight",
                type: "string",
                required: true
              },
              {
                name: "highlight",
                label: "Highlighted text",
                type: "string",
                required: true
              },
              {
                name: "afterHighlight",
                label: "Text after highlight",
                type: "string",
                required: true
              },
              {
                name: "stats",
                label: "Stats",
                type: "object",
                list: true,
                ui: {
                  itemProps: (item) => ({
                    label: item?.label || "Stat"
                  })
                },
                fields: [
                  {
                    name: "value",
                    label: "Value",
                    type: "string",
                    required: true
                  },
                  {
                    name: "label",
                    label: "Label",
                    type: "string",
                    required: true
                  }
                ]
              }
            ]
          },
          {
            name: "program",
            label: "Program section",
            type: "object",
            fields: [
              {
                name: "label",
                label: "Section label",
                type: "string",
                required: true
              },
              {
                name: "title",
                label: "Section title",
                type: "string",
                required: true
              },
              {
                name: "items",
                label: "Program items",
                type: "object",
                list: true,
                ui: {
                  itemProps: (item) => ({
                    label: item?.title || "Program item"
                  })
                },
                fields: [
                  {
                    name: "time",
                    label: "Time",
                    type: "string",
                    required: true
                  },
                  {
                    name: "title",
                    label: "Title",
                    type: "string",
                    required: true
                  },
                  {
                    name: "description",
                    label: "Description",
                    type: "string",
                    required: true
                  },
                  {
                    name: "tagLabel",
                    label: "Tag label",
                    type: "string",
                    required: true
                  },
                  {
                    name: "tagStyle",
                    label: "Tag style",
                    type: "string",
                    options: [
                      "scene",
                      "kultur",
                      "mad"
                    ],
                    required: true
                  }
                ]
              }
            ]
          },
          {
            name: "activities",
            label: "Activities section",
            type: "object",
            fields: [
              {
                name: "label",
                label: "Section label",
                type: "string",
                required: true
              },
              {
                name: "title",
                label: "Section title",
                type: "string",
                required: true
              },
              {
                name: "items",
                label: "Activity cards",
                type: "object",
                list: true,
                ui: {
                  itemProps: (item) => ({
                    label: item?.title || "Activity"
                  })
                },
                fields: [
                  {
                    name: "categoryLabel",
                    label: "Category label",
                    type: "string",
                    required: true
                  },
                  {
                    name: "categoryStyle",
                    label: "Category style",
                    type: "string",
                    options: [
                      "workshop",
                      "boern",
                      "natur",
                      "musik"
                    ],
                    required: true
                  },
                  {
                    name: "title",
                    label: "Title",
                    type: "string",
                    required: true
                  },
                  {
                    name: "description",
                    label: "Description",
                    type: "string",
                    required: true
                  }
                ]
              }
            ]
          },
          {
            name: "food",
            label: "Food section",
            type: "object",
            fields: [
              {
                name: "label",
                label: "Section label",
                type: "string",
                required: true
              },
              {
                name: "title",
                label: "Section title",
                type: "string",
                required: true
              },
              {
                name: "items",
                label: "Food items",
                type: "object",
                list: true,
                ui: {
                  itemProps: (item) => ({
                    label: item?.name || "Food item"
                  })
                },
                fields: [
                  {
                    name: "name",
                    label: "Name",
                    type: "string",
                    required: true
                  },
                  {
                    name: "description",
                    label: "Description",
                    type: "string",
                    required: true
                  }
                ]
              }
            ]
          },
          {
            name: "market",
            label: "Market section",
            type: "object",
            fields: [
              {
                name: "label",
                label: "Section label",
                type: "string",
                required: true
              },
              {
                name: "title",
                label: "Section title",
                type: "string",
                required: true
              },
              {
                name: "items",
                label: "Exhibitors",
                type: "string",
                list: true,
                required: true
              }
            ]
          },
          {
            name: "practical",
            label: "Practical info",
            type: "object",
            fields: [
              {
                name: "label",
                label: "Section label",
                type: "string",
                required: true
              },
              {
                name: "title",
                label: "Section title",
                type: "string",
                required: true
              },
              {
                name: "items",
                label: "Info cards",
                type: "object",
                list: true,
                ui: {
                  itemProps: (item) => ({
                    label: item?.title || "Info card"
                  })
                },
                fields: [
                  {
                    name: "title",
                    label: "Title",
                    type: "string",
                    required: true
                  },
                  {
                    name: "description",
                    label: "Description",
                    type: "string",
                    required: true
                  }
                ]
              }
            ]
          },
          {
            name: "footer",
            label: "Footer",
            type: "object",
            fields: [
              {
                name: "title",
                label: "Footer title",
                type: "string",
                required: true
              },
              {
                name: "summary",
                label: "Footer summary",
                type: "string",
                required: true
              },
              {
                name: "note",
                label: "Footer note",
                type: "string",
                required: true
              }
            ]
          }
        ]
      }
    ]
  }
});
