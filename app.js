let curmoletile;
let curplanttile;

let score=0;
let gameover=false;
window.onload=function()
{
    setgame();
}
function setgame()
{
    for(let i=0;i<9;i++)
        {
            let tile=document.createElement("div");
            tile.id=i.toString();
tile.addEventListener("click",selecttile);


            document.getElementById("board").appendChild(tile);
        }
        setInterval(setmole,1000);
        setInterval(setplant,1500);
}

function getRAndomTile()
{
    let num=Math.floor(Math.random()*9)
    return num.toString();
}
function setmole()
{
    if(gameover)
        {
            return;
        }
    if(curmoletile)
        {
            curmoletile.innerHTML="";
        }
    let mole=document.createElement("img");
    mole.src="monty-mole.png"
    let num=getRAndomTile();
    if(curmoletile&&curmoletile.id==num)
        {
            return;
        }
    curmoletile=document.getElementById(num);
    curmoletile.appendChild(mole);

}

function setplant()
{
    if(gameover)
        {
            return;
        }
    if(curplanttile)
        {
            curplanttile.innerHTML="";
        }
        let plant=document.createElement("img");
        plant.src="piranha-plant.png";
        let num=getRAndomTile();
        if(curplanttile&&curplanttile.id==num)
            {
                return;
            }
    curplanttile=document.getElementById(num);
    curplanttile.appendChild(plant);
}

function selecttile()
{
    if(gameover)
        {
            return;
        }
    if(this==curmoletile)
        {
            score=score+10;
            document.getElementById("score").innerText=score.toString();
        }
        else if(this==curplanttile)
            {
               document.getElementById("score").innerText="Game Over: "+score.toString(); 
               gameover=true;
            }
}