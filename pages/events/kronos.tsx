import React from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

const images = [
    "https://res.cloudinary.com/dtp3jjqrq/image/upload/v1707388145/Emmmc_a_quantum_computer_628f1c69-e1ad-4100-a9bd-d55aecea88ba_cafa4f.webp",
    "https://res.cloudinary.com/dtp3jjqrq/image/upload/v1707388142/glowing-computer-chips-row-technology-illuminates-generated-by-ai_alwba2.jpg",
    "https://res.cloudinary.com/dtp3jjqrq/image/upload/v1702390777/web-3.0_tdenkf.jpg",
    "https://res.cloudinary.com/dtp3jjqrq/image/upload/v1702390774/AIoT_fvuj5t.webp",
    "https://res.cloudinary.com/dtp3jjqrq/image/upload/v1702390774/metaverse_ekyeav.jpg"

]

export default function Authority() {
    return (
        <div>
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
                <Masonry>
                    {images.map((image, i) => (
                        <div key={i} style={{}}>
                            <img
                                src={image}
                                style={{ width: "100%", display: "block" }}
                                alt=""
                            />
                        </div>

                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </div>
    )
}
