export default {
  data() {
    return {
      configList: [],
    };
  },
  methods: {
    addConfig: function () {
      this.configList.push({
        name: this.suggestionStr(true),
        import: [],
        lifeCycleMethods: [],
        fetchTemp: {
          mode: "create",
          editIndex: 0,
          fetchName: "",
          apis: [],
          external: {
            mode: "create",
            editIndex: 0,
            uri: "",
            responseTypeName: "",
            responseType: "",
          },
          internal: {
            mode: "create",
            editIndex: 0,
            uri: "https://sls-front-api.io/",
            responseTypeName: "",
            path: "",
            responseTypes: [],
          },
          responseList: [
            "this.state.resCardData.data.title",
            "this.state.resCardData.data.subtitle",
            "this.state.resCardData.data.content",
          ],
        },
        fetch: [
          {
            method: "get",
            name: "cardData",
            lifeCycleMethods: ["componentDidMount"],
            apis: [
              {
                uri: "https://sls-front-api.io/",
                apiType: "internal",
                responseTypeName: "resCardData",
                responseTypeStrict: true,
                responseType: {
                  title: "string",
                  subtitle: "string",
                  content: "string",
                },
                config: {
                  path: `lambda${this.suggestionStr(true)}`,
                  mock: {
                    title: "カードタイトルだよぉ",
                    subtitle: "カードの「サブ」タイトルだよぉ",
                    content:
                      "おぎやはぎの矢作兼が５日、ＴＢＳ系「水曜日のダウンタウン」に出演。過去の「やらせ体験」を明かした。",
                  },
                },
              },
            ],
          },
        ],
        renderBeforeReturn: [],
        defaultProps: [],
        tagTemp: {
          editTagUID: "",
          editTag: "",
        },
        tags: [
          {
            uid: "",
            tag: "div",
            root: true,
            child: {
              tags: [
                {
                  uid: "",
                  tag: "IonCard",
                  props: [],
                  rawProps: "",
                  child: {
                    tags: [
                      {
                        uid: "",
                        tag: "IonCardHeader",
                        props: [],
                        rawProps: "",
                        child: {
                          tags: [
                            {
                              uid: "",
                              tag: "IonCardTitle",
                              code: "yes",
                              content: "this.state.resCardData.data.title",
                              noCR: "yes",
                              props: [],
                              rawProps: "",
                            },
                            {
                              uid: "",
                              tag: "IonCardSubtitle",
                              code: "yes",
                              content: "this.state.resCardData.data.subtitle",
                              noCR: "yes",
                              props: [],
                              rawProps: "",
                            },
                          ],
                        },
                      },
                      {
                        uid: "",
                        tag: "IonCardContent",
                        code: "yes",
                        content: "this.state.resCardData.data.content",
                        props: [],
                        rawProps: "",
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      });
    },
  },
};
