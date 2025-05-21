// Ques1. How many individuals are currently employed?
import { tests } from "./answer.js";

const frameWork = function (failedCase, tests) {
  tests.map(({ problemStatement, func, testCase }) => {
    console.log(problemStatement);
    testCase.map(({ case1, expectedOutput }) => {
      const output = func(case1);
      console.log(
        "Output :",
        output,
        " ".repeat(30),
        "expected Output :",
        expectedOutput
      );

      console.log("--".repeat(45));

      if (output !== expectedOutput) {
        failedCase.push(output, expectedOutput);
      }
    });
  });
};

const visualizeInTable = function () {
  const failedCase = [];
  console.log(frameWork(failedCase, tests));
  // console.table(failedCase);
};

visualizeInTable();
