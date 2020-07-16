> # @tpluscode/run-kit
Dead simple RunKit web component

## Installation

With unpkg, add this to page:

```html
<script src="//unpkg.com/@tpluscode/wc-runkit"></script>
```

## Usage

Add a `<run-kit>` element with a `<pre>` inside

```html
<run-kit>
  <pre>
const hello = require("simple-hello-world-example")

myApp.printMsg()
  </pre>
</run-kit>
```

When using in a static-page generator, you might use triple backticks instead of `<pre>` to have the highlighted
code be displayed until runkit initializes its embed.

    <run-kit>
    
      ```js
    const hello = require("simple-hello-world-example")

    myApp.printMsg()
      ```
      
    </run-kit>


## Configuration

All options follow [Embed API](https://runkit.com/docs/embed#embed-api) docs page

### Node Version

```
<run-kit node-version="13"></run-kit>
```

The default is `12`
