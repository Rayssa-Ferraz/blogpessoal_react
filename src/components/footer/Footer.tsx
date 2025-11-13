import { GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-pink-950 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className="text-xl font-bold">
                        Blog Pessoal Rayssa Ferraz | Copyright: {data}
                    </p>
                <p className="text-lg">Acesse minhas resdes sociais</p>
                <div className="flex gap-2">
                    <a href="https://www.linkedin.com/in/rayssa-ferraz" target="_blank">
                        <LinkedinLogoIcon size={48} weight="bold"/>
                    </a>
                    <a href="https://www.instagram.com/rayssa_costtaa" target="_blank">
                    <InstagramLogoIcon size={48} weight="bold"/>
                    </a>
                    <a href="https://github.com/Rayssa-Ferraz" target="_blank">
                    <GithubLogoIcon size={48} weight="bold"/>
                    </a>
                </div>
                </div>
            </div>
        </>
    )
}

export default Footer