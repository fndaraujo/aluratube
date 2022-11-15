import React from 'react'

import { supabase } from '@/lib/supabase-service'

import VideoAddStyled from 'components/VideoAdd/index.styled'

function useForm(props) {
    const [values, setValues] = React.useState(props.initialValues)
    return {
        values,
        handleChange: (e) => {
            const value = e.target.value
            const name = e.target.name
            setValues({ ...values, [name]: value })
        },
    }
}

function VideoAdd() {
    const [isFormVisible, setIsFormVisible] = React.useState(false)
    const formValues = useForm({ initialValues: { title: '', url: '' } })
    return (
        <VideoAddStyled>
            <button
                className="add-video"
                onClick={() => setIsFormVisible(true)}
            >
                +
            </button>
            {isFormVisible && (
                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        supabase
                            .from('video')
                            .insert({
                                title: formValues.values.title,
                                url: formValues.values.url,
                                thumbnail: `https://img.youtube.com/vi/${
                                    formValues.values.url.split('v=')[1]
                                }/maxresdefault.jpg`,
                                playlist: 'games',
                            })
                            .then(
                                alert(`Video ${formValues.values.title} added!`)
                            )
                            .catch((err) => {
                                alert(`Cannot add video: ${err}`)
                            })
                    }}
                >
                    <div>
                        <button
                            type="button"
                            className="close-modal"
                            onClick={() => setIsFormVisible(false)}
                        >
                            x
                        </button>
                        <input
                            placeholder="Enter video title"
                            name="title"
                            value={formValues.values.title}
                            onChange={formValues.handleChange}
                        />
                        <input
                            placeholder="Enter video url"
                            name="url"
                            value={formValues.values.url}
                            onChange={formValues.handleChange}
                        />
                        <button type="submit">Add</button>
                    </div>
                </form>
            )}
        </VideoAddStyled>
    )
}

export default VideoAdd
