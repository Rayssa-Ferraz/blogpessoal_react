
function Home() {


    return (
        /*Container*/
        <div
            className="bg-pink-900 flex justify-center"
        >
            {/* Grid que divide a tela em duas colunas */}
            <div
                className="container grid grid-cols-2 text-white"
            >
                {/* Coluna esquerda */}
                <div
                    className="flex flex-col gap-4 items-center justify-center py-4"
            >  
                <h2
                    style={{
                        fontSize: "3rem",
                        fontWeight: "bold"
                    }}
                    className="text-5x1 font-bold"
                >Seja Bem Vinde</h2>
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
                    className="flex justify-around gap-4"
                >
                    <div    
                        className="rounded text-white border-white border-solid border-2 py-2 px-4"
                    >Nova Postagem</div>
                </div>
            </div>

            {/* Coluna direita */}
            <div
                className="flex justify-center"
            >
                <img
                    src="https://ik.imagekit.io/f9incgeso/imgblog.png?updatedAt=1763042775163"
                    alt="Imagem da Página Home"
                    className="w-2/3"
                />
            </div>
        </div>
    </div >
  )
}

export default Home