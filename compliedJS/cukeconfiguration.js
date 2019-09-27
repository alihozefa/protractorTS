exports.config = {
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: [
        '../features/calc.feature'
    ],
    cucumberOpts: {
        require: [
            './stepdefs/*.js'
        ]
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VrZWNvbmZpZ3VyYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jdWtlY29uZmlndXJhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLENBQUMsTUFBTSxHQUFHO0lBRWIsU0FBUyxFQUFFLFFBQVE7SUFHbkIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFHL0QsS0FBSyxFQUFFO1FBQ0wsMEJBQTBCO0tBQzNCO0lBRUQsWUFBWSxFQUFFO1FBRVosT0FBTyxFQUFFO1lBQ1AsaUJBQWlCO1NBQ2xCO0tBQ0Y7Q0FDRixDQUFDIn0=