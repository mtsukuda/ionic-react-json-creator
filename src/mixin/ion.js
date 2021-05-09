export default {
  data() {
    return {
      ionTags: [
        { tag: "div", label: "div" },
        { tag: "p", label: "p" },
        { tag: "IonContent", label: "IonContent" },
        { tag: "IonCard", label: "IonCard" },
        { tag: "IonCardHeader", label: "IonCardHeader" },
        { tag: "IonCardTitle", label: "IonCardTitle", noCR: "yes" },
        { tag: "IonCardSubtitle", label: "IonCardSubtitle", noCR: "yes" },
        { tag: "IonCardContent", label: "IonCardContent" },
        { tag: "IonItem", label: "IonItem" },
        { tag: "IonIcon", label: "IonIcon" },
        { tag: "IonLabel", label: "IonLabel" },
        { tag: "IonButton", label: "IonButton" },
      ],
    };
  },
  methods: {
    ionAttributeArrangement: function (targetIonTag, newIonTag) {
      if (targetIonTag.noCR) {
        delete targetIonTag.noCR;
      }
      if (newIonTag.noCR) {
        targetIonTag["noCR"] = newIonTag.noCR;
      }
    },
  },
};
