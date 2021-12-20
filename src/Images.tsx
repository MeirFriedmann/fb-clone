import "./Images.css"
// import { useRef } from "react"
// import CSS from 'csstype'

const Images = (props: { images: string[] }) => {

    const images = props.images.slice(1) // remove empty image

    return (
        <div className="images">
            {images.length === 1 &&
                <div className="one-image">
                    <img src={images[0]} alt=""/>
                </div>}

            {images.length === 2 &&
                <div className="two-images"                >
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




            {/* <img src={images[-1]} ref={firstImgRef} alt="" style={noDisplay} /> */}
        </div>


    )
}

export default Images

  // images.map(image => {
    //     let img = new Image();
    //     img.src = image;
    //     if (img.width / img.height < 1) hasVerticalFlag = true;
    // }
    // )

    // let hasVerticalFlag: boolean = false;

    // // handles 2 images dimensions settings and flex direction: 
    // const firstImgRef = useRef<HTMLImageElement>(null);
    // const hasVertical = (): boolean => {
    //     if (hasVerticalFlag) return hasVerticalFlag;
    //     if (firstImgRef.current?.clientWidth) {
    //         let width: number = (firstImgRef.current?.clientWidth);
    //         let height: number = (firstImgRef.current?.clientHeight);
    //         if (width && height)
    //             if (height / width > 1) {
    //                 hasVerticalFlag = true;
    //                 return hasVerticalFlag;
    //             }
    //             else return hasVerticalFlag;
    //         return hasVerticalFlag;
    //     }
    //     else return hasVerticalFlag;
    // }
    // const numberOfImages = ['one', 'two', 'three', 'four', 'five']


    // let imgStyles: CSS.Properties = {}
    // let divStyles: CSS.Properties = {}
    // if (!hasVertical()) imgStyles = { objectFit: 'cover', width: '86rem', maxHeight: '100%', border: '1px solid white' }
    // if (!hasVertical()) divStyles = { flexDirection: 'column', height: '42rem' }
    // if (hasVertical())
    //  imgStyles = { objectFit: 'cover', width: '43rem', height: '100%', border: '1px solid green' }
    // if (hasVertical())
    //  divStyles = { height: '37.3rem', alignItems: 'center' }
    // console.log(hasVertical())
    // let noDisplay: CSS.Properties = { zIndex: -3, position: 'absolute' }