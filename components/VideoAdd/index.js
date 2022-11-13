import React from 'react'

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
    const formValues = useForm({ initialValues: { title: '', url: '' } })
    return (
        <div>
            <button>+</button>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                }}
            >
                <button>x</button>
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
            </form>
        </div>
    )
}

export default VideoAdd
