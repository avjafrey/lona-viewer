export default {
  metadata: {},
  cases: [
    {
      name: "Default",
      value: {},
      type: "entry",
      visible: true
    }
  ],
  rootLayer: {
    children: [
      {
        children: [],
        name: "Image",
        type: "Image",
        parameters: {
          height: 44,
          borderRadius: 22,
          marginTop: 4,
          backgroundColor: "grey200",
          width: 44
        }
      },
      {
        children: [
          {
            children: [],
            name: "Primary Text",
            type: "Text",
            parameters: {
              text: "Two-line item",
              font: "subheading1"
            }
          },
          {
            children: [],
            name: "Secondary Text",
            type: "Text",
            parameters: {
              text: "Secondary text",
              font: "body1"
            }
          }
        ],
        name: "View 1",
        type: "View",
        parameters: {
          flex: 1,
          marginLeft: 16,
          marginTop: 0
        }
      }
    ],
    name: "View",
    type: "View",
    parameters: {
      flex: 0,
      alignSelf: "stretch",
      flexDirection: "row",
      paddingTop: 16,
      paddingBottom: 16,
      paddingLeft: 16,
      paddingRight: 16
    }
  },
  logic: [
    {
      function: {
        name: "assign(lhs, to rhs)",
        arguments: {
          rhs: {
            type: "identifier",
            value: {
              type: "String",
              path: ["layers", "Primary Text", "text"]
            }
          },
          lhs: {
            type: "identifier",
            value: {
              type: "String",
              path: ["parameters", "primaryText"]
            }
          }
        }
      },
      nodes: []
    },
    {
      function: {
        name: "assign(lhs, to rhs)",
        arguments: {
          rhs: {
            type: "identifier",
            value: {
              type: "String",
              path: ["layers", "Secondary Text", "text"]
            }
          },
          lhs: {
            type: "identifier",
            value: {
              type: "String",
              path: ["parameters", "secondaryText"]
            }
          }
        }
      },
      nodes: []
    },
    {
      function: {
        name: "assign(lhs, to rhs)",
        arguments: {
          rhs: {
            type: "identifier",
            value: {
              type: {
                name: "Named",
                of: "String",
                alias: "URL"
              },
              path: ["layers", "Image", "image"]
            }
          },
          lhs: {
            type: "identifier",
            value: {
              type: {
                name: "Named",
                of: "String",
                alias: "URL"
              },
              path: ["parameters", "image"]
            }
          }
        }
      },
      nodes: []
    }
  ],
  parameters: [
    {
      type: "String",
      name: "primaryText"
    },
    {
      type: "String",
      name: "secondaryText"
    },
    {
      type: "URL",
      name: "image"
    }
  ],
  canvases: [
    {
      name: "iPhone SE",
      height: 0,
      heightMode: "At Least",
      exportScale: 1,
      backgroundColor: "white",
      width: 320,
      parameters: {},
      visible: true
    },
    {
      name: "iPhone 7",
      height: 0,
      heightMode: "At Least",
      exportScale: 1,
      backgroundColor: "white",
      width: 375,
      parameters: {},
      visible: true
    },
    {
      name: "iPhone 7+",
      height: 0,
      heightMode: "At Least",
      exportScale: 1,
      backgroundColor: "white",
      width: 414,
      parameters: {},
      visible: true
    }
  ],
  config: {
    canvasLayout: "xy"
  }
};
