import ListaPostagens from "../../components/postagem/listapostagem/ListaPostagens"
import ModalPostagem from "../../components/postagem/modalpostagem/ModalPostagem"

function Home() {


    return (
        <>
        
        <div className="bg-pink-900 flex justify-center">
            {/* Grid que divide a tela em duas colunas */}
            <div className="container grid grid-cols-2 text-white">
                {/* Coluna esquerda */}
                <div className="flex flex-col gap-4 items-center justify-center py-4">  
                <h2
                    style={{
                        fontSize: "3rem",
                        fontWeight: "bold"
                    }}
                    className="text-5x1 font-bold"
                >Seja Bem Vinda(o)</h2>
                <p
                    className="text-xl"
                >Expresse seus pensamentos e opiniões</p> 
                {/* Link/Botão */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-around",
                        gap: "1rem",
                    }}
                    className="flex justify-around gap-4">
                         <ModalPostagem />
                    
                </div>
            </div>

            {/* Coluna direita */}
            <div className="flex justify-center">
                
           
                <img
                    src="https://ik.imagekit.io/f9incgeso/imgblog.png?updatedAt=1763042775163"
                    alt="Imagem da Página Home"
                    className="w-2/3"
                />
            </div>
        </div>
    </div>
     <ListaPostagens />
    </>
 
  )
}

export default Home