# Button

Button is an element for user interaction. It should be used for invoking an event or action.

`import { Button } from 'react-ui-library-boilerplate'

## Basic usage

```jsx
<Button
	name="button-name"
	onClick={handleonButtonClick}
>
Button
</Button>
```

### Props

The button element accepts the following properties:

Property | Description | Type | Value/s | Required | Default
-|-|-|-|-|-
`name` | The name assigned to the button | string | - | Yes | -
`classes` | Add extra styling classes to the button | string | - | No | -
`color` | Set the colour of the button | string | `primary`, `alert`, `warning`, `success`, `black`, `white` | No | `primary`
`size` | Set the size of the button | string | `sm`, `reg`, `lg` | No | `reg`
`outlined` | Change the button from solid to outlined | bool | `true`, `false` | No | `false`
`disabled` | Toggle the disabled attribute of the button | bool | `true`, `false` | No | `false`
`onClick` | onClick callback event handler function | function | - | Yes | -

**Note:**  
The button text will dynamically change color based on the contrast of the button `color` value



