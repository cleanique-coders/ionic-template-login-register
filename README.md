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

	```
	.state('dashboard', {
	    url: '/dashboard',
	    templateUrl: 'templates/dashboard.html',
	    controller: 'dashboardCtrl'
  	})
  	```

4. Add Controller

	```
	.controller('settingsCtrl', function($scope) {
		// do your things here
	})
	```

# Saving Information

## Depends on applications requirement, you may choose which level to save your data

1. Level 0 - Local Scope - $scope.tasks
	
2. Level 1 - Root Scope - $rootScope.tasks

3. Level 2 - LocalStorage (ngStorage) = `$storage.tasks`

	Install `ngStorage` -	`bower install ngstorage`

	Include `ngStorage.min.js` in `index.html`, before `cordova.js` - `<script src="lib/ngstorage/ngStorage.min.js"></script>`

	Inject `ngStorage` on application level - `'ngStorage'` (required)
	
	Inject `$localStorage` / `$sessionStorage` on controller level (optional)

4. Level 3 - SQLite

5. Level 4 - API - SyncTaskService

# Routes Parameters

1. Setup Route(route.js) to accept parameters `url: '/profile/:id'`

2. Generate URL to profile page by adding ui-sref attribute to the element `ui-sref="profile({id:value})"`

3. Accept Parameters in Controller by injecting `$stateParams` - `function($scope, $stateParams){}()`

4. Accessing parameters `$stateParams.parameter, eg. $stateParams.id`

5. More URL Format [URLMatcher](http://angular-ui.github.io/ui-router/site/#/api/ui.router.util.type:UrlMatcher)

6. More tips - [Scotch - 3 Simple Tips for Using UI Route](https://scotch.io/tutorials/3-simple-tips-for-using-ui-router)