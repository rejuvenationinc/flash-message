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
