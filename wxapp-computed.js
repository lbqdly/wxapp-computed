//https://github.com/b5156/wxapp-computed

//isObj({foo: 'bar'});//=> true
//isObj([1, 2, 3]);//=> false
function isObj(x) {
  var toString = Object.prototype.toString;
  var prototype;
  return (
    toString.call(x) === "[object Object]" &&
    ((prototype = Object.getPrototypeOf(x)),
    prototype === null || prototype === Object.getPrototypeOf({}))
  );
}

// 解析path到数组
function parsePath(str = "") {
  let list = [];
  const reg = /\[\d+\]/g;
  str.split(".").forEach(item => {
    let arr = item.split(reg).concat(item.match(reg));
    arr = arr.filter(item => !!item);
    arr = arr.map(item => {
      if (item.charAt(0) === "[" && item.charAt(item.length - 1) === "]") {
        return parseInt(item.slice(1, -1));
      } else {
        return item;
      }
    });
    list = list.concat(arr);
  });
  return list;
}

// 设置value到对象路径
function setPath(obj, path, value) {
  const segs = parsePath(path);
  segs.reduce((deep, seg, i) => {
    return (deep[seg] =
      segs.length - 1 === i ? (deep[seg] = value) : deep[seg] || {});
  }, obj);
  return obj;
}

// 计算属性装饰器
function computed(page) {
  if (!isObj(page)) {
    throw new TypeError("参数必须是一个Object");
  }
  const _onLoad = page.onLoad;
  page.onLoad = function() {
    let _data = page.data;
    const _setData = this.setData;
    Object.defineProperty(this, "setData", {
      configurable: true,
      enumerable: true,
      writable: false,
      value: (d, f) => {
        if (!isObj(d)) {
          throw new TypeError("参数必须是一个Object");
        }
        Object.keys(d).forEach(k => {
          setPath(_data, k, d[k]);
        });
        _setData.call(this, _data, f);
      }
    });
    _onLoad.apply(this, arguments);
  };
  return page;
}

module.exports = computed;
