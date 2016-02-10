<a name="Control"></a>
## Control
**Kind**: global class  

* [Control](#Control)
    * [new Control(io, config)](#new_Control_new)
    * [.toggleMainLights(roomID)](#Control+toggleMainLights)
    * [.setPower(hueID, state)](#Control+setPower)
    * [.setColour(hueID, colour)](#Control+setColour)
    * [.setBrightness(hueID, brightness)](#Control+setBrightness)
    * [.getRoomIndex(id)](#Control+getRoomIndex) ⇒ <code>number</code>
    * [.getRoomID(roomIndex)](#Control+getRoomID) ⇒ <code>\*</code>
    * [.getRoomsOnFloor(floor)](#Control+getRoomsOnFloor) ⇒ <code>Array</code>
    * [.getLightsByType(roomIndex, type)](#Control+getLightsByType) ⇒ <code>Array</code>
    * [.getLightIndex(roomIndex, lightID)](#Control+getLightIndex) ⇒ <code>number</code>
    * [.getLightID(roomIndex, lightIndex)](#Control+getLightID) ⇒
    * [.getLightHueID(roomIndex, lightIndex)](#Control+getLightHueID) ⇒
    * [.emit(roomIndex, lightIndex, command, value)](#Control+emit)

<a name="new_Control_new"></a>
### new Control(io, config)

| Param | Type |
| --- | --- |
| io |  | 
| config |  | 
| config.houseName |  | 
| config.hueBridgeIP |  | 
| config.hueBridgeUserName |  | 
| config.floors | <code>Array</code> | 
| config.rooms | <code>Array</code> | 

<a name="Control+toggleMainLights"></a>
### control.toggleMainLights(roomID)
Toggle all lights of type main in a room

**Kind**: instance method of <code>[Control](#Control)</code>  

| Param |
| --- |
| roomID | 

<a name="Control+setPower"></a>
### control.setPower(hueID, state)
Set a light power state by hueID

**Kind**: instance method of <code>[Control](#Control)</code>  

| Param |
| --- |
| hueID | 
| state | 

<a name="Control+setColour"></a>
### control.setColour(hueID, colour)
Set light colour by hueID

**Kind**: instance method of <code>[Control](#Control)</code>  

| Param |
| --- |
| hueID | 
| colour | 

<a name="Control+setBrightness"></a>
### control.setBrightness(hueID, brightness)
Set light brightness by hueID

**Kind**: instance method of <code>[Control](#Control)</code>  

| Param |
| --- |
| hueID | 
| brightness | 

<a name="Control+getRoomIndex"></a>
### control.getRoomIndex(id) ⇒ <code>number</code>
Get the index for a room object from its ID

**Kind**: instance method of <code>[Control](#Control)</code>  

| Param |
| --- |
| id | 

<a name="Control+getRoomID"></a>
### control.getRoomID(roomIndex) ⇒ <code>\*</code>
Return room ID from room index

**Kind**: instance method of <code>[Control](#Control)</code>  

| Param |
| --- |
| roomIndex | 

<a name="Control+getRoomsOnFloor"></a>
### control.getRoomsOnFloor(floor) ⇒ <code>Array</code>
Get an array of room indexes for the given floor

**Kind**: instance method of <code>[Control](#Control)</code>  

| Param |
| --- |
| floor | 

<a name="Control+getLightsByType"></a>
### control.getLightsByType(roomIndex, type) ⇒ <code>Array</code>
Get an array of light indexes of a particular type for the given room

**Kind**: instance method of <code>[Control](#Control)</code>  

| Param |
| --- |
| roomIndex | 
| type | 

<a name="Control+getLightIndex"></a>
### control.getLightIndex(roomIndex, lightID) ⇒ <code>number</code>
Get the index for a light object from its ID and room

**Kind**: instance method of <code>[Control](#Control)</code>  

| Param |
| --- |
| roomIndex | 
| lightID | 

<a name="Control+getLightID"></a>
### control.getLightID(roomIndex, lightIndex) ⇒
Return light ID for a given room and light index

**Kind**: instance method of <code>[Control](#Control)</code>  
**Returns**: id  

| Param |
| --- |
| roomIndex | 
| lightIndex | 

<a name="Control+getLightHueID"></a>
### control.getLightHueID(roomIndex, lightIndex) ⇒
Return hue ID for a given room and light index

**Kind**: instance method of <code>[Control](#Control)</code>  
**Returns**: hueID  

| Param |
| --- |
| roomIndex | 
| lightIndex | 

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

