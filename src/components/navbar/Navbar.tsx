import { useContext, type ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Navbar() {

  const navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);

  function logout(){
    handleLogout();
    ToastAlerta('O Usuário foi desconectado com sucesso!', "info");
    navigate('/');
  }

  let component: ReactNode

  if(usuario.token !== "") {
    component = (
      <>
        <style>
          {`
            .navbarOndulada {
              background: linear-gradient(90deg, #66002A 25%, #A30A4C 68%, #E0026A 100%);
              background-size: 300% 300%;
              animation: ondaCores 8s ease-in-out infinite;
            }

            @keyframes ondaCores {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
          `}
        </style>

        <div
          className="w-full flex justify-center py-4 text-white navbarOndulada"
        >
          <div className="container flex justify-between text-lg mx-8">
            <Link to="/home" className="text-2xl font-bold">
              Blog Pessoal
            </Link>

            <div className="flex gap-4">
              <Link to='/postagens' className='hover:underline'>Postagens</Link> 
              <Link to='/temas' className="hover:underline">Temas</Link> 
              <Link to='/cadastrartema' className="hover:underline">Cadastrar tema</Link>
              <Link to='/perfil' className="hover:underline">Perfil</Link>
              <Link to='/login' onClick={logout} className="hover:underline">Sair</Link>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      { component }
    </>
  )
}

export default Navbar;
