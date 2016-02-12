## Classes

<dl>
<dt><a href="#HomeConfig">HomeConfig</a></dt>
<dd><p>Abstraction class around the config object</p>
</dd>
<dt><a href="#HomeControl">HomeControl</a> ⇐ <code><a href="#HomeConfig">HomeConfig</a></code></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#config">config</a> : <code>object</code></dt>
<dd><p>Config object matches config.json file</p>
</dd>
</dl>

<a name="HomeConfig"></a>
## HomeConfig
Abstraction class around the config object

**Kind**: global class  

* [HomeConfig](#HomeConfig)
    * [new HomeConfig(config)](#new_HomeConfig_new)
    * [.config](#HomeConfig+config) : <code>[config](#config)</code>
    * [.getFloorID(floorIndex)](#HomeConfig+getFloorID) ⇒ <code>string</code>
    * [.getFloorName(floorIndex)](#HomeConfig+getFloorName) ⇒ <code>string</code>
    * [.getHouseName()](#HomeConfig+getHouseName) ⇒ <code>string</code>
    * [.getHueIP()](#HomeConfig+getHueIP) ⇒ <code>string</code>
    * [.getHueUserName()](#HomeConfig+getHueUserName) ⇒ <code>string</code>
    * [.getLightColour(lightIndex)](#HomeConfig+getLightColour) ⇒ <code>string</code>
    * [.getLightHueID(lightIndex)](#HomeConfig+getLightHueID) ⇒ <code>int</code>
    * [.getLightID(lightIndex)](#HomeConfig+getLightID) ⇒ <code>string</code>
    * [.getLightIndex(roomIndex, lightID)](#HomeConfig+getLightIndex) ⇒ <code>int</code>
    * [.getLightName(lightIndex)](#HomeConfig+getLightName) ⇒ <code>string</code>
    * [.getLightRoomID(lightIndex)](#HomeConfig+getLightRoomID) ⇒ <code>string</code>
    * [.getLightType(lightIndex)](#HomeConfig+getLightType) ⇒ <code>string</code>
    * [.getLightsByType(roomIndex, type)](#HomeConfig+getLightsByType) ⇒ <code>Array.&lt;int&gt;</code>
    * [.getNumberOfFloors()](#HomeConfig+getNumberOfFloors) ⇒ <code>int</code>
    * [.getNumberOfLights()](#HomeConfig+getNumberOfLights) ⇒ <code>int</code>
    * [.getNumberOfLightsByRoom(roomIndex)](#HomeConfig+getNumberOfLightsByRoom) ⇒ <code>Number</code>
    * [.getNumberOfRooms()](#HomeConfig+getNumberOfRooms) ⇒ <code>int</code>
    * [.getNumberOfRoomsByFloor(floorID)](#HomeConfig+getNumberOfRoomsByFloor) ⇒ <code>int</code>
    * [.getRoomFloorID(roomIndex)](#HomeConfig+getRoomFloorID) ⇒ <code>string</code>
    * [.getRoomID(roomIndex)](#HomeConfig+getRoomID) ⇒ <code>string</code>
    * [.getRoomIndex(id)](#HomeConfig+getRoomIndex) ⇒ <code>int</code>
    * [.getRoomName(roomIndex)](#HomeConfig+getRoomName) ⇒ <code>\*</code>
    * [.getRoomsOnFloor(floorID)](#HomeConfig+getRoomsOnFloor) ⇒ <code>Array.&lt;int&gt;</code>

<a name="new_HomeConfig_new"></a>
### new HomeConfig(config)

| Param | Type |
| --- | --- |
| config | <code>[config](#config)</code> | 

<a name="HomeConfig+config"></a>
### homeConfig.config : <code>[config](#config)</code>
**Kind**: instance property of <code>[HomeConfig](#HomeConfig)</code>  
<a name="HomeConfig+getFloorID"></a>
### homeConfig.getFloorID(floorIndex) ⇒ <code>string</code>
Get a floor's ID

**Kind**: instance method of <code>[HomeConfig](#HomeConfig)</code>  

| Param | Type |
| --- | --- |
| floorIndex | <code>int</code> | 

<a name="HomeConfig+getFloorName"></a>
### homeConfig.getFloorName(floorIndex) ⇒ <code>string</code>
Get a floor's name

**Kind**: instance method of <code>[HomeConfig](#HomeConfig)</code>  

| Param | Type |
| --- | --- |
| floorIndex | <code>int</code> | 

<a name="HomeConfig+getHouseName"></a>
### homeConfig.getHouseName() ⇒ <code>string</code>
Get the house name

**Kind**: instance method of <code>[HomeConfig](#HomeConfig)</code>  
<a name="HomeConfig+getHueIP"></a>
### homeConfig.getHueIP() ⇒ <code>string</code>
Get the Hue Bridge IP address

**Kind**: instance method of <code>[HomeConfig](#HomeConfig)</code>  
<a name="HomeConfig+getHueUserName"></a>
### homeConfig.getHueUserName() ⇒ <code>string</code>
Get the Hue Bridge User Name

**Kind**: instance method of <code>[HomeConfig](#HomeConfig)</code>  
<a name="HomeConfig+getLightColour"></a>
### homeConfig.getLightColour(lightIndex) ⇒ <code>string</code>
Get a light's colour

**Kind**: instance method of <code>[HomeConfig](#HomeConfig)</code>  

| Param | Type |
| --- | --- |
| lightIndex | <code>int</code> | 

<a name="HomeConfig+getLightHueID"></a>
### homeConfig.getLightHueID(lightIndex) ⇒ <code>int</code>
Get a light's hueID

**Kind**: instance method of <code>[HomeConfig](#HomeConfig)</code>  
**Returns**: <code>int</code> - hueID  

| Param | Type |
| --- | --- |
| lightIndex | <code>int</code> | 

<a name="HomeConfig+getLightID"></a>
### homeConfig.getLightID(lightIndex) ⇒ <code>string</code>
Get a light's ID

**Kind**: instance method of <code>[HomeConfig](#HomeConfig)</code>  
**Returns**: <code>string</code> - lightID  

| Param | Type |
| --- | --- |
| lightIndex | <code>int</code> | 

<a name="HomeConfig+getLightIndex"></a>
### homeConfig.getLightIndex(roomIndex, lightID) ⇒ <code>int</code>
Get the index for a light object from its ID and room

**Kind**: instance method of <code>[HomeConfig](#HomeConfig)</code>  
**Returns**: <code>int</code> - lightIndex  

| Param | Type |
| --- | --- |
| roomIndex | <code>int</code> | 
| lightID | <code>string</code> | 

<a name="HomeConfig+getLightName"></a>
### homeConfig.getLightName(lightIndex) ⇒ <code>string</code>
Get a light's name

**Kind**: instance method of <code>[HomeConfig](#HomeConfig)</code>  

| Param | Type |
| --- | --- |
| lightIndex | <code>int</code> | 

<a name="HomeConfig+getLightRoomID"></a>
### homeConfig.getLightRoomID(lightIndex) ⇒ <code>string</code>
Get a light's roomID

**Kind**: instance method of <code>[HomeConfig](#HomeConfig)</code>  

| Param | Type |
| --- | --- |
| lightIndex | <code>int</code> | 

<a name="HomeConfig+getLightType"></a>
### homeConfig.getLightType(lightIndex) ⇒ <code>string</code>
Get a light's type

**Kind**: instance method of <code>[HomeConfig](#HomeConfig)</code>  

| Param | Type |
| --- | --- |
| lightIndex | <code>int</code> | 

<a name="HomeConfig+getLightsByType"></a>
### homeConfig.getLightsByType(roomIndex, type) ⇒ <code>Array.&lt;int&gt;</code>
Get an array of light indexes of a particular type for the given room

**Kind**: instance method of <code>[HomeConfig](#HomeConfig)</code>  
**Returns**: <code>Array.&lt;int&gt;</code> - lightIndex  

| Param | Type |
| --- | --- |
| roomIndex | <code>int</code> | 
| type | <code>string</code> | 

<a name="HomeConfig+getNumberOfFloors"></a>
### homeConfig.getNumberOfFloors() ⇒ <code>int</code>
Get the total number of floors

**Kind**: instance method of <code>[HomeConfig](#HomeConfig)</code>  
<a name="HomeConfig+getNumberOfLights"></a>
### homeConfig.getNumberOfLights() ⇒ <code>int</code>
Get the total number of lights

**Kind**: instance method of <code>[HomeConfig](#HomeConfig)</code>  
<a name="HomeConfig+getNumberOfLightsByRoom"></a>
### homeConfig.getNumberOfLightsByRoom(roomIndex) ⇒ <code>Number</code>
Get the number of lights in a room

**Kind**: instance method of <code>[HomeConfig](#HomeConfig)</code>  

| Param |
| --- |
| roomIndex | 

<a name="HomeConfig+getNumberOfRooms"></a>
### homeConfig.getNumberOfRooms() ⇒ <code>int</code>
Get the total number of rooms

**Kind**: instance method of <code>[HomeConfig](#HomeConfig)</code>  
<a name="HomeConfig+getNumberOfRoomsByFloor"></a>
### homeConfig.getNumberOfRoomsByFloor(floorID) ⇒ <code>int</code>
Get the number of rooms on the given floor

**Kind**: instance method of <code>[HomeConfig](#HomeConfig)</code>  

| Param | Type |
| --- | --- |
| floorID | <code>int</code> | 

<a name="HomeConfig+getRoomFloorID"></a>
### homeConfig.getRoomFloorID(roomIndex) ⇒ <code>string</code>
Get a room's floorID

**Kind**: instance method of <code>[HomeConfig](#HomeConfig)</code>  

| Param | Type |
| --- | --- |
| roomIndex | <code>int</code> | 

<a name="HomeConfig+getRoomID"></a>
### homeConfig.getRoomID(roomIndex) ⇒ <code>string</code>
Get a room's ID

**Kind**: instance method of <code>[HomeConfig](#HomeConfig)</code>  
**Returns**: <code>string</code> - roomID  

| Param | Type |
| --- | --- |
| roomIndex | <code>int</code> | 

<a name="HomeConfig+getRoomIndex"></a>
### homeConfig.getRoomIndex(id) ⇒ <code>int</code>
Get the index for a room object from its ID

**Kind**: instance method of <code>[HomeConfig](#HomeConfig)</code>  
**Returns**: <code>int</code> - roomIndex  

| Param | Type |
| --- | --- |
| id | <code>string</code> | 

<a name="HomeConfig+getRoomName"></a>
### homeConfig.getRoomName(roomIndex) ⇒ <code>\*</code>
Get a room's name

**Kind**: instance method of <code>[HomeConfig](#HomeConfig)</code>  

| Param |
| --- |
| roomIndex | 

<a name="HomeConfig+getRoomsOnFloor"></a>
### homeConfig.getRoomsOnFloor(floorID) ⇒ <code>Array.&lt;int&gt;</code>
Get an array of room indexes for the given floor

**Kind**: instance method of <code>[HomeConfig](#HomeConfig)</code>  
**Returns**: <code>Array.&lt;int&gt;</code> - roomIndex  

| Param | Type |
| --- | --- |
| floorID | <code>string</code> | 

<a name="HomeControl"></a>
## HomeControl ⇐ <code>[HomeConfig](#HomeConfig)</code>
**Kind**: global class  
**Extends:** <code>[HomeConfig](#HomeConfig)</code>  

* [HomeControl](#HomeControl) ⇐ <code>[HomeConfig](#HomeConfig)</code>
    * [new HomeControl(io, config)](#new_HomeControl_new)
    * [.config](#HomeConfig+config) : <code>[config](#config)</code>
    * [.emit(roomIndex, lightIndex, command, value)](#HomeControl+emit)
    * [.floorSetPower(floorID, state)](#HomeControl+floorSetPower)
    * [.getFloorID(floorIndex)](#HomeConfig+getFloorID) ⇒ <code>string</code>
    * [.getFloorName(floorIndex)](#HomeConfig+getFloorName) ⇒ <code>string</code>
    * [.getHouseName()](#HomeConfig+getHouseName) ⇒ <code>string</code>
    * [.getHueIP()](#HomeConfig+getHueIP) ⇒ <code>string</code>
    * [.getHueUserName()](#HomeConfig+getHueUserName) ⇒ <code>string</code>
    * [.getLightColour(lightIndex)](#HomeConfig+getLightColour) ⇒ <code>string</code>
    * [.getLightHueID(lightIndex)](#HomeConfig+getLightHueID) ⇒ <code>int</code>
    * [.getLightID(lightIndex)](#HomeConfig+getLightID) ⇒ <code>string</code>
    * [.getLightIndex(roomIndex, lightID)](#HomeConfig+getLightIndex) ⇒ <code>int</code>
    * [.getLightName(lightIndex)](#HomeConfig+getLightName) ⇒ <code>string</code>
    * [.getLightRoomID(lightIndex)](#HomeConfig+getLightRoomID) ⇒ <code>string</code>
    * [.getLightType(lightIndex)](#HomeConfig+getLightType) ⇒ <code>string</code>
    * [.getLightsByType(roomIndex, type)](#HomeConfig+getLightsByType) ⇒ <code>Array.&lt;int&gt;</code>
    * [.getNumberOfFloors()](#HomeConfig+getNumberOfFloors) ⇒ <code>int</code>
    * [.getNumberOfLights()](#HomeConfig+getNumberOfLights) ⇒ <code>int</code>
    * [.getNumberOfLightsByRoom(roomIndex)](#HomeConfig+getNumberOfLightsByRoom) ⇒ <code>Number</code>
    * [.getNumberOfRooms()](#HomeConfig+getNumberOfRooms) ⇒ <code>int</code>
    * [.getNumberOfRoomsByFloor(floorID)](#HomeConfig+getNumberOfRoomsByFloor) ⇒ <code>int</code>
    * [.getRoomFloorID(roomIndex)](#HomeConfig+getRoomFloorID) ⇒ <code>string</code>
    * [.getRoomID(roomIndex)](#HomeConfig+getRoomID) ⇒ <code>string</code>
    * [.getRoomIndex(id)](#HomeConfig+getRoomIndex) ⇒ <code>int</code>
    * [.getRoomName(roomIndex)](#HomeConfig+getRoomName) ⇒ <code>\*</code>
    * [.getRoomsOnFloor(floorID)](#HomeConfig+getRoomsOnFloor) ⇒ <code>Array.&lt;int&gt;</code>
    * [.hue](#HomeControl+hue) : <code>Object</code>
    * [.io](#HomeControl+io) : <code>Object</code>
    * [.lightSetBrightness(roomIndex, lightIndex, brightness)](#HomeControl+lightSetBrightness)
    * [.lightSetColour(roomIndex, lightIndex, colour)](#HomeControl+lightSetColour)
    * [.lightSetColourTemp(roomIndex, lightIndex, colourTemp)](#HomeControl+lightSetColourTemp)
    * [.lightTogglePower(roomIndex, lightIndex)](#HomeControl+lightTogglePower)
    * [.processFloorEvent(data)](#HomeControl+processFloorEvent)
    * [.processLightEvent(data)](#HomeControl+processLightEvent)
    * [.processRoomEvent(data)](#HomeControl+processRoomEvent)
    * [.setBrightness(hueID, brightness)](#HomeControl+setBrightness)
    * [.setColour(hueID, colour)](#HomeControl+setColour)
    * [.setPower(hueID, state)](#HomeControl+setPower)

<a name="new_HomeControl_new"></a>
### new HomeControl(io, config)
HomeControl class for controlling devices from received client events.


| Param | Type | Description |
| --- | --- | --- |
| io | <code>Object</code> | socket.io instance |
| config | <code>Object</code> | config.json object |

<a name="HomeConfig+config"></a>
### homeControl.config : <code>[config](#config)</code>
**Kind**: instance property of <code>[HomeControl](#HomeControl)</code>  
<a name="HomeControl+emit"></a>
### homeControl.emit(roomIndex, lightIndex, command, value)
Emit a socket event and log the action

**Kind**: instance method of <code>[HomeControl](#HomeControl)</code>  

| Param | Type |
| --- | --- |
| roomIndex | <code>int</code> | 
| lightIndex | <code>int</code> | 
| command | <code>string</code> | 
| value | <code>Object</code> | 

<a name="HomeControl+floorSetPower"></a>
### homeControl.floorSetPower(floorID, state)
Set all the lights on a floor on or off

**Kind**: instance method of <code>[HomeControl](#HomeControl)</code>  

| Param | Type |
| --- | --- |
| floorID | <code>string</code> | 
| state | <code>boolean</code> | 

<a name="HomeConfig+getFloorID"></a>
### homeControl.getFloorID(floorIndex) ⇒ <code>string</code>
Get a floor's ID

**Kind**: instance method of <code>[HomeControl](#HomeControl)</code>  

| Param | Type |
| --- | --- |
| floorIndex | <code>int</code> | 

<a name="HomeConfig+getFloorName"></a>
### homeControl.getFloorName(floorIndex) ⇒ <code>string</code>
Get a floor's name

**Kind**: instance method of <code>[HomeControl](#HomeControl)</code>  

| Param | Type |
| --- | --- |
| floorIndex | <code>int</code> | 

<a name="HomeConfig+getHouseName"></a>
### homeControl.getHouseName() ⇒ <code>string</code>
Get the house name

**Kind**: instance method of <code>[HomeControl](#HomeControl)</code>  
<a name="HomeConfig+getHueIP"></a>
### homeControl.getHueIP() ⇒ <code>string</code>
Get the Hue Bridge IP address

**Kind**: instance method of <code>[HomeControl](#HomeControl)</code>  
<a name="HomeConfig+getHueUserName"></a>
### homeControl.getHueUserName() ⇒ <code>string</code>
Get the Hue Bridge User Name

**Kind**: instance method of <code>[HomeControl](#HomeControl)</code>  
<a name="HomeConfig+getLightColour"></a>
### homeControl.getLightColour(lightIndex) ⇒ <code>string</code>
Get a light's colour

**Kind**: instance method of <code>[HomeControl](#HomeControl)</code>  

| Param | Type |
| --- | --- |
| lightIndex | <code>int</code> | 

<a name="HomeConfig+getLightHueID"></a>
### homeControl.getLightHueID(lightIndex) ⇒ <code>int</code>
Get a light's hueID

**Kind**: instance method of <code>[HomeControl](#HomeControl)</code>  
**Returns**: <code>int</code> - hueID  

| Param | Type |
| --- | --- |
| lightIndex | <code>int</code> | 

<a name="HomeConfig+getLightID"></a>
### homeControl.getLightID(lightIndex) ⇒ <code>string</code>
Get a light's ID

**Kind**: instance method of <code>[HomeControl](#HomeControl)</code>  
**Returns**: <code>string</code> - lightID  

| Param | Type |
| --- | --- |
| lightIndex | <code>int</code> | 

<a name="HomeConfig+getLightIndex"></a>
### homeControl.getLightIndex(roomIndex, lightID) ⇒ <code>int</code>
Get the index for a light object from its ID and room

**Kind**: instance method of <code>[HomeControl](#HomeControl)</code>  
**Returns**: <code>int</code> - lightIndex  

| Param | Type |
| --- | --- |
| roomIndex | <code>int</code> | 
| lightID | <code>string</code> | 

<a name="HomeConfig+getLightName"></a>
### homeControl.getLightName(lightIndex) ⇒ <code>string</code>
Get a light's name

**Kind**: instance method of <code>[HomeControl](#HomeControl)</code>  

| Param | Type |
| --- | --- |
| lightIndex | <code>int</code> | 

<a name="HomeConfig+getLightRoomID"></a>
### homeControl.getLightRoomID(lightIndex) ⇒ <code>string</code>
Get a light's roomID

**Kind**: instance method of <code>[HomeControl](#HomeControl)</code>  

| Param | Type |
| --- | --- |
| lightIndex | <code>int</code> | 

<a name="HomeConfig+getLightType"></a>
### homeControl.getLightType(lightIndex) ⇒ <code>string</code>
Get a light's type

**Kind**: instance method of <code>[HomeControl](#HomeControl)</code>  

| Param | Type |
| --- | --- |
| lightIndex | <code>int</code> | 

<a name="HomeConfig+getLightsByType"></a>
### homeControl.getLightsByType(roomIndex, type) ⇒ <code>Array.&lt;int&gt;</code>
Get an array of light indexes of a particular type for the given room

**Kind**: instance method of <code>[HomeControl](#HomeControl)</code>  
**Returns**: <code>Array.&lt;int&gt;</code> - lightIndex  

| Param | Type |
| --- | --- |
| roomIndex | <code>int</code> | 
| type | <code>string</code> | 

<a name="HomeConfig+getNumberOfFloors"></a>
### homeControl.getNumberOfFloors() ⇒ <code>int</code>
Get the total number of floors

**Kind**: instance method of <code>[HomeControl](#HomeControl)</code>  
<a name="HomeConfig+getNumberOfLights"></a>
### homeControl.getNumberOfLights() ⇒ <code>int</code>
Get the total number of lights

**Kind**: instance method of <code>[HomeControl](#HomeControl)</code>  
<a name="HomeConfig+getNumberOfLightsByRoom"></a>
### homeControl.getNumberOfLightsByRoom(roomIndex) ⇒ <code>Number</code>
Get the number of lights in a room

**Kind**: instance method of <code>[HomeControl](#HomeControl)</code>  

| Param |
| --- |
| roomIndex | 

<a name="HomeConfig+getNumberOfRooms"></a>
### homeControl.getNumberOfRooms() ⇒ <code>int</code>
Get the total number of rooms

**Kind**: instance method of <code>[HomeControl](#HomeControl)</code>  
<a name="HomeConfig+getNumberOfRoomsByFloor"></a>
### homeControl.getNumberOfRoomsByFloor(floorID) ⇒ <code>int</code>
Get the number of rooms on the given floor

**Kind**: instance method of <code>[HomeControl](#HomeControl)</code>  

| Param | Type |
| --- | --- |
| floorID | <code>int</code> | 

<a name="HomeConfig+getRoomFloorID"></a>
### homeControl.getRoomFloorID(roomIndex) ⇒ <code>string</code>
Get a room's floorID

**Kind**: instance method of <code>[HomeControl](#HomeControl)</code>  

| Param | Type |
| --- | --- |
| roomIndex | <code>int</code> | 

<a name="HomeConfig+getRoomID"></a>
### homeControl.getRoomID(roomIndex) ⇒ <code>string</code>
Get a room's ID

**Kind**: instance method of <code>[HomeControl](#HomeControl)</code>  
**Returns**: <code>string</code> - roomID  

| Param | Type |
| --- | --- |
| roomIndex | <code>int</code> | 

<a name="HomeConfig+getRoomIndex"></a>
### homeControl.getRoomIndex(id) ⇒ <code>int</code>
Get the index for a room object from its ID

**Kind**: instance method of <code>[HomeControl](#HomeControl)</code>  
**Returns**: <code>int</code> - roomIndex  

| Param | Type |
| --- | --- |
| id | <code>string</code> | 

<a name="HomeConfig+getRoomName"></a>
### homeControl.getRoomName(roomIndex) ⇒ <code>\*</code>
Get a room's name

**Kind**: instance method of <code>[HomeControl](#HomeControl)</code>  

| Param |
| --- |
| roomIndex | 

<a name="HomeConfig+getRoomsOnFloor"></a>
### homeControl.getRoomsOnFloor(floorID) ⇒ <code>Array.&lt;int&gt;</code>
Get an array of room indexes for the given floor

**Kind**: instance method of <code>[HomeControl](#HomeControl)</code>  
**Returns**: <code>Array.&lt;int&gt;</code> - roomIndex  

| Param | Type |
| --- | --- |
| floorID | <code>string</code> | 

<a name="HomeControl+hue"></a>
### homeControl.hue : <code>Object</code>
node-hue-api

**Kind**: instance property of <code>[HomeControl](#HomeControl)</code>  
<a name="HomeControl+io"></a>
### homeControl.io : <code>Object</code>
Socket.io instance

**Kind**: instance property of <code>[HomeControl](#HomeControl)</code>  
<a name="HomeControl+lightSetBrightness"></a>
### homeControl.lightSetBrightness(roomIndex, lightIndex, brightness)
Set the brightness of a light

**Kind**: instance method of <code>[HomeControl](#HomeControl)</code>  

| Param | Type |
| --- | --- |
| roomIndex | <code>int</code> | 
| lightIndex | <code>int</code> | 
| brightness | <code>int</code> | 

<a name="HomeControl+lightSetColour"></a>
### homeControl.lightSetColour(roomIndex, lightIndex, colour)
Set the colour state of a light

**Kind**: instance method of <code>[HomeControl](#HomeControl)</code>  

| Param | Type |
| --- | --- |
| roomIndex | <code>int</code> | 
| lightIndex | <code>int</code> | 
| colour | <code>Object</code> | 

<a name="HomeControl+lightSetColourTemp"></a>
### homeControl.lightSetColourTemp(roomIndex, lightIndex, colourTemp)
Set the colour temperature of a light

**Kind**: instance method of <code>[HomeControl](#HomeControl)</code>  

| Param | Type |
| --- | --- |
| roomIndex | <code>int</code> | 
| lightIndex | <code>int</code> | 
| colourTemp | <code>int</code> | 

<a name="HomeControl+lightTogglePower"></a>
### homeControl.lightTogglePower(roomIndex, lightIndex)
Toggle the power state for a given light

**Kind**: instance method of <code>[HomeControl](#HomeControl)</code>  

| Param | Type |
| --- | --- |
| roomIndex | <code>int</code> | 
| lightIndex | <code>int</code> | 

<a name="HomeControl+processFloorEvent"></a>
### homeControl.processFloorEvent(data)
Process 'floor' event from a client

**Kind**: instance method of <code>[HomeControl](#HomeControl)</code>  

| Param | Type |
| --- | --- |
| data | <code>Object</code> | 
| data.floorID | <code>string</code> | 

<a name="HomeControl+processLightEvent"></a>
### homeControl.processLightEvent(data)
Process 'light' event from a client

**Kind**: instance method of <code>[HomeControl](#HomeControl)</code>  

| Param | Type |
| --- | --- |
| data | <code>Object</code> | 
| data.command | <code>string</code> | 
| data.roomID | <code>string</code> | 
| data.lightID | <code>string</code> | 
| data.colour | <code>Object</code> | 
| data.colourTemp | <code>int</code> | 
| data.brightness | <code>int</code> | 

<a name="HomeControl+processRoomEvent"></a>
### homeControl.processRoomEvent(data)
Process 'room' event from a clientToggle all lights of type main in the room

**Kind**: instance method of <code>[HomeControl](#HomeControl)</code>  

| Param | Type |
| --- | --- |
| data | <code>Object</code> | 
| data.roomID | <code>string</code> | 

<a name="HomeControl+setBrightness"></a>
### homeControl.setBrightness(hueID, brightness)
Set light brightness by hueID

**Kind**: instance method of <code>[HomeControl](#HomeControl)</code>  

| Param | Type |
| --- | --- |
| hueID | <code>int</code> | 
| brightness | <code>int</code> | 

<a name="HomeControl+setColour"></a>
### homeControl.setColour(hueID, colour)
Set light colour by hueID

**Kind**: instance method of <code>[HomeControl](#HomeControl)</code>  

| Param | Type |
| --- | --- |
| hueID | <code>int</code> | 
| colour | <code>Object</code> | 

<a name="HomeControl+setPower"></a>
### homeControl.setPower(hueID, state)
Set a light power state by hueID

**Kind**: instance method of <code>[HomeControl](#HomeControl)</code>  

| Param | Type |
| --- | --- |
| hueID | <code>int</code> | 
| state | <code>boolean</code> | 

<a name="config"></a>
## config : <code>object</code>
Config object matches config.json file

**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| houseName | <code>string</code> | 
| hueBridgeIP | <code>string</code> | 
| hueBridgeUserName | <code>string</code> | 
| floors | <code>Array.&lt;Object&gt;</code> | 
| floors[].id | <code>string</code> | 
| floors[].name | <code>string</code> | 
| rooms | <code>Array.&lt;Object&gt;</code> | 
| rooms[].id | <code>string</code> | 
| rooms[].name | <code>string</code> | 
| rooms[].floorID | <code>string</code> | 
| lights | <code>Array.&lt;Object&gt;</code> | 
| lights[].id | <code>string</code> | 
| lights[].name | <code>string</code> | 
| lights[].roomID | <code>string</code> | 
| lights[].hueID | <code>int</code> | 
| lights[].type | <code>string</code> | 
| lights[].colour | <code>string</code> | 

