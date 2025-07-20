import { Calculator } from "./calculator";
import { Logger } from "./logger";

const logger = new Logger();
const calculator = new Calculator();

function main(): void {
  logger.info("Starting the application...");

  const result1 = calculator.add(5, 3);
  const result2 = calculator.multiply(4, 7);
  const result3 = calculator.divide(10, 2);

  logger.info(`Addition result: 5 + 3 = ${result1}`);
  logger.info(`Multiplication result: 4 * 7 = ${result2}`);
  logger.info(`Division result: 10 / 2 = ${result3}`);

  logger.info("Application finished successfully!");
}

if (require.main === module) {
  main();
}

export { main };
