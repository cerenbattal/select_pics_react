import React from 'react'

const ImageList = (props) => {
    console.log(props.images)
    return (
        <div>
            {props.images.map(({ description, id, urls }) => {
                return <img style={{ maxWidth: "100%" }} alt={description} key={id} src={urls.regular} />
            })}
        </div>
    )
}

export default ImageList;