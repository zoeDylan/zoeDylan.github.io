/**
 * 定时器限制
 * set(name); 首次获取为true，两秒内获取为false，两秒后为true
 */

const
    timeGroup = {},
    astrictTime = (() => {
        function set(name, time) {
            timeGroup[name] = Object.keys(timeGroup).indexOf(name) > -1 ? timeGroup[name] : true;
            let retState = timeGroup[name];
            if (timeGroup[name]) {
                timeGroup[name] = false;
                setTimeout(() => {
                    timeGroup[name] = true;
                }, time || 2000);
            }
            return retState;
        }
        return set;
    })();


module.exports = astrictTime;