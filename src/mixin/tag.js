export default {
  methods: {
    tagUID: function () {
      let strong = 1000;
      return (
        new Date().getTime().toString(16) +
        Math.floor(strong * Math.random()).toString(16)
      );
    },
    targetTag: function (tags, tagUID) {
      let result = null;
      for (let i = 0; i < tags.length; i++) {
        result = this.findTag(tags[i], tagUID);
        if (result) return result;
      }
    },
    findTag: function (tag, tagUID) {
      let result = null;
      if (!tag.uid) return result;
      if (tag.uid === tagUID) return tag;
      if (tag.child && tag.child.tags) {
        for (let i = 0; i < tag.child.tags.length; i++) {
          result = this.findTag(tag.child.tags[i], tagUID);
          if (result) return result;
        }
      }
      return null;
    },
  },
};
