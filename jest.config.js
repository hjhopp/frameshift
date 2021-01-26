module.exports = {
    transform : {
        "^.+\\.svelte$" : "svelte-jester",
        "^.+\\.js"      : "babel-jest"
    },
    moduleNameMapper : {
        "^src(.*)$" : "<rootDir>/src$1",
    },
    moduleFileExtensions       : [ "js", "svelte" ],
    collectCoverageFrom        : [ "js", "svelte" ],
    coveragePathIgnorePatterns : [ "/node_modules/" ],
    coverageThreshold          : {
        global : {
            statements : 100,
            branches   : 100,
            functions  : 100,
            lines      : 100
        }
    }
};
