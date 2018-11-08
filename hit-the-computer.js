            window.onload=build;
            var gameboard=document.querySelector("#gameb");
            var office=9;
            var computer;
            var reduce;
            var compute=document.getElementsByClassName(".computer");
            var timer;
            var r;
            var score=0;
            var coff=true;

            function build(){
                var html="<h1>Hit the computer</h1>";
                for(var x=0;x<office;x++){
                    html+="<div class='office'><div class='desk'></div><div class='computer'></div></div>";

                }
                gameboard.innerHTML=html;
                computer=document.querySelectorAll(".computer");
                reduce=document.querySelectorAll(".office");
                for(var x=0;x<computer.length;x++){
                    computer[x].addEventListener('click',hitcomputer,false );
                }
                
            }
            function popup(){
                coff=true;
                r=computer[Math.floor(Math.random()*computer.length)];
                r.classList.add("comp");
                var rand=(Math.floor(Math.random()*10)*100+300);
                timer=setTimeout(hidecomputer,1000);

            }
            function hidecomputer(){
                r.classList.remove("comp");
                popup();
            }
           

            function hitcomputer(){
                event.target.classList.remove('comp');
                if(coff){
                    coff=false;
                    score++;
                    document.querySelector(".score").innerHTML=score;
                }
            }
            

            
            function start(){
                popup();
            }