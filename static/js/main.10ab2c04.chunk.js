(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,name:"Pikachu",image:"https://img.pokemondb.net/sprites/x-y/shiny/pikachu-f.png",clicked:!1},{id:2,name:"MewTwo",image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mewtwo.png"},{id:3,name:"Moltres",image:"https://img.pokemondb.net/sprites/ruby-sapphire/normal/moltres.png"},{id:4,name:"Charizard",image:"https://img.pokemondb.net/sprites/x-y/shiny/charizard.png"},{id:5,name:"Wartortle",image:"https://img.pokemondb.net/sprites/diamond-pearl/shiny/wartortle.png"},{id:6,name:"Bulbasaur",image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bulbasaur.png"},{id:7,name:"Gengar",image:"https://img.pokemondb.net/sprites/black-white/normal/gengar.png"},{id:8,name:"Alakazam",image:"https://img.pokemondb.net/sprites/x-y/shiny/alakazam-f.png"},{id:9,name:"Kangaskhan",image:"https://img.pokemondb.net/sprites/black-white/normal/kangaskhan.png"},{id:10,name:"Eevee",image:"https://img.pokemondb.net/sprites/x-y/shiny/eevee.png"},{id:11,name:"Articuno",image:"https://img.pokemondb.net/sprites/black-white/shiny/articuno.png"},{id:12,name:"Zapdos",image:"https://img.pokemondb.net/sprites/diamond-pearl/shiny/zapdos.png"}]},,,function(e,t,a){e.exports=a(31)},,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(2),c=a.n(o),i=a(3),s=a(4),m=a(7),l=a(5),p=a(8);a(15);var d=function(e){return r.a.createElement("div",{className:"col s4 "},r.a.createElement("div",{className:"clicky white center valign-wrapper",onClick:function(){return e.removeCard(e.id)}},r.a.createElement("img",{src:e.image,alt:e.name,class:"responsive-img myImg"})))};a(17);var u=function(e){return r.a.createElement("div",{style:{backgroundImage:"url(".concat(e.background,")"),backgroundSize:"cover"}},e.children)};a(19);var h=function(e){return r.a.createElement("main",{className:"container main"},r.a.createElement("div",{className:"row"},e.children))};a(21);var g=function(e){return r.a.createElement("footer",{class:"page-footer red"},r.a.createElement("div",{class:"container footerRow"}),r.a.createElement("div",{class:"footer-copyright"},r.a.createElement("div",{class:"container"},"\xa9 Gotta Click 'Em' All",r.a.createElement("a",{class:"grey-text text-lighten-4 right",href:"#!"},"Cord Exum"))))};a(23);var k=function(e){return r.a.createElement("header",null,e.children)};a(25);var f=function(e){return r.a.createElement("div",{className:"row red white-text valign-wrapper myRow"},r.a.createElement("div",{className:"col s12 m2"},r.a.createElement("h3",{className:"flow-text center-align"},"Click a Pokemon to begin!")),r.a.createElement("div",{className:"col s12 m8"},r.a.createElement("h1",{className:"center"},r.a.createElement("a",{href:"/",className:"mainTitle"},"Gotta Click 'Em All!"))),r.a.createElement("div",{className:"col s12 m2"},r.a.createElement("h4",{className:"flow-text"},"Score: ",e.score),r.a.createElement("h4",{className:"flow-text"},"Top Score: ",e.topscore>e.score?e.topscore:e.score)))},v=a(6);a(27);var E=function(e){return r.a.createElement("div",{className:"hero white-text valign-wrapper container-fluid"},e.children)},b=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={pokemon:v,score:0,topscore:0,shake:!1,gameover:""},a.updateScore=function(e){var t=a.state.pokemon.filter(function(t){return t.id===e});t.length>0&&(t[0].clicked?(a.shakePicture(),a.setState({gameover:"Game Over Man!"}),a.updateTopScore(a.state.score),a.newGame()):(t[0].clicked=!0,a.setState({score:a.state.score+1}),a.randomizeBoard()))},a.updateTopScore=function(e){a.state.topscore<e?a.setState({topscore:e}):a.setState({topscore:a.state.topscore})},a.randomizeBoard=function(e){for(var t=a.state.pokemon,n=0;n<t.length-1;n++){var r=n+Math.floor(Math.random()*(t.length-n)),o=t[r];t[r]=t[n],t[n]=o}a.setState({pokemon:t})},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"shakePicture",value:function(){this.setState({shake:!this.state.shake})}},{key:"newGame",value:function(){var e=this.state.pokemon.map(function(e){return e.clicked=!1,e});this.setState({score:0,pokemon:e,gameover:""}),this.randomizeBoard(),this.shakePicture()}},{key:"render",value:function(){var e=this;return r.a.createElement(u,{background:"https://cdn.vox-cdn.com/uploads/chorus_asset/file/11680589/Map_Art.png"},r.a.createElement(k,null,r.a.createElement(f,{score:this.state.score,topscore:this.state.topscore}),r.a.createElement(E,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 center"},r.a.createElement("h1",null,"Pokemon List")),r.a.createElement("div",{className:"col s12 center"},r.a.createElement("h3",{className:"flow-text"},"Try and catch all the Pokemon to score a point! Be careful, you can only catch each Pokemon one time!"))))),r.a.createElement(h,null,this.state.pokemon.map(function(t){return r.a.createElement(d,{removeCard:e.updateScore,id:t.id,key:t.id,name:t.name,image:t.image,occupation:t.occupation,location:t.location})})),r.a.createElement(g,null))}}]),t}(n.Component);a(29);c.a.render(r.a.createElement(b,null),document.getElementById("root"))}],[[9,2,1]]]);
//# sourceMappingURL=main.10ab2c04.chunk.js.map