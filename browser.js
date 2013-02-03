var BROWSER={};
 function get_browser()
        {
                if( /Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent) )
                        return "FF";
                else if( /MSIE (\d+\.\d+);/.test(navigator.userAgent) )
                        return "IE"; 
  	else if( /Maxthon/.test(navigator.userAgent) )
                        return "MX";
                else if( /Chrome/.test(navigator.userAgent) )
                        return "CM";
                else if( /Safari/.test(navigator.userAgent) )
                        return "SF";
                else if( /Opera/.test(navigator.userAgent) )
                        return "OP";
                else
                        return "??";
        };

  function get_port(){
		if(BROWSER['name']==="FF")return 10933;
		else if(BROWSER['name']==='IE')return 10934;
		else if(BROWSER['name']==='CM')return 10935;
		else if(BROWSER['name']==='SF')return 10936;
		else if(BROWSER['name']==='OP')return 10937;
		else if(BROWSER['name']==='MX')return 10938;
		else
			return 10939;
	}

BROWSER['name']=get_browser();
BROWSER['websocket_port']=get_port();
