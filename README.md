# Ionic Template - Login, Register &amp; Profile Page
Ionic Template with Login, Register &amp; Profile Page

# Syllabus

## Resources

1. [Ionic CSS Components](http://ionicframework.com/docs/components/)
2. [Ionic JavaScript UI Library](http://ionicframework.com/docs/api)
3. [Ionicons](http://ionicframework.com/docs/components/#icons)
4. [Dynamic Templates](http://ionicframework.com/docs/platform-customization/dynamic-templates.html)
5. [Ionic Books](http://ionicframework.com/docs/guide/)

### Day 1

1. Ionic Installation & Configuration
	
2. Ionic Creator
	- Develop UI
	- Export

3. Ionic Structure
	- hooks - scripts used to customize cordova commands
	- plugins - ngCordova plugins
	- platforms - target devices (ios,android,bb,windows)
	- resources - splashscreens, icons
	- scss - you may include other scss if required
	- www - working directory
		- img - all our images
		- js
			- app.js - main js file, application's JavaScript
			- controllers.js - handle request in & out
			- directives.js - manipulate DOM / elements / attributes
			- routes.js - define signboard / signage: route name, url, template, controller
			- services.js - define external services want to use, can be service / factory.
		- lib - external libraries such as ngCordova, Swiper, etc. Installation via bower
		- templates - our views

4.	Ionic Command Line Interface (CLI)
	- ionic start
	- ionic serve

5.	Simple To Do App
	- Create, Read, Update and Delete
	- ngStorage, which use localStorage

6.	AngularJs Attributes
	- ng-model
	- ng-repeat
	- ng-app
	- ng-click

7.	AngularJs Methods
	- {{ }} // echo

8.	AngularJs Scope
	- Local Scope: $scope
	- Global Scope: $rootScope

9.	ngCordova
	- ngStorage

10.	Ionic Elements & Attributes
	- ui-sref=""
	- ion-view
	- ion-content

11. Ionic Classes
	- button 
	- button-positive
	- item 
	- item-input

### Day 2

1. ngCordova
	- App Version [MISSION FAILED]
	- Globalization [MISSION FAILED]
	- Dialogs [OK]
	- Preferences [MISSION FAILED]
	- Splash Screen [MISSION FAILED]
	- Local Notifications [NOT YET]
	- OAuth [NOT YET]
	- GeoLocation [NOT YET]
	- Push Notifications [NOT YET]

2. [MISSION FAILED]
	- Lack of knowledge
	- Inproper documentations / references
	- Need to compile to application to native application and run on emulator or device

### Day 3

1. User Interface / User Experience (UI / UX)

2. Application Programming Interface (API)
	- CORS
	- JSON
	- JWT
	- Frameworks
		- Laravel
		- Lumen
		- Slim Framework
		- Silex

3. Using Ionic Framework + Intel XDK
	- Build
	- Test
		- Emulator
		- Device


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
	- Install `ngStorage` -	`bower install ngstorage`
	- Include `ngStorage.min.js` in `index.html`, before `cordova.js` - `<script src="lib/ngstorage/ngStorage.min.js"></script>`
	- Inject `ngStorage` on application level - `'ngStorage'` (required)
	- Inject `$localStorage` / `$sessionStorage` on controller level (optional)

4. Level 3 - SQLite

5. Level 4 - API - SyncTaskService

# Routes Parameters

1. Setup Route(route.js) to accept parameters `url: '/profile/:id'`

2. Generate URL to profile page by adding ui-sref attribute to the element `ui-sref="profile({id:value})"`

3. Accept Parameters in Controller by injecting `$stateParams` - `function($scope, $stateParams){}()`

4. Accessing parameters `$stateParams.parameter, eg. $stateParams.id`

5. More URL Format [URLMatcher](http://angular-ui.github.io/ui-router/site/#/api/ui.router.util.type:UrlMatcher)

6. More tips - [Scotch - 3 Simple Tips for Using UI Route](https://scotch.io/tutorials/3-simple-tips-for-using-ui-router)

# API in Ionic
	
1. [Handling CORS](http://www.geekality.net/2010/06/27/php-how-to-easily-provide-json-and-jsonp/)

2. [Setting Up The Proxy Server](http://blog.ionic.io/handling-cors-issues-in-ionic/)

3. Configure API End Point

	```
	.constant('ApiEndpoint', {
	  url: 'http://ion-api.dev/api/v1'
	})
	```

4. Configure proxy in `ion.project`

	```
	{
	  "name": "ionic-template-login-register",
	  "app_id": "32febb4d",
	  "proxies": [
	    {
	      "path": "/api",
	      "proxyUrl": "http://ion-api.dev"
	    }
	  ]
	}
	```

5. Use the APIEndPoint in controller

	```
	.controller('registerCtrl', function($scope, ApiEndpoint) {
		$http.get(ApiEndpoint.url, data)
		    .success(function(data){
		      console.log(data);
		      console.log(typeof data);
		    })
		    .error(function(data){
		      console.log(data);
		      console.log('error');
		    });
	})
	```

# More Reading...

1. UI / UX
	- UI Tiles
	- Masonry
	- Swiper
		- https://github.com/driftyco/ionic-ion-tinder-cards
		- https://github.com/driftyco/ionic-ion-swipe-cards
	- LightSlider + LightGallery

2. API
	- [Postmane](http://getpostman.com)
	- [JSON Web Token](https://jwt.io/)
	- [Laravel Sample API](https://github.com/zulfajuniadi/sampleapi)