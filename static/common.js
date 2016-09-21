function onMenuOver(obj)
	 {
	   
	   
	    //document.getElementById("masthead").style.height="64px";
		
		if(obj==document.getElementById("service")||obj==document.getElementById("sdkLink"))
		{
		   if(obj==document.getElementById("service"))
	       document.getElementById("seviceList").style.display="";
		   else
		     document.getElementById("sdkList").style.display="";
		     document.getElementById("menueListLine").style.display="";
		     document.getElementById("masthead").style.height="106px";
		 }else
		 {
		 
		   document.getElementById("seviceList").style.display="none";
		    document.getElementById("menueListLine").style.display="none";
	    	document.getElementById("masthead").style.height="64px";
			  document.getElementById("sdkList").style.display="none";
		 }
	 }
	 

	 
	 function onULout(ev)
	 {
	 	
	 	  //onULout
	 	  var oEvent = ev||event;
	 	  if(oEvent.clientY<110&&oEvent.clientY>50)return;
	     document.getElementById("seviceList").style.display="none";
		 document.getElementById("sdkList").style.display="none";
		 document.getElementById("menueListLine").style.display="none";
	     document.getElementById("masthead").style.height="64px";
	     
	    /// document.getElementById("print").innerHTML = "out :"+oEvent.clientY;
          
	 }
	 
	 function onULover(n)
	 {
	     if(n==1)
	     document.getElementById("seviceList").style.display="";
		 else
		 document.getElementById("sdkList").style.display="";
		 
		 document.getElementById("menueListLine").style.display="";
		 document.getElementById("masthead").style.height="106px";
		 ///document.getElementById("print").innerHTML = "in";
	 }
    
function onFocusOver(n)
		   {
		      if(Number(n)==1)
			  {
			    //// alert(document.getElementById("ercode"));
				if(IsPC())
			     document.getElementById("ercode").style.display = "";
			     
			     
			  }
			/* if(Number(n)==3)
			  	{
			  		if(document.getElementById("ercode").style.display == "")
			  		{
			  			document.getElementById("ercode").style.display = "none";
			  		}else
			  		{
			  			document.getElementById("ercode").style.display = "";
			  		}
			  	}*/
			  	
			  	if(!IsPC())
			  	{
			  		document.getElementById("ercode").style.left = "130px";
			      document.getElementById("ercode").style.top = "30px";
			  	}
			  	
			  	
		   }
		   
		   function onFocusOut(n)
		   {
		      if(Number(n)==1)
			   {
			     document.getElementById("ercode").style.display = "none";
			   }
		   } 

function onFocusClick()
{
	               if(document.getElementById("ercode").style.display == "")
			  		{
			  			document.getElementById("ercode").style.display = "none";
						//alert("aaaa");
			  		}else
			  		{
			  			document.getElementById("ercode").style.display = "";
						//alert("bbbb");
			  		}
}

function showMoblieMenu()
 {
   // alert("aaaa");
    if(document.getElementById("mobileOpenBtn").style.display =="none")
	{
      document.getElementById("mobileMenuBox").style.display = "none";
	  document.getElementById("mobileBg").style.display = "none";
	  document.getElementById("mobileBg2").style.display = "none";
	  document.getElementById("mobileCloseBtn").style.display ="none";
	  document.getElementById("mobileOpenBtn").style.display ="";
	  
	}else
	{
	  document.getElementById("mobileMenuBox").style.display = "";
	  document.getElementById("mobileBg").style.display = "";
	  document.getElementById("mobileBg2").style.display = "";
	  document.getElementById("mobileCloseBtn").style.display =""
	   document.getElementById("mobileOpenBtn").style.display ="none";
	}
	
 }  
 
 
 
 function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}


function setBanner(img)
{
	  
}


 function onResetBanner(pcImg,mobileImg)
	 {
	   	 height = 600;
		 if(!IsPC()||document.body.clientWidth<768)
		{
		   document.getElementById("bigInmage").src = mobileImg;//"mobileImages/banner3-mini.png";
		   width  = 1000;
		   textHeight = 80;
		}else
		{
		   width = 2560;
		   document.getElementById("bigInmage").src = pcImg;//"images/banner3.jpg";
		   textHeight = 200;
		}
	   var rate = document.body.clientWidth/width;
	   var imgHeight = height*rate;// document.getElementById("bigInmage").height;//168
       document.getElementById("bigTitle").style.marginTop = (imgHeight - textHeight)/2+"px";
	 }