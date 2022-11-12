import React from 'react'

import Timeline from '@/components/Timeline'
import { supabase } from '@/lib/supabase-service'

function HomePage() {
    const [playlists, setPlaylists] = React.useState({})

    React.useEffect(() => {
        supabase
            .from('video')
            .select('*')
            .order('playlist')
            .order('id')
            .then((videos) => {
                const _playlists = {}
                videos.data.forEach((video) => {
                    if (!_playlists[video.playlist]) {
                        _playlists[video.playlist] = []
                    }
                    _playlists[video.playlist] = [
                        video,
                        ..._playlists[video.playlist],
                    ]
                })
                setPlaylists(_playlists)
            })
    }, [])

    return <Timeline />
}

export default HomePage
