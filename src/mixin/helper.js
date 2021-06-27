export default {
  methods: {
    suggestionStr: function (capitalize = false, length = 8) {
      let S = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let N = length;
      let result = Array.from(Array(N))
        .map(() => S[Math.floor(Math.random() * S.length)])
        .join("");
      return capitalize ? result[0].toUpperCase() + result.slice(1) : result;
    },
    uID: function (radix = 16) {
      let strong = 1000;
      return (
        new Date().getTime().toString(radix) +
        Math.floor(strong * Math.random()).toString(radix)
      );
    },
  },
};
