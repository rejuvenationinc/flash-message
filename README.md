# Vue Flash Message ✨

Simple component that unmounts a component after a given delay. It adds no styling or animations.
## Basic Example

```javascript
import Vue from 'vue';
import FlashMessage from 'flash-message'
Vue.use(FlashMessage)
```

## Usage
Output flash message pool and configure transitions.
```html
<flash-message id="flash-message"></flash-message>
```

Emit flash messages from any component with a flash (or custom named) method.
```javascript
this.flash('Data loaded', 'success');
this.flash('Validation failed', 'error');
this.flash('Spawning too much alerts is a bad UX', 'warning');
this.flash('Live long and prosper', 'info');
```

## Shortcut methods
You can also use shortcut methods to output common message types
```javascript
this.flashSuccess('Data loaded');
this.flashError('Validation failed');
this.flashWarning('Spawning too much alerts is a bad UX');
this.flashInfo('Live long and prosper');

```
