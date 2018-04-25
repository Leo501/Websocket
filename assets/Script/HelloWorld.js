const net=require('net');
cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!'
    },

    // use this for initialization
    onLoad: function () {
        this.label.string = this.text;

        this.net=net;
        this.net.connect();
        this.net.addHandler('test_pust',(data)=>{
            console.log('test_pust',data);
        });
        this.net.send('test_pust','hello');
    },



    // called every frame
    update: function (dt) {

    },
});
