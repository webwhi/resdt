let baohan = new Vue({
    el: '#baohan',
    data: {
        boke:['博客园','首页','新随笔','联系','订阅','管理']
    }
})
let main = new Vue({
    el: '#main',
    data: {
        arr:['vue','vue','vue','vue','vue','vue','vue','vue',]
    }
})
let app = new Vue({
    el: '#app',
    data: {
        imgArr: [
            '../picture/100.jpg',
            '../picture/101.jpg',
            '../picture/103.jpg',
            '../picture/104.jpg',
            '../picture/105.jpg',
            '../picture/106.jpg',
            '../picture/107.jpg',
            '../picture/110.jpg',
            '../picture/111.jpg',
            '../picture/114.png',
        ],
        index:0,
    },
    methods: {
        prev: function () {
            this.index--;
        },
        next: function () {
            this.index++;
        }
    }
})
let notebook = new Vue({
    el: '#notebook',
    data: {
        note:'记事本',
    }
})
let section= new Vue({
    el: '#section',
    data: {
        list: [],
        inputvalue: '好好学习，天天向上',
        isshow: false,
    },
    methods: {
        add: function () {
            this.list.push(this.inputvalue);
            this.inputvalue = "";
        },
        remove: function (index) {
            this.list.splice(index, 1);
        },
        clear: function (index) {
            this.list = [];
        },
      
    }

})
let foot = new Vue({
    el: '#foot',
    data: {
        num: [],
        inp:"",
    },
    methods: {
        fabu: function () {
            this.num.push(this.inp);
            this.inp = "";
        }
    }
})

            
        
    
