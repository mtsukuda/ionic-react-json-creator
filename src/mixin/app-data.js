export default {
  data() {
    return {
      menuConfig: {
        json: {
          menuTemp: {
            uid: "",
            strTitle: "",
            strUrl: "",
            icon: "",
            component: "",
          },
          header: {
            strTitle: "Ionic Admin Panel",
          },
          menu: [
            {
              uid: "",
              strTitle: "ダッシュボード",
              strUrl: "Dashboard",
              icon: "extensionPuzzle",
              component: "Default",
              redirect: "yes",
            },
            {
              uid: "",
              strTitle: "Sample",
              strUrl: "/sample",
              icon: "planet",
              component: "SamplePage",
            },
          ],
          signOut: {
            strCaption: "Sign Out",
          },
          menuBottom: {
            parameters: [
              'const labels = ["ToDo", "大事なこと", "友達", "家族", "旅行"];',
            ],
            tags: [
              {
                tag: "IonList",
                props: ['id="labels-list"'],
                child: {
                  tags: [
                    {
                      tag: "IonListHeader",
                      noCR: "yes",
                      content: "ラベル",
                    },
                    {
                      tag: "{labels.map((label, index) => (",
                      close: "))}",
                      type: "raw",
                      child: {
                        tags: [
                          {
                            tag: "IonItem",
                            props: ['lines="none"', "key={index}"],
                            child: {
                              tags: [
                                {
                                  tag: "IonIcon",
                                  props: [
                                    'slot="start"',
                                    "icon={bookmarkOutline}",
                                  ],
                                  single: "yes",
                                },
                                {
                                  tag: "IonLabel",
                                  props: [],
                                  content: "{label}",
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
          components: ["Default"],
        },
        viewConfig: {
          debug: "",
          menuUid: "",
        },
      },
      configList: {
        temp: {
          status: "list",
          activeConfigUID: "",
        },
        list: [],
      },
    };
  },
  methods: {
    activeConfig: function (configList) {
      let activeConfig = null;
      for (let i = 0; i < configList.list.length; i++) {
        if (configList.list[i].uid === configList.temp.activeConfigUID) {
          activeConfig = configList.list[i];
          break;
        }
      }
      if (activeConfig === null) throw "Could not find active config data.";
      for (let i = 0; i < activeConfig.tags.length; i++) {
        this.numberingTagUID(activeConfig.tags[i]);
      }
      return activeConfig;
    },
    addConfig: function (configListList) {
      configListList.push({
        uid: this.uID(),
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
