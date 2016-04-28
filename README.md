# ionic-template-login-register
Ionic Template with Login, Register &amp; Profile Page

# Basic Steps of ngCordova Plugin Installation
	
## One time setup (already installed in this package)

0. Go to project folder `cd /path/to/project/folder`

1. Install ngCordova - http://ngcordova.com/docs/install/

2. Please ensure to add platform `ionic platform add [ios|android]`

## Repeated setup

1. Install the plugin using `cordova plugin add plugin-name`

2. Dependency Injection
	- Application level: `js/app.js`
	- Controller level: `js/controllers.js`

# How to create a page

1. Add a new file under `templates/` folder, eg. `dashboard.html`

2. Copy content in `templates/_template.html` and paste it in `dashboard.html`

3. Set Route

	``.state('dashboard', {
	    url: '/dashboard',
	    templateUrl: 'templates/dashboard.html',
	    controller: 'dashboardCtrl'
  	})``

4. Add Controller

	``.controller('settingsCtrl', function($scope) {
		// do your things here
	})``
