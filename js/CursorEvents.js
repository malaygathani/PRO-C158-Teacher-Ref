AFRAME.registerComponent("cursor-listener", {
  schema: {
    selectedItemId: { default: "", type: "string" },
  },
  init: function () {
    this.handleMouseEnterEvents();
    this.handleMouseLeaveEvents();
  },
  handlePlacesListState: function () {
    //cusor'click'Events
   this.el.addEventsListeners("click",evt=>{
     const placescontainer= document.querySelector("#plaaces-container");
     const{state} = placesContainer.getAttribute("tour");

     if(state==="places-list){
        const id =this.el.getattribute("id")
     const placesId = [
       "taj-mahal"
       "budapest"
     "new york-city"
     "eiffel-tower"
     ];
     if(placesId.includes(id)){
       placesContainer.setAttribute("tour",{
         state:"view"
         selectedCard:id
      });
  }
}
});
};
handlePlaceslistState:function(){
  const id=["taj-mahal,"budapest","new-york","eiffle-tower"];
  if(placesId.includess(id)){
    const placeContainer=document.querySelector("#places-container");
    placeContainer.SetAttribute("cusor-listener",{
      selectedltem:id,
    });
      this.el.setAttribute("material", {
        color: "#D76B30",
        opacity: 1,
      });
    }
  },
  handleMouseEnterEvents: function () {
    //Cursor 'mouseenter' Events
    this.el.addEventListener("mouseenter", () => {
      this.handlePlacesListState();
    });
  },
  handleMouseLeaveEvents: function () {
    //Cursor 'mouseleave' Events
    this.el.addEventListener("mouseleave", () => {
      const { selectedItemId } = this.data;
      if (selectedItemId) {
        const el = document.querySelector(`#${selectedItemId}`);
        const id = el.getAttribute("id");
        if (id == selectedItemId) {
          el.setAttribute("material", {
            color: "#0077CC",
            opacity: 1,
          });
        }
      }
    });
  },
});
