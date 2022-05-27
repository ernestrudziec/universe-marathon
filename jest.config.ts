export default {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$":
      "<rootDir>/test/__mocks__/fileMock.js",
  },
};
