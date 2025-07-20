# Node.JS Typescript Jest Example

Example code to work around jest limitations with mocking modules. If you run into issues with your mock not being registered by jest, try using the format in this repository.

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
