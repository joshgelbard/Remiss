# API Endpoints

## HTML

### Root

* ````GET /```` - display Remiss app

## JSON

### Users

* ````POST /api/users````
* ````PATCH /api/users````
* ````GET /api/channels/:channelId/users````

### Messages

* ````GET /api/channels/:id/messages````
* ````POST /api/messages````
* ````GET /api/messages/:id````
* ````PATCH /api/messages/:id````
* ````DELETE /api/messages/:id````

### Channels

* ````GET /api/channels````
* ````POST /api/channels````
* ````PATCH /api/channels/:id````
* ````DELETE /api/channels/:id````

### Session

* ````POST /api/session````
* ````DELETE /api/session````
