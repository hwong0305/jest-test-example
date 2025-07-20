import { Logger, LogLevel } from "./logger";

describe("Logger", () => {
  let logger: Logger;
  let consoleLogSpy: jest.SpyInstance;
  let consoleWarnSpy: jest.SpyInstance;
  let consoleErrorSpy: jest.SpyInstance;

  beforeEach(() => {
    logger = new Logger();
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
    consoleWarnSpy = jest.spyOn(console, "warn").mockImplementation();
    consoleErrorSpy = jest.spyOn(console, "error").mockImplementation();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe("debug", () => {
    it("should log debug messages with correct format", () => {
      const message = "Debug message";
      logger.debug(message);

      expect(consoleLogSpy).toHaveBeenCalledWith(
        expect.stringContaining(`${LogLevel.DEBUG}: ${message}`)
      );
    });
  });

  describe("info", () => {
    it("should log info messages with correct format", () => {
      const message = "Info message";
      logger.info(message);

      expect(consoleLogSpy).toHaveBeenCalledWith(
        expect.stringContaining(`${LogLevel.INFO}: ${message}`)
      );
    });
  });

  describe("warn", () => {
    it("should log warning messages with correct format", () => {
      const message = "Warning message";
      logger.warn(message);

      expect(consoleWarnSpy).toHaveBeenCalledWith(
        expect.stringContaining(`${LogLevel.WARN}: ${message}`)
      );
    });
  });

  describe("error", () => {
    it("should log error messages with correct format", () => {
      const message = "Error message";
      logger.error(message);

      expect(consoleErrorSpy).toHaveBeenCalledWith(
        expect.stringContaining(`${LogLevel.ERROR}: ${message}`)
      );
    });
  });

  describe("message formatting", () => {
    it("should include timestamp in log messages", () => {
      const message = "Test message";
      logger.info(message);

      expect(consoleLogSpy).toHaveBeenCalledWith(
        expect.stringMatching(
          /^\[\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z\]/
        )
      );
    });
  });
});
