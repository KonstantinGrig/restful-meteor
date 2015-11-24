Package.describe({
  name: 'konstantingrig:restful',
  version: '0.0.1',
  summary: 'RESTful mongo collection',
  git: 'https://github.com/KonstantinGrig/restful-meteor.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('simple:json-routes@1.0.4');

  api.addFiles('restful.js', ['server']);
  api.addFiles('settings-default.js', ['server']);
  api.export("RestFulCollection", ['server']);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('konstantingrig:restful');
  api.addFiles('restful-tests.js');
});
