# Vue Flash Message ✨

Simple component that un-mounts a component after a given delay.  
## Basic Example

```javascript
import Vue from 'vue';
import FlashMessage from 'flash-message'
Vue.use(FlashMessage, {
  duration: 500
})
```

### Options

below are the options you can pass to create a Flash Message

**Option**|**Type's**|**Default**|**Description**
-----|-----|-----|-----
duration|Number|500|You can pass the duration in millisecond
close|Boolean|true| By clicking on close button it will close the flash message
transition|String|null| You can pass different kind of transition. Here is the list ** fade, slide-fade, bounce **


## Usage
Output flash message pool and configure transitions.
```html
<flash-message id="flash-message"></flash-message>
```

Emit flash messages from any component with a flash (or custom named) method.
```javascript
this.flashMessage('Success Message', 'success');
this.flashMessage('Error Message', 'error');
this.flashMessage('Warning Message', 'warning');
this.flashMessage('Info Message', 'info');
```

## Shortcut methods
You can also use shortcut methods to output common message types
```javascript
this.flashSuccess('Success Message');
this.flashError('Error Message');
this.flashWarning('Warning Message');
this.flashInfo('Info Message');

```
