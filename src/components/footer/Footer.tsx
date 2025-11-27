import { GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"
import { AuthContext } from "../../contexts/AuthContext"
import { useContext, type ReactNode } from "react"

function Footer() {
	let data = new Date().getFullYear()

	const { usuario } = useContext(AuthContext);

	let component: ReactNode

	if (usuario.token !== ""){

		component = (

			<div className="flex justify-center bg-pink-950 text-white">
				<div className="container flex flex-col items-center py-4">
					<p className="text-xl font-bold">Blog Pessoal Rayssa Ferraz | Copyright: {data}</p>
					<p className="text-lg">Acesse minhas redes sociais</p>
					<div className="flex gap-2">
						<a href="https://www.linkedin.com/in/rayssa-ferraz" target="_blank">
							<LinkedinLogoIcon size={48} weight="bold" />
						</a>
						<a href="https://www.instagram.com/rayssa_costtaa" target="_blank">
							<InstagramLogoIcon size={48} weight="bold" />
						</a>
						<a href="https://github.com/Rayssa-Ferraz" target="_blank">
							<GithubLogoIcon size={48} weight="bold" />
						</a>
					</div>
				</div>
			</div>

		)
	}

	return (
		<>
			{ component }
		</>
	)
}

export default Footer