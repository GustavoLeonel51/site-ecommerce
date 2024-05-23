const fotoMaior = document.createElement("img");
                fotoMaior.setAttribute("src","fotos/produto1.jpeg")
                fotoMaior.addEventListener("click",(evt)=>{
                    console.log(evt.target);})