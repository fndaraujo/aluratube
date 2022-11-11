import Image from 'next/image'

import appConfig from '@/aluratube.config.json'

function Header() {
    return (
        <>
            <Image
                src={appConfig.user.banner}
                width={2072}
                height={1379}
                alt="A banner image"
            />
            <Image
                src={`https://github.com/${appConfig.user.github}.png`}
                width={420}
                height={420}
                alt="A user photo from github profile"
            />
            <h2>{appConfig.user.name}</h2>
            <h3>{appConfig.user.description}</h3>
        </>
    )
}

export default Header
