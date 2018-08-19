# wxapp-computed

在微信小程序中使计算值(computed),易用、轻量、无依赖、无侵入。

## Installation

```
npm install wxapp-computed
````


## Example

```js
import computed from "weapp-computed";

Page(
  computed({
    data: {
      name: "Messi",
      get fullName() {
        return `The Great ${this.name}`;
      },
      get prettyName() {
        return this.fullName.split("").join("~");
      }
    },
    onLoad() {
      // this.setData({ name: "Ronaldo" });
    }
    // ...
  })
);
```

```xml
<view>
  {{name}} / {{fullName}} / {{prettyName}}
</view>
```


## API

### computed(page:Object)

传入 page 页面对象.

## License

ISC
