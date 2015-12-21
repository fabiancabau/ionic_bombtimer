angular.module('csgo_bombtimer')
	.factory('socket', function(socketFactory){
        //Create socket and connect to http://chat.socket.io 
         var myIoSocket = io.connect('http://192.168.25.6:3000');
         // var myIoSocket = io.connect('http://localhost:3000');

          mySocket = socketFactory({
            ioSocket: myIoSocket
          });

        return mySocket;
    })