module.exports = {
  roots: ["<rootDir>/test"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "(.)(test|spec).ts$",
  moduleFileExtensions: ["ts", "js"]
};
