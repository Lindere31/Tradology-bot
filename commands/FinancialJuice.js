var id="financialjuice-eco-widget-container" 
    type="text/javascript"
    var jo = document.createElement("script");
    jo.type = "text/javascript";
    jo.id= "FJ-Widgets";
    var r = Math.floor(Math.random() * (9999 - 0 + 1) + 0);
    jo.src = "https://www.financialjuice.com/widgets/widgets.js?r=" + r + "";
    jo.onload = function(){ 
    var options = {};
     options.container = "financialjuice-eco-widget-container";
    options.mode = "table";
    options.width= "700px";
    options.height= "600px";
    options.backColor= "1e222d";
    options.fontColor= "b2b5be";
    options.widgetType= "ECOCAL";
   new window.FJWidgets.createWidget(options);
        } 
     document.getElementsByTagName("head")[0].appendChild(jo);

