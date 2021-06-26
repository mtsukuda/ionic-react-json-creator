export default {
  methods: {
    suggestionStr: function (length = 8) {
      let S = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let N = length;
      return Array.from(Array(length))
        .map(() => S[Math.floor(Math.random() * S.length)])
        .join("");
    },
  },
};
