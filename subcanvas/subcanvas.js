class element{
    constructor(draw_func){
        this.draw=draw_func;
        this.visibility=true;
    }
    hide(){
        this.visibility=false;
    }
    show(){
        this.visibility=true;
    }
}
class layer{
    constructor(id){
        this.id=id;
        this.elements=[];
        this.visibility=true;
        this.is_transparent=true;
    }
    new_element(elem){
        this.elements.push(elem);
    }
    hide(){
        this.visibility=false;
    }
    show(){
        this.visibility=true;
    }
    draw(){
        if(this.visibility){
            for(i in this.elements){
                i.draw();
            }
        }
    }
}
class subcanvas{
    constructor(){
        this.layers={};
        this.ids=[];
        this.top=-1;
    }
    add_layer(){
        top++;
        this.layers[top]=layer(top);
        this.ids.push(top);
        return [top,this.layers[top]];
    }
    hide_layer(id){
        this.layers[id].hide();
    }
    show_layer(id){
        this.layers[id].show();
    }
    remove_layer(id){
        delete this.layers[id];
        this.ids.splice(this.ids.indexOf(id),1);
    }
}