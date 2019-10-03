"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const reporter = __importStar(require("cucumber-html-reporter"));
exports.config = {
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: [
        '../features/calc.feature'
    ],
    cucumberOpts: {
        tags: "@even",
        format: 'json:./cucumberreport.json',
        onComplete: () => {
            var options = {
                theme: 'bootstrap',
                jsonFile: './cucumberreport.json',
                output: './cucumber_report.html',
                reportSuiteAsScenarios: true,
                scenarioTimestamp: true,
                launchReport: true,
                metadata: {
                    "App Version": "0.3.2",
                    "Test Environment": "STAGING",
                    "Browser": "Chrome  54.0.2840.98",
                    "Platform": "Windows 10",
                    "Parallel": "Scenarios",
                    "Executed": "Remote"
                }
            };
            reporter.generate(options);
        },
        require: [
            './stepdefs/*.js'
        ]
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VrZWNvbmZpZ3VyYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jdWtlY29uZmlndXJhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxpRUFBbUQ7QUFHeEMsUUFBQSxNQUFNLEdBQVc7SUFFMUIsU0FBUyxFQUFFLFFBQVE7SUFHbkIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFHL0QsS0FBSyxFQUFFO1FBQ0wsMEJBQTBCO0tBQzNCO0lBRUQsWUFBWSxFQUFFO1FBRVosSUFBSSxFQUFFLE9BQU87UUFDYixNQUFNLEVBQUUsNEJBQTRCO1FBQ3BDLFVBQVUsRUFBRSxHQUFHLEVBQUU7WUFFZixJQUFJLE9BQU8sR0FBRztnQkFDWixLQUFLLEVBQUUsV0FBVztnQkFDbEIsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsTUFBTSxFQUFFLHdCQUF3QjtnQkFDaEMsc0JBQXNCLEVBQUUsSUFBSTtnQkFDNUIsaUJBQWlCLEVBQUUsSUFBSTtnQkFDdkIsWUFBWSxFQUFFLElBQUk7Z0JBQ2xCLFFBQVEsRUFBRTtvQkFDUixhQUFhLEVBQUUsT0FBTztvQkFDdEIsa0JBQWtCLEVBQUUsU0FBUztvQkFDN0IsU0FBUyxFQUFFLHNCQUFzQjtvQkFDakMsVUFBVSxFQUFFLFlBQVk7b0JBQ3hCLFVBQVUsRUFBRSxXQUFXO29CQUN2QixVQUFVLEVBQUUsUUFBUTtpQkFDckI7YUFDRixDQUFDO1lBRUYsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUU3QixDQUFDO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsaUJBQWlCO1NBQ2xCO0tBQ0Y7Q0FDRixDQUFDIn0=