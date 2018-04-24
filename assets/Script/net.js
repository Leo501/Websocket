let netConfig={};
netConfig.host='localhost';
netConfig.port='8181';

var NetControl={
    _sock:{},  //当前的webSocket的对象
    sendTempArr:[],
    connect: function () {
        if(this._sock.readyState!==1){
            //重新连接
            this._sock = new WebSocket('ws://'+netConfig.host+":"+netConfig.port); 
            this._sock.onopen = this._onOpen.bind(this);
            this._sock.onclose = this._onClose.bind(this);
            this._sock.onmessage = this._onMessage.bind(this);
        }

        return this;
    },

    _onOpen:function(){
        console.log('_onOpen');
        // this.send('is onOpen');
        this.sendTempArr.forEach((msg)=>{
            console.log('_onOpen ,send ');
            this._send(msg);
        });
    },
    _onClose:function(err){
        console.log('_onClose',err);    
    },
    _onMessage:function(obj){
        console.log('_onMessage',obj.data,obj);    
    },

    _send:function(msg){
        this._sock.send(msg);
    },

    send(msg){
        if(this._sock.readyState!==1){
            console.log('sendTempArr');
            this.sendTempArr.push(msg);
            return;
        }
        this._send(msg);
    },

    loopSend(){

    },

};

module.exports=NetControl;