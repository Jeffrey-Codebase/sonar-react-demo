let sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl : "http://stg-sonar102.dsd.dev.rsc.local:9000",
  token : "1ad066960082a3247a8020dd24a19cc6cd8ebc14",
  options : {
    'sonar.sources':  'src',
    'sonar.tests':  'src',
    'sonar.inclusions'  :  '**', // Entry point of your code
    'sonar.test.inclusions':  'src/**/*.test.js',
    'sonar.typescript.lcov.reportPaths':  'coverage/lcov.info',
    'sonar.testExecutionReportPaths':  'coverage/test-reporter.xml',
  },
}, () => process.exit());
