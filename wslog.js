wsURL="ws://172.16.205.1"
var ws;

function _init_ws_log(startFunc,port) 
{

  wsURL = "ws://127.0.0.1"
  wsURL = wsURL+":"+port+"/log";

  if (wsURL) {
  
    ws = new WebSocket(wsURL,"echo-protocol");

    ws.onopen = function(evt) {
   
     log = function(s) { ws.send(s + "\n");  }
  	 startFunc(0)
    };

    ws.onclose = function(evt) {
	setTimeout(function(){ _init_ws_log(startFunc,port);},0);return;
    };

    ws.onmessage = function(evt) { }
    //consoleDumpln("Socked received: " + evt.data); };
    ws.onerror = function(evt) {};
	return;
   }
 }
