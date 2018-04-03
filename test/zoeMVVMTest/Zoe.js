function Zoe(param) {
  // :="**" 绑定输入
  // @="**" 绑定事件
  // {{**}} 绑定展示
  //**********************参数处理
  this.el = document.querySelector(param.el);
  this.methods = param.methods;
  this._data = param.data; //因为要使用源参数，所以加个下划线
  this.data = {};
  //**********************参数处理END
  //**********************变量声明
  //元素数组
  const textElemArr = [], //elem,text:源文字
    bindElemArr = [], //elem,name：绑定的变量
    eventElemArr = []; //elem,events:绑定的事件名数组,methods:绑定的事件方法数组
  //**********************变量声明END
  //**********************方法创建
  //元素绑定
  function bindElem(el) {
    //元素归类
    el.childNodes.forEach(elem => {
      //文本元素:用于展示
      switch (elem.nodeType) {
        case 1:
          //用于输入框的事件绑定
          elem.hasAttribute(":") &&
            bindElemArr.push({
              elem: elem,
              name: elem.getAttribute(":")
            });

          //用于原生事件的处理
          const attrs = elem.attributes,
            //事件数组
            events = [],
            //方法数组
            methods = [];

          for (let i = 0; i < attrs.length; i++) {
            const attr = attrs[i];

            if (attr.nodeName.indexOf("@") == 0) {
              events.push(attr.nodeName);
              methods.push(attr.nodeValue);
            }
          }

          events.length > 0 &&
            eventElemArr.push({
              elem: elem,
              events: events,
              methods: methods
            });

          break;
        case 3:
          const val = elem.nodeValue.replace(/ /g, "").match(/{{.+}}/g);
          val &&
            val.length > 0 &&
            textElemArr.push({
              elem: elem,
              text: elem.nodeValue.replace(/ /g, "")
            });
          break;
        default:
          break;
      }
      //存在子元素，递归
      elem.childNodes.length > 0 && bindElem.call(this, elem);
    });
  }
  //数据绑定
  function bindData() {
    //数据处理
    const self = this;
    Object.keys(self._data).forEach((val, i) => {
      self.data = Object.defineProperty(self.data, val, {
        get() {
          return self._data[val];
        },
        set(data) {
          self._data[val] = data;

          //文字渲染：这里挺复杂的
          textElemArr.forEach(nodeObj => {
            let text = nodeObj.text,
              textMatch = text.match(/{{.+?}}/g);
            textMatch &&
              textMatch.forEach(name => {
                name = name.replace(/{{|}}/g, "");
                if (Object.keys(self._data).indexOf(name) > -1) {
                  text = text.replace("{{" + name + "}}", self._data[name]);
                }
              });
            nodeObj.elem.nodeValue = text;
          });
          bindElemArr.forEach(v => {
            v.name == val && (v.elem.value = data);
          });
        }
      });
      self.data[val] = self._data[val];
    });
  }

  //事件处理
  function bindEvent() {
    const self = this;
    //输入框相关
    bindElemArr.forEach(v => {
      v.elem.oninput = () => {
        const type = typeof self.data[v.name];
        self.data[v.name] =
          type == "number" ? Number(v.elem.value) : v.elem.value;
      };
    });

    //其它事件
    eventElemArr.forEach(nodeObj => {
      const self = this,
        elem = nodeObj.elem;

      nodeObj.events.forEach((evName, index) => {
        elem.addEventListener(
          evName.replace("@", ""),
          self.methods[nodeObj.methods[index]].bind(self)
        );
      });
    });
  }

  //**********************方法创建END

  //**********************初始化
  //元素
  bindElem.call(this, this.el);
  //数据
  bindData.call(this);
  //事件
  bindEvent.call(this);
}
