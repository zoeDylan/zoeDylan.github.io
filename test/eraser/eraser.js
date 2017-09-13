const
    Eraser = (() => {
        const canvasElem = [];
        //初始化canvas
        function canvasInit() {
            //为了解决再次初始化 必须重置globalCompositeOperation属性
            this.isEnable = this.op.isEnable;
            this.ctx.globalCompositeOperation = 'source-over';
            if (this.op.img) {
                const
                    img = document.createElement('img'),
                    self = this;
                img.src = this.op.img;
                img.onload = () => {
                    self.ctx.drawImage(img, 0, 0, self.width, self.height);
                    this.ctx.globalCompositeOperation = 'destination-out';
                }
            } else {
                this.ctx.fillStyle = '#999';
                this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
                this.ctx.fill();
            }

            //图片需要异步加载
            !this.op.img && (this.ctx.globalCompositeOperation = 'destination-out');
            this.ctx.lineWidth = this.op.size;
            this.ctx.lineCap = 'round';
        }
        //添加事件
        function addEvent() {
            this.canvas.addEventListener('touchstart', eventStart.bind(this));
            this.canvas.addEventListener('touchmove', eventMove.bind(this));
            this.canvas.addEventListener('touchend', eventEnd.bind(this));
            this.canvas.addEventListener('mousedown', eventStart.bind(this));
            this.canvas.addEventListener('mousemove', eventMove.bind(this));
            this.canvas.addEventListener('mouseup', eventEnd.bind(this));
        }

        function eventStart(e) {
            e.preventDefault();
            e.stopPropagation();
            if (this.isEnable) {
                this.isTouch = true;
                setPoint.call(this, e);
                this.ctx.beginPath();
                this.ctx.lineTo(this.beginX, this.beginY);
                this.ctx.stroke();
            }
        }


        function eventMove(e) {
            if (this.isTouch) {
                setPoint.call(this, e);
                this.ctx.beginPath();
                this.ctx.moveTo(this.beginX, this.beginY);
                this.ctx.lineTo(this.endX, this.endY);
                this.ctx.stroke();
            }
        }

        function eventEnd(e) {
            this.isTouch = false;
            this.ctx.save();
            this.ctx.restore();
        }

        function setPoint(e) {
            if (this.isTouch) {
                this.endX = this.beginX;
                this.endY = this.beginY;
                this.beginX = Math.floor(e.touches ? e.touches[0].clientX - e.target.getBoundingClientRect().left : e.offsetX);
                this.beginY = Math.floor(e.touches ? e.touches[0].clientY - e.target.getBoundingClientRect().top : e.offsetY);

                //百分比计算
                const point = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height).data;
                let num = 0;
                for (let i = 3; i < point.length; i += 4) {
                    (point[i] === 0) && (num++);
                }
                num = (num / (point.length / 4));
                this.op.progressFn(num);
                if (num >= this.op.endNum) {
                    clear.call(this);
                    this.op.endFn();
                }
            }
        }

        function clear() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
        /**
         * 
         * @param {*Object} op
         * op.el 元素选择器
         * op.size 刮层大小
         * op.endNum 刮层百分比  0-1
         * op.endFn 清空到刮层值的时候所执行的事件
         * op.img 覆盖图片 可为空
         * op.progressFn 绘制进度 num:进度 0-1
         */
        function init(op) {
            //禁用相同元素
            if (canvasElem.indexOf(op.el) > -1) {
                return false;
            }
            canvasElem.push(op.el);

            const
                elem = document.querySelector(op.el),
                canvas = document.createElement('canvas'),
                ctx = canvas.getContext('2d'),
                width = elem.offsetWidth,
                height = elem.offsetHeight,
                devicePixelRatio = window.devicePixelRatio || 1,
                backingStoreRatio = ctx.webkitBackingStorePixelRatio ||
                ctx.mozBackingStorePixelRatio ||
                ctx.msBackingStorePixelRatio ||
                ctx.oBackingStorePixelRatio ||
                ctx.backingStorePixelRatio || 1,
                ratio = devicePixelRatio / backingStoreRatio;

            this.beginX = 0;
            this.beginY = 0;
            this.endX = 0;
            this.endY = 0;
            this.isTouch = false;
            this.isEnable = true;
            this.ratio = ratio;
            this.width = width;
            this.height = height;
            this.ctx = ctx;
            this.canvas = canvas;
            this.op = Object.assign({
                img: false,
                endNum: 1,
                size: 20,
                isEnable: true,
                endFn: () => {},
                progressFn: (num) => {}
            }, op);

            canvas.id = elem.id;
            canvas.className = elem.className;
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
            canvas.width = width * ratio;
            canvas.height = height * ratio;
            elem.insertAdjacentElement('afterend', canvas);
            ctx.scale(ratio, ratio);
            canvasInit.call(this);
            addEvent.call(this);
            elem.remove();

            return {
                //重置
                reset: () => {
                    if (this.isEnable) {
                        clear.call(this);
                        canvasInit.call(this);
                    }
                },
                //清空
                clear: () => {
                    if (this.isEnable) {
                        clear.call(this);
                    }
                },
                //禁用
                disable: () => {
                    this.isEnable = false;
                },
                //启用
                enable: () => {
                    this.isEnable = true;
                }
            }
        }

        return init;
    })();