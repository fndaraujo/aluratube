import Image from 'next/image'

import appConfig from '@/aluratube.config.json'

import StyledHeader from 'components/Header/index.styled'
import StyledBanner from 'components/Header/banner.styled'

function Header() {
    return (
        <StyledHeader>
            <StyledBanner bannerUrl={appConfig.user.banner} />
            <section className="user-info">
                <Image
                    src={`https://github.com/${appConfig.user.github}.png`}
                    width={420}
                    height={420}
                    alt="A user photo from github profile"
                />
                <div>
                    <h2 className="user-name">{`${appConfig.user.name} ${appConfig.user.surname}`}</h2>
                    <h3 className="user-description">
                        {appConfig.user.description}
                    </h3>
                </div>
            </section>
        </StyledHeader>
    )
}

export default Header
