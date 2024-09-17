"use strict";

function f_sd_sort(o){
    if (o.encours) return;
    o.encours=true;

    o.tri_en_cours=true;
    switch (o.phase)  {
        case 0 :    o.en_cours = 0 ;o.permut = false; o.phase = 10;            // REPETER
                    o.passage = 0;o.nb_comp = 0; o.nb_echanges=0;
                    o.num_etape=0;o.etapes=[];o.pause = 0;  
                    surligne('algo',[2]);
                    surligne('caml',[2]);
                    surligne('pascal',[8]);
                    surligne('python',[4]);
                    surligne('C',[7]);
                    break;
        case 10 :   o.permut = false; o.en_cours = 0; o.phase = 20;         // permut = FAUX
                    surligne('algo',[4]);
                    surligne('caml',[4]);
                    surligne('pascal',[11]);
                    surligne('python',[5]);
                    surligne('C',[8]);
                    break;
        case 20 :   o.nb_comp ++;                                           // SI a[i] > a[i+1] ALORS
                    get_pos();
                    o.num_etape ++;
                    add_etape('C',o.en_cours,o.en_cours + 1); 
                    if (data[o.en_cours].v > data[o.en_cours + 1].v) {
                        o.phase = 30;
                    } else {
                        o.phase = 40;
                    }
                    surligne('algo',[6]);
                    surligne('caml',[7]);
                    surligne('pascal',[14]);
                    surligne('python',[8]);
                    surligne('C',[11]);
                    break;
        case 30 :   add_etape('S',o.en_cours,o.en_cours + 1);   // echanger a[i] et a[i+1]                    
                    if (vitesse<100) o.pause = 0; else if (vitesse<250) o.pause=10;else o.pause=15;                     
                    o.phase = 35;
                    surligne('algo',[7]);
                    surligne('caml',[11]);
                    surligne('pascal',[18]);
                    surligne('python',[11]);
                    surligne('C',[14]);
                    break;
        case 35 :   if (o.pause <= 0) {
                        o.phase = 40;
                        var temp = data[o.en_cours];
                        data[o.en_cours] = data[o.en_cours + 1];
                        data[o.en_cours + 1] = temp;
                        o.nb_echanges ++;
                        o.permut = true; 
                        surligne('algo',[7]);
                        surligne('caml',[13]);
                        surligne('pascal',[19]);
                        surligne('python',[12]);
                        surligne('C',[15]);                        
                    } else {
                        o.pause --;
                        surligne('algo',[7]);
                        surligne('caml',[11]);
                        surligne('pascal',[18]);
                        surligne('python',[11]);
                        surligne('C',[14]);                    
                    }
                    break;
        case 40 :   o.j ++;
                    surligne('algo',[7]);
                    surligne('caml',[14]);
                    surligne('pascal',[20]);
                    surligne('python',[12]);
                    surligne('C',[16]);
                    o.phase = 50;
                    break;
        case 50 :                                        // FIN Pour i de 1 à n - i
                    surligne('algo',[10]);
                    surligne('caml',[17]);
                    surligne('pascal',[21]);
                    surligne('python',[7]);
                    surligne('C',[17]);
                    o.phase = 60;
                    break;
        case 60 :   o.en_cours ++;
                    if (o.en_cours >= data.length - 1 - o.passage) {
                        o.en_cours = 0;
                        if (o.permut) {
                            o.phase = 10;
                            o.passage ++;
                        } else {
                            o.phase = 90;
                        }
                        if (o.passage>=19) o.phase = 90;
                    } else {
                        o.phase = 20;
                    }
                    surligne('algo',[11]);
                    surligne('caml',[6]);
                    surligne('pascal',[23]);
                    surligne('python',[4]);
                    surligne('C',[10]);
                    break;
        case 90 :   surligne('algo',[]);
                    surligne('caml',[]);
                    surligne('pascal',[]);
                    surligne('python',[]);
                    surligne('C',[]);

                    stop_sort();
                    break;
    }
    draw_sd();
    draw_schema();
    o.encours = false;
}

function draw_sd() {
    var canvas = document.getElementById('ins_cnv');
    var w, h, ctx, lg = (880 / 20),x = 0, x1 = 0, y = 0, dy=0,decy=0,elt,elt_drag;
    
    function dessine_elt(e) {    
        var h;
        h = 80*(e.v/20);
        
        if (e.drag) {
            ctx.strokeStyle="#ff0000"; 
            ctx.fillStyle="rgba(66,0,0,0.2)";
            ctx.strokeRect(e.x,e.y-80,43,130);
            ctx.fillRect(e.x,e.y-80,43,130);        
        }
        
        ctx.fillStyle = e.color;
        ctx.lineWidth=1;
        ctx.fillRect(e.x+1,e.y,42,-h);
        
        ctx.strokeStyle=elt.color;
        ctx.lineWidth=1;
        ctx.strokeRect(e.x,e.y+3,43,43);
        ctx.fillText(e.v,e.x+20,e.y+31);              
    }     
    
    if (canvas) {

        w = canvas.width; h = canvas.height; ctx=canvas.getContext("2d"); 
        ctx.clearRect ( 0 , 0 , w,h );
        if ((w<50) || (h<100))  {ctx.stroke(); return;}
        ctx.font="bold 16px Courier";
        ctx.textAlign="center";
        var ech_v = 200 / h, ech_h = 900 / w;

        /*ctx.fillStyle="#ff0000";
        ctx.fillRect(0,0,w,h);        */
        if (w>100) {

            /* Mise en evidence de la partie triee */
            if (asort.tri_en_cours && (asort.phase>0) && (asort.passage>0)) {
                ctx.fillStyle="rgba(77, 152, 184, 0.3)";
                ctx.fillRect(880,100,-43*(asort.passage),-90);
            }
            /* Mise en evidence de la bulle */
            if (asort.phase > 0 && asort.tri_en_cours) {
                ctx.strokeStyle="#ff0000";
                ctx.lineWidth=4;
                ctx.strokeRect(20+(43*(asort.en_cours)),105,86,43);
            }

            /* Décalage y pour les déplacements */ 
            decy = 0;
            if (asort.phase === 35) {   
                if (asort.pause >7) {
                    decy=11-asort.pause;
                } else if (asort.pause < 3) {
                    decy = asort.pause + 1; 
                } else decy = 4;
            }
                                

            for (let i=0;i<20;i++){
                if (data[i]) {
                    
                    elt = data[i]; 
                    
                    ctx.fillStyle = data[i].color;
                    ctx.lineWidth=1;
                    x = (20+(i*43));
                    dy = 0;
                    

                    if (asort.phase === 35) {                    

                       if (asort.pause>=0) {
                            if (i===(asort.en_cours + 1)) {
                                x1 = (20+(asort.en_cours*43));
                                x = x + (x1 - x)*(10-asort.pause) / 10; 
                                dy = decy;
                            }
                            if (i===asort.en_cours) {
                                x1 = (20+((asort.en_cours + 1)*43));
                                x = x + (x1 - x)*(10-asort.pause) / 10;   
                                dy = decy;
                            }
                        }                    

                    }
                    
                    if (elt.drag) {
                        elt_drag = elt;
                        x = elt.x;
                    } else {
                        elt.x = x;
                        elt.y = 105+dy;
                    }    
                    dessine_elt(elt); 
                }
            }

        }
        ctx.stroke();
        if (elt_drag) dessine_elt(elt_drag);
    }
}

function etape_bubble(obj) {
    var i=0,ret=false,a=0,b=0,c=0;
    for (i=0;i<16;i++) {obj.pos[i]=-1;}
    for (i=0;i<10;i++) {
        if (obj.data[i].visible) {
            if ( (obj.data[i].x != obj.data[i].destx) || (obj.data[i].y != obj.data[i].desty)) { ret=true;} else {
                if ((obj.data[i].desty != 200) && (obj.data[i].position<10)) {
                    obj.calcdest(i);
                }
            }
            if (obj.data[i].position>=0) {obj.pos[obj.data[i].position]=i;}
        }
    }
    if (! obj.mode_auto) {return;}
    if (ret) {return;}
    obj.sol = true;
    switch(obj.phase) {
    case 0 :    obj.i= 0;obj.phase = 10;obj.permut=false;obj.passage = 0;break;
    case 10 :   obj.balance();
                obj.phase = 20;obj.permut = false; obj.i = 0; obj.passage ++;
                break;
    case 20 :   obj.nb_comp ++;
                a = obj.pos[obj.i];b = obj.pos[obj.i + 1];
                obj.data[a].position = 10;obj.calcdest(a);
                obj.data[b].position = 11;obj.calcdest(b);
                obj.phase = 30;
                break;
    case 30 :   obj.balance();
                a = obj.pos[10];b = obj.pos[11];
                if (obj.data[a].valeur > obj.data[b].valeur) {
                    obj.data[a].position=obj.i+1;obj.calcdest(a);
                    obj.data[b].position=obj.i;obj.calcdest(b);
                    obj.nb_move++;
                    obj.permut = true;
                } else {
                    obj.data[a].position=obj.i;obj.calcdest(a);
                    obj.data[b].position=obj.i+1;obj.calcdest(b);
                }
                obj.phase = 40;
                break;
    case 40 :   obj.i ++;
                if (obj.i < obj.nb - obj.passage) {
                    obj.phase = 20
                } else {
                    if (obj.permut) {
                        obj.phase = 10;
                    } else obj.phase = 90;
                }
                break;
    case 90 :   obj.stop_auto();
                obj.sol = true;
                break;
    }
}
