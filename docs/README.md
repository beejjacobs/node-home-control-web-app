<a name="Control"></a>
## Control
**Kind**: global class  

* [Control](#Control)
    * [new Control(io, config)](#new_Control_new)
    * [.emit(roomIndex, lightIndex, command, value)](#Control+emit)
    * [.getLightHueID(roomIndex, lightIndex)](#Control+getLightHueID) ⇒ <code>int</code>
    * [.getLightID(roomIndex, lightIndex)](#Control+getLightID) ⇒ <code>string</code>
    * [.getLightIndex(roomIndex, lightID)](#Control+getLightIndex) ⇒ <code>int</code>
    * [.getLightsByType(roomIndex, type)](#Control+getLightsByType) ⇒ <code>Array</code>
    * [.getRoomID(roomIndex)](#Control+getRoomID) ⇒ <code>string</code>
    * [.getRoomIndex(id)](#Control+getRoomIndex) ⇒ <code>number</code>
    * [.getRoomsOnFloor(floor)](#Control+getRoomsOnFloor) ⇒ <code>Array</code>
    * [.setBrightness(hueID, brightness)](#Control+setBrightness)
    * [.setColour(hueID, colour)](#Control+setColour)
    * [.setPower(hueID, state)](#Control+setPower)
    * [.toggleMainLights(roomID)](#Control+toggleMainLights)

<a name="new_Control_new"></a>
### new Control(io, config)

| Param | Type |
| --- | --- |
| io | <code>object</code> | 
| config | <code>object</code> | 
| config.houseName | <code>string</code> | 
| config.hueBridgeIP | <code>string</code> | 
| config.hueBridgeUserName | <code>string</code> | 
| config.floors | <code>Array</code> | 
| config.rooms | <code>Array</code> | 

<a name="Control+emit"></a>
### control.emit(roomIndex, lightIndex, command, value)
Emit a socket event and log the action

**Kind**: instance method of <code>[Control](#Control)</code>  

| Param | Type |
| --- | --- |
| roomIndex | <code>int</code> | 
| lightIndex | <code>int</code> | 
| command | <code>string</code> | 
| value | <code>object</code> | 

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
### control.getLightsByType(roomIndex, type) ⇒ <code>Array</code>
Get an array of light indexes of a particular type for the given room

**Kind**: instance method of <code>[Control](#Control)</code>  
**Returns**: <code>Array</code> - lightIndex  

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
### control.getRoomIndex(id) ⇒ <code>number</code>
Get the index for a room object from its ID

**Kind**: instance method of <code>[Control](#Control)</code>  
**Returns**: <code>number</code> - roomIndex  

| Param | Type |
| --- | --- |
| id | <code>string</code> | 

<a name="Control+getRoomsOnFloor"></a>
### control.getRoomsOnFloor(floor) ⇒ <code>Array</code>
Get an array of room indexes for the given floor

**Kind**: instance method of <code>[Control](#Control)</code>  
**Returns**: <code>Array</code> - roomIndex  

| Param | Type |
| --- | --- |
| floor | <code>int</code> | 

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
| colour | <code>object</code> | 

<a name="Control+setPower"></a>
### control.setPower(hueID, state)
Set a light power state by hueID

**Kind**: instance method of <code>[Control](#Control)</code>  

| Param | Type |
| --- | --- |
| hueID | <code>int</code> | 
| state | <code>boolean</code> | 

<a name="Control+toggleMainLights"></a>
### control.toggleMainLights(roomID)
Toggle all lights of type main in a room

**Kind**: instance method of <code>[Control](#Control)</code>  

| Param | Type |
| --- | --- |
| roomID | <code>string</code> | 

