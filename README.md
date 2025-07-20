# Node.js TypeScript Jest Boilerplate

A clean and minimal boilerplate for Node.js applications using TypeScript and Jest for testing.

## Features

- ✅ TypeScript configuration with strict mode
- ✅ Jest testing framework with TypeScript support
- ✅ Sample code with Calculator and Logger utilities
- ✅ Comprehensive test coverage examples
- ✅ Development and build scripts
- ✅ Code coverage reporting

## Project Structure

```
jest-test/
├── src/
│   ├── index.ts          # Main application entry point
│   ├── calculator.ts     # Calculator utility class
│   ├── calculator.test.ts # Calculator tests
│   ├── logger.ts         # Logger utility class
│   └── logger.test.ts    # Logger tests
├── dist/                 # Compiled JavaScript output
├── coverage/             # Test coverage reports
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── jest.config.js        # Jest configuration
├── .gitignore           # Git ignore rules
└── README.md            # This file
```

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Install dependencies:

   ```bash
   npm install
   ```

2. Build the project:

   ```bash
   npm run build
   ```

3. Run the application:
   ```bash
   npm start
   ```

### Development

Run the application in development mode:

```bash
npm run dev
```

### Testing

Run all tests:

```bash
npm test
```

Run tests in watch mode:

```bash
npm run test:watch
```

Generate test coverage report:

```bash
npm run test:coverage
```

### Available Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Run the compiled application
- `npm run dev` - Run the application in development mode using ts-node
- `npm test` - Run Jest tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Generate coverage report
- `npm run clean` - Remove the dist directory

## Code Examples

The boilerplate includes two sample classes:

### Calculator

A simple calculator class with basic arithmetic operations and comprehensive tests.

### Logger

A logger utility with different log levels and proper test mocking.

## Configuration

### TypeScript (tsconfig.json)

- Strict mode enabled for better type safety
- ES2020 target for modern JavaScript features
- Source maps enabled for debugging
- Separate output directory for compiled files

### Jest (jest.config.js)

- TypeScript support via ts-jest
- Test discovery in src directory
- Coverage reporting configured
- Excludes test files from coverage

## Contributing

1. Fork the project
2. Create your feature branch
3. Add tests for new functionality
4. Ensure all tests pass
5. Submit a pull request

## License

This project is licensed under the MIT License.
