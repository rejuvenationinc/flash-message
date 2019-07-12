# Vue Flash Message ✨

Simple component that un-mounts a component after a given delay.  
## Installation

#### Install using npm
```bash
# install it via npm
npm install --save ssh://git@github.com:rejuvenationinc/flash-message.git
```
* This package is not on NPM, use GitHub source only.

#### Direct usage with html
There are two version of javascript are available for browser(flash-message.min.js) use and Node(flash-message.js) use.

```html
<!-- Insert the vue core before vue-toasted -->
<script src="https://github.com/rejuvenationinc/flash-message/blob/master/dist/flash-message.js"></script>

<flash-message id="flash-message"></flash-message>
<script>
    Vue.use(FlashMessage)
</script>
```
Checkout <a target="_blank" href="https://github.com/rejuvenationinc/flash-message/tree/master/example"> the example

<hr>

## Usage

Output flash message and configure transitions.
```html
<flash-message id="flash-message"></flash-message>
```

It is simple. couple of lines all what you need.

```javascript
// register the plugin on vue
import FlashMessage from 'flash-message';

Vue.use(FlashMessage)

// you can also pass options, check options reference below
Vue.use(FlashMessage, Options)

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

```javascript
// and also
Vue.FlashMessage.success('Success Message');
Vue.FlashMessage.error('Error Message');
Vue.FlashMessage.warning('Warning Message');
Vue.FlashMessage.info('Info Message');
```

Also you can use directly on window object
```html
window.FlashMessage.success('Success Message');
```

### Options

below are the options you can pass to create a Flash Message

**Option**|**Type's**|**Default**|**Description**
-----|-----|-----|-----
duration|Number|null|You can pass the duration in millisecond, Message will display this duration
close|Boolean|true| By clicking on close button it will close the flash message
transition|String|null| You can pass different kind of transition. Here is the list **fade, slide-fade, bounce**
