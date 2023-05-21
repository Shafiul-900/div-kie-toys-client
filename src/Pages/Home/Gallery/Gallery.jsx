import { useEffect, useState } from "react";


const Gallery = () => {
    // console.log(Mediea)
    const [media, setMedia] = useState([]);
    const [image, setImage] = useState(null);

    useEffect(() => {
        fetch('https://toys-dickie-server.vercel.app/toys')
            .then(res => res.json())
            .then(data => {
                const poduct = data.slice(0, 20);
                setMedia(poduct);
            })
                
    }, []);

    return (
        <div className="mb-10 relative">
            <h1 className="text-center text-3xl font-bold mb-10">Toys Gallery</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 w-4/5 mx-auto">
                {
                    media.map((file) => {
                        const { photo } = file;
                        return (
                            <>
                                <div className="border-solid border-4	 border-white " >
                                    {/* The button to open modal */}
                                    <label htmlFor="my-modal-3"><img  onClick={() => setImage(photo)}className="h-full galleryImag" src={photo} alt="" /></label>

                                    {/* Put this part before </body> tag */}
                                    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                                    <div className="modal">
                                        <div className="modal-box relative">
                                            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                            <img className="w-full h-72" src={image} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </>
                        )

                    })
                }
            </div>

            {/* <div className="popup-image absolute top-0  left-0 z-10 w-1/2 h-1/2">
                <img src={image} alt="" />

            </div> */}

        </div>
    );
};

export default Gallery;