

const avis = [
    {
        "titreTem"  : "Un systeme de jeux immersif et facile à exploiter",
        "textTem"   : "L'ambiance créer par le systeme de jeux incite les joueurs à s'imprégner de leur personnages notamment le systeme de point de fortune. La difficulté des tests poussent à la créativité chez mes joueurs.La fluidité des combats permet un bon équilibre entre phase de bataille et scene RP.L'Univers enjoint à la prudence, les joueurs ne se sente pas intouchable.Une immersion total et une expérience délicieuse.",
        "auteurTem" : "Mistrall : un MJ trés satisfait"  
        
    },
    {
        "titreTem" : "Brigandyne est un jeu de rôle exigeant",    
        "textTem":"Ici, pas question de jouer un élu surpuissant, un pourfendeur de dragons ou un archimage chef de son ordre. Non, vous incarnerez une personne plutôt normale évoluant dans une univers de dark fantasy impitoyable où chacune de vos actions devront être réfléchies. Basé sur un système de d100, Brigandyne reste un JDR tout à fait abordable par des joueurs peu expérimentés et laisse une grande liberté au niveau des archétypes de personnages  et scénarios jouables.",     
        "auteurTem": "Heacan"          
    },
    {
        "titreTem" : "Freeeedooom ! ",    
        "textTem":"Un jeu punitif où l'imagination peut sauvez la vie voire une partie. Une grosse partie du game se joue sur la chance. Donc ! Il faut jouer petit pour voir grand. L'univers est sombre, ça donne un choix aux joueurs d'être mauvais sans état d'âme. Le système de combat est assez simple, les bonus et malus se donnent en fonction des choix du joueur qui au final se resument à la même tactique pour avoir un bonus max en fonction de la carac choisie.En conclusion, c'est un bon univers, le GM fait un gros travail, parfois plus que nécessaire. Et côté joueur, le système de combat est très punitif parfois un peu trop.",     
        "auteurTem": "Akalac"          
    },
    {
        "titreTem" : "brigandyne, une campagne avec de l'action, des rebondissements, du suspens et de l'enquêt ! ",    
        "textTem":"Pour moi j'ai passer un très bon moment sur cette campagne avec mon groupe, on a pris notre temps pour progresser dans le scénario car nous avions pas mal d'options à notre disposition pour mettre en place des stratégies lorsque l'on se trouvais dans des situations compliquées, si vous aimez bien l'enquête il y'en aura, des combats avec parcimonie sauf si vous en décidez autrement xD, un système de jeux pas dur a prendre en main et plutôt rapide a comprendre, c'est un jdr que je conseillerais à des joueurs expérimentés et novices",     
        "auteurTem": "DouleurOrque700" 
    },
    {
        "titreTem" : "A couper le souffle !",    
        "textTem":"J'ai beaucoup aimer le fait d'être dans une ville et que la campagne se déroule uniquement là-bas, des rebondissements assez sympa et des interactions entre les personnages qui sont excellente",     
        "auteurTem": "Hourlack,à propos de la campagne 'Reve de gloire' " 
    }


]
let i=0
console.log (avis[0])
document.querySelector("#titreTem").innerHTML= avis[i].titreTem
document.querySelector("#textTem").innerHTML= avis[i].textTem
document.querySelector("#auteurTem").innerHTML= avis[i].auteurTem


document.querySelector("#temoignage").addEventListener("click", ()=>{
    if (i < avis.length-1){
        i++}
    else {i=0}   
    document.querySelector("#titreTem").innerHTML= avis[i].titreTem
    document.querySelector("#textTem").innerHTML= avis[i].textTem
    document.querySelector("#auteurTem").innerHTML= avis[i].auteurTem    
})





