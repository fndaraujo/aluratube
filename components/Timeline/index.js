import Image from 'next/image'
import StyledTimeline from 'components/Timeline/index.styled'

function Timeline({ searchValue, ...props }) {
    const playlistNames = Object.keys(props.playlists)

    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = props.playlists[playlistName]
                return (
                    <section key={playlistName}>
                        <h3>{playlistName}</h3>
                        <div>
                            {videos
                                .filter((video) => {
                                    return video.title
                                        .toLowerCase()
                                        .includes(searchValue.toLowerCase())
                                })
                                .map((video) => {
                                    return (
                                        <a key={video.url} href={video.url}>
                                            <Image
                                                src={video.thumbnail}
                                                width={1280}
                                                height={720}
                                                alt={`${video.title} thumbnail`}
                                            />
                                            <span>{video.title}</span>
                                            <br />
                                        </a>
                                    )
                                })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}

export default Timeline
