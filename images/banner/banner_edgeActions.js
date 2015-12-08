/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${Stage}", "mouseover", function(sym, e) {
         sym.play();
         
         
         
         
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.start()
         
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9055, function(sym, e) {
         
         sym.stop();
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'panorama'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${panorama-2}", "mouseover", function(sym, e) {
         
         sym.play();
         
         sym.play();
         
         

      });
      //Edge binding end

   })("panorama");
   //Edge symbol end:'panorama'

   //=========================================================
   
   //Edge symbol: 'logo'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${logo}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Set a toggle to play or pause the symbol timeline 
         if (sym.isPlaying()) {
         	sym.stop();
         } else {
         	sym.play();
         }
         

      });
      //Edge binding end

   })("logo");
   //Edge symbol end:'logo'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-29794441");