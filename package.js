Package.describe({
  name: 'chpolk:oauth-asteroid-fix',
  version: "1.1.5_1",
  // Brief, one-line summary of the package.
  summary: 'Fix for chrome extension to work with asteroid.js',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/chrispolk/oauth-asteroid-fix.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.2');

  api.use('routepolicy', 'server');
  api.use('webapp', 'server');
  api.use('mongo', 'server');
  api.use('reload', 'client');
  api.use('base64', 'client');

  api.use(['underscore', 'service-configuration', 'logging'], 'server');

  api.use('oauth-encryption', 'server', {weak: true});

  api.use('localstorage');
  api.use('url');

  api.export('OAuth');
  api.export('OAuthTest', 'server', {testOnly: true});

  api.addFiles('oauth_client.js', 'web');
  api.addFiles('oauth_browser.js', 'web.browser');
  api.addFiles('oauth_cordova.js', 'web.cordova');
  api.addFiles('oauth_server.js', 'server');
  api.addFiles('pending_credentials.js', 'server');

  api.addFiles('end_of_popup_response.html', 'server', { isAsset: true });
  api.addFiles('end_of_redirect_response.html', 'server', {isAsset: true});

  api.addFiles('oauth_common.js');

  // XXX COMPAT WITH 0.8.0
  api.export('Oauth');
  api.addFiles('deprecated.js', ['client', 'server']);
});


Package.onTest(function (api) {
  api.use('tinytest');
  api.use('random');
  api.use('service-configuration', 'server');
  api.use('oauth', 'server');
  api.addFiles("oauth_tests.js", 'server');
  api.use('chpolk:oauth-asteroid-fix', ['client', 'server'])
});

Cordova.depends({
    'cordova-plugin-inappbrowser': '1.0.0'
});