const { exec } = require("child_process");
const { performance } = require("perf_hooks");

const testFilePath = "test/func.test.js";

const start = performance.now();

exec(`npx jest ${testFilePath} --coverage --verbose`, (error, stdout, stderr) => {
  const end = performance.now();
  const duration = (end - start).toFixed(2);

  // ✅ Show full Jest output
  if (stdout) console.log(stdout);
  if (stderr) console.error(stderr); // <-- this ensures PASS and test logs are printed

  // ✅ Show only real error message (if any)
  if (error) {
    console.error("❌ Error during test execution:");
    console.error(error.message);
  }

  console.log(`⏱️ Total execution time: ${duration} ms`);
});
