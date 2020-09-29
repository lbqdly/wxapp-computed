# wxapp-computed

在小程序中使计算值(computed),易用、轻量、无依赖、无侵入。

## Installation

```
npm install wxapp-computed
````


## Example

```js
import computed from 'wxapp-computed'

Page(
  computed({
    data: {
      name: 'Messi',
      get uppercaseName() {
        return this.name.toUpperCase()
      },
      get reversedName() {
        return this.uppercaseName.split('').reverse().join('')
      }
    },
    onLoad() {
      // this.setData({ name: 'Ronaldo' })
    }
    // ...
  })
)
```

```xml
<view>
  {{name}} / {{uppercaseName}} / {{reversedName}}
  // 将显示为： Messi / MESSI / ISSEM
</view>
```


## API

### computed(page:Object)

传入 page 页面对象.

## License

ISC
