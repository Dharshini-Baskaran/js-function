const { exec } = require("child_process");
const { performance } = require("perf_hooks");

// Path to your test file
const testFilePath = "test/func.test.js"; // Adjust if needed

const start = performance.now();

exec(`npx jest ${testFilePath}`, (error, stdout, stderr) => {
  const end = performance.now();
  const duration = (end - start).toFixed(2);

  console.log(stdout);
  if (error || stderr) {
    console.error("❌ Error during test execution:");
    console.error(error || stderr);
  }

  console.log(`⏱️ Total execution time: ${duration} ms`);
});
