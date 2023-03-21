function Script(){
    return(
        <div>
             <script> //Script JS para FAQ
                let respostas=document.querySelectorAll(".accordion");
                    respostas.forEach((event)=>{
                    event.addEventListener('click',()=>{
                        if(event.classList.contains("active")){
                            event.classList.remove("active");
                        }
                        else{
                            event.classList.add("active");
                            }
                        })
                    })
            </script>
        </div>

    )
}

export default Script;