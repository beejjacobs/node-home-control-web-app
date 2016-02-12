<a name="Control"></a>
## Control
**Kind**: global class  

* [Control](#Control)
    * [new Control(io, config)](#new_Control_new)
    * [.config](#Control+config) : <code>Object</code>
    * [.emit(roomIndex, lightIndex, command, value)](#Control+emit)
    * [.getLightHueID(roomIndex, lightIndex)](#Control+getLightHueID) ⇒ <code>int</code>
    * [.getLightID(roomIndex, lightIndex)](#Control+getLightID) ⇒ <code>string</code>
    * [.getLightIndex(roomIndex, lightID)](#Control+getLightIndex) ⇒ <code>int</code>
    * [.getLightsByType(roomIndex, type)](#Control+getLightsByType) ⇒ <code>Array.&lt;int&gt;</code>
    * [.getRoomID(roomIndex)](#Control+getRoomID) ⇒ <code>string</code>
    * [.getRoomIndex(id)](#Control+getRoomIndex) ⇒ <code>int</code>
    * [.getRoomsOnFloor(floor)](#Control+getRoomsOnFloor) ⇒ <code>Array.&lt;int&gt;</code>
    * [.hue](#Control+hue) : <code>Object</code>
    * [.io](#Control+io) : <code>Object</code>
    * [.lightSetBrightness(roomIndex, lightIndex, brightness)](#Control+lightSetBrightness)
    * [.lightSetColour(roomIndex, lightIndex, colour)](#Control+lightSetColour)
    * [.lightSetColourTemp(roomIndex, lightIndex, colourTemp)](#Control+lightSetColourTemp)
    * [.lightTogglePower(roomIndex, lightIndex)](#Control+lightTogglePower)
    * [.processLightEvent(data)](#Control+processLightEvent)
    * [.processRoomEvent(data)](#Control+processRoomEvent)
    * [.setBrightness(hueID, brightness)](#Control+setBrightness)
    * [.setColour(hueID, colour)](#Control+setColour)
    * [.setPower(hueID, state)](#Control+setPower)

<a name="new_Control_new"></a>
### new Control(io, config)
Control class for controlling devices from received client events.


| Param | Type | Description |
| --- | --- | --- |
| io | <code>Object</code> | socket.io instance |
| config | <code>Object</code> | config.json object |
| config.houseName | <code>string</code> |  |
| config.hueBridgeIP | <code>string</code> |  |
| config.hueBridgeUserName | <code>string</code> |  |
| config.floors | <code>Array.&lt;Object&gt;</code> |  |
| config.rooms | <code>Array.&lt;Object&gt;</code> |  |

<a name="Control+config"></a>
### control.config : <code>Object</code>
config.json object

**Kind**: instance property of <code>[Control](#Control)</code>  
<a name="Control+emit"></a>
### control.emit(roomIndex, lightIndex, command, value)
Emit a socket event and log the action

**Kind**: instance method of <code>[Control](#Control)</code>  

| Param | Type |
| --- | --- |
| roomIndex | <code>int</code> | 
| lightIndex | <code>int</code> | 
| command | <code>string</code> | 
| value | <code>Object</code> | 

<a name="Control+getLightHueID"></a>
### control.getLightHueID(roomIndex, lightIndex) ⇒ <code>int</code>
Return hue ID for a given room and light index

**Kind**: instance method of <code>[Control](#Control)</code>  
**Returns**: <code>int</code> - hueID  

| Param | Type |
| --- | --- |
| roomIndex | <code>int</code> | 
| lightIndex | <code>int</code> | 

<a name="Control+getLightID"></a>
### control.getLightID(roomIndex, lightIndex) ⇒ <code>string</code>
Return light ID for a given room and light index

**Kind**: instance method of <code>[Control](#Control)</code>  
**Returns**: <code>string</code> - lightID  

| Param | Type |
| --- | --- |
| roomIndex | <code>int</code> | 
| lightIndex | <code>int</code> | 

<a name="Control+getLightIndex"></a>
### control.getLightIndex(roomIndex, lightID) ⇒ <code>int</code>
Get the index for a light object from its ID and room

**Kind**: instance method of <code>[Control](#Control)</code>  
**Returns**: <code>int</code> - lightIndex  

| Param | Type |
| --- | --- |
| roomIndex | <code>int</code> | 
| lightID | <code>string</code> | 

<a name="Control+getLightsByType"></a>
### control.getLightsByType(roomIndex, type) ⇒ <code>Array.&lt;int&gt;</code>
Get an array of light indexes of a particular type for the given room

**Kind**: instance method of <code>[Control](#Control)</code>  
**Returns**: <code>Array.&lt;int&gt;</code> - lightIndex  

| Param | Type |
| --- | --- |
| roomIndex | <code>int</code> | 
| type | <code>string</code> | 

<a name="Control+getRoomID"></a>
### control.getRoomID(roomIndex) ⇒ <code>string</code>
Return room ID from room index

**Kind**: instance method of <code>[Control](#Control)</code>  
**Returns**: <code>string</code> - roomID  

| Param | Type |
| --- | --- |
| roomIndex | <code>int</code> | 

<a name="Control+getRoomIndex"></a>
### control.getRoomIndex(id) ⇒ <code>int</code>
Get the index for a room object from its ID

**Kind**: instance method of <code>[Control](#Control)</code>  
**Returns**: <code>int</code> - roomIndex  

| Param | Type |
| --- | --- |
| id | <code>string</code> | 

<a name="Control+getRoomsOnFloor"></a>
### control.getRoomsOnFloor(floor) ⇒ <code>Array.&lt;int&gt;</code>
Get an array of room indexes for the given floor

**Kind**: instance method of <code>[Control](#Control)</code>  
**Returns**: <code>Array.&lt;int&gt;</code> - roomIndex  

| Param | Type |
| --- | --- |
| floor | <code>int</code> | 

<a name="Control+hue"></a>
### control.hue : <code>Object</code>
node-hue-api

**Kind**: instance property of <code>[Control](#Control)</code>  
<a name="Control+io"></a>
### control.io : <code>Object</code>
Socket.io instance

**Kind**: instance property of <code>[Control](#Control)</code>  
<a name="Control+lightSetBrightness"></a>
### control.lightSetBrightness(roomIndex, lightIndex, brightness)
Set the brightness of a light

**Kind**: instance method of <code>[Control](#Control)</code>  

| Param | Type |
| --- | --- |
| roomIndex | <code>int</code> | 
| lightIndex | <code>int</code> | 
| brightness | <code>int</code> | 

<a name="Control+lightSetColour"></a>
### control.lightSetColour(roomIndex, lightIndex, colour)
Set the colour state of a light

**Kind**: instance method of <code>[Control](#Control)</code>  

| Param | Type |
| --- | --- |
| roomIndex | <code>int</code> | 
| lightIndex | <code>int</code> | 
| colour | <code>Object</code> | 

<a name="Control+lightSetColourTemp"></a>
### control.lightSetColourTemp(roomIndex, lightIndex, colourTemp)
Set the colour temperature of a light

**Kind**: instance method of <code>[Control](#Control)</code>  

| Param | Type |
| --- | --- |
| roomIndex | <code>int</code> | 
| lightIndex | <code>int</code> | 
| colourTemp | <code>int</code> | 

<a name="Control+lightTogglePower"></a>
### control.lightTogglePower(roomIndex, lightIndex)
Toggle the power state for a given light

**Kind**: instance method of <code>[Control](#Control)</code>  

| Param | Type |
| --- | --- |
| roomIndex | <code>int</code> | 
| lightIndex | <code>int</code> | 

<a name="Control+processLightEvent"></a>
### control.processLightEvent(data)
Process 'light' event from a client

**Kind**: instance method of <code>[Control](#Control)</code>  

| Param | Type |
| --- | --- |
| data | <code>Object</code> | 
| data.command | <code>string</code> | 
| data.roomID | <code>string</code> | 
| data.lightID | <code>string</code> | 
| data.colour | <code>Object</code> | 
| data.colourTemp | <code>int</code> | 
| data.brightness | <code>int</code> | 

<a name="Control+processRoomEvent"></a>
### control.processRoomEvent(data)
Process 'room' event from a clientToggle all lights of type main in the room

**Kind**: instance method of <code>[Control](#Control)</code>  

| Param | Type |
| --- | --- |
| data | <code>Object</code> | 
| data.roomID | <code>string</code> | 

<a name="Control+setBrightness"></a>
### control.setBrightness(hueID, brightness)
Set light brightness by hueID

**Kind**: instance method of <code>[Control](#Control)</code>  

| Param | Type |
| --- | --- |
| hueID | <code>int</code> | 
| brightness | <code>int</code> | 

<a name="Control+setColour"></a>
### control.setColour(hueID, colour)
Set light colour by hueID

**Kind**: instance method of <code>[Control](#Control)</code>  

| Param | Type |
| --- | --- |
| hueID | <code>int</code> | 
| colour | <code>Object</code> | 

<a name="Control+setPower"></a>
### control.setPower(hueID, state)
Set a light power state by hueID

**Kind**: instance method of <code>[Control](#Control)</code>  

| Param | Type |
| --- | --- |
| hueID | <code>int</code> | 
| state | <code>boolean</code> | 

