# wxapp-computed

在小程序中使计算值(computed),易用、轻量、无依赖、无侵入。

## Installation

```
npm install wxapp-computed
````


## Example

```js
import computed from "wxapp-computed";

Page(
  computed({
    data: {
      name: "Messi",
      get anotherName() {
        return `The Great ${this.name}`;
      },
      get prettyName() {
        return this.anotherName.split("").join("~");
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
  {{name}} / {{anotherName}} / {{prettyName}}
</view>
```


## API

### computed(page:Object)

传入 page 页面对象.

## License

ISC
