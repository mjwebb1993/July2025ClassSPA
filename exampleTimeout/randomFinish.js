function randomFinish(label) {
  const randomTime = Math.random() * 1000;
  console.log(label, "started running");

  setTimeout(
    () =>
      console.log(label + "is done running after " + randomTime + " seconds"),
    randomTime
  );
}

randomFinish("function 1");
randomFinish("function 2");
randomFinish("function 3");

// Scenario 1
// the randomFinish "is done" strings will be in order of randomTime from shortest to longest amount of time
// function 3 is done took 3 seconds
// function 1 is done took 5 seconds
// function 2 is done took 7 seconds

// Scenario 2
// the randomFinish "is done" strings will be in order of invocation, where one function waits for the previous one to "finish" before it is invoked
// function 1 is done took 5 seconds
// function 2 is done took 7 seconds
// function 3 is done took 3 seconds
