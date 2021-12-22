import "./css/Images.css"

const Images = (props: { images: string[] }) => {
    let images = props.images[0]===''? props.images.slice(1) : props.images  // remove empty image
    return (
        <div className="images">
            {images.length === 1 &&
                <div className="one-image">
                    <img src={images[0]} alt=""/>
                </div>}

            {images.length === 2 &&
                <div className="two-images">
                    {
                        images.map((image) => {
                            return <img src={image} alt="" />
                        })
                    }
                </div>

            }
            {images.length === 3 &&
                <div className="three-images">
                    <div className="three-images-first">
                        <img src={images[0]} alt="" />
                    </div>

                    <div className="three-images-last">
                        <img src={images[1]} alt="" />
                        <img src={images[2]} alt="" />
                    </div>
                </div>
            }
            {images.length === 4 &&
                <div className="four-images">
                    <div className="four-images-first">
                        <img src={images[0]} alt="" />
                    </div>

                    <div className="four-images-last">
                        <img src={images[1]} alt="" />
                        <img src={images[2]} alt="" />
                        <img src={images[3]} alt="" />
                    </div>
                </div>
            }

            {images.length >= 5 &&
                <div className="five-images">
                    <div className="five-images-first">
                        <img src={images[0]} alt="" />
                        <img src={images[1]} alt="" />
                    </div>

                    <div className="five-images-last">
                        <img src={images[2]} alt="" />
                        <img src={images[3]} alt="" />
                        <img src={images[4]} alt="" />
                        {images.length > 5 &&<div className="images_opacity_solid"></div>}
                        {images.length > 5 &&<div className="more_images"><h1>+{images.length-5}</h1></div>}
                    </div>
                </div>
            }
        </div>


    )
}

export default Images
