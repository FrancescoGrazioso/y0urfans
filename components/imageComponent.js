import React, {useState} from "react";
import {Dialog} from "@material-ui/core";
import Image from "next/image";

import placeholder from '../public/static/images/avatar.jpg'
import {useRouter} from "next/router";

export default function ImageComponent ({post}) {
    const [open, isOpen] = useState(false);
    const router = useRouter();

    const handleShowDialog = () => {
        isOpen(!open)
    };

    const subscribe = () => {
        router.push('/subscribe')
    }

    if (post.isBlocked) {
        return (
            <div>
                <Image src={placeholder}
                       width="300"
                       height="200"
                       alt=""
                       placeholder="blur"
                       blurDataURL={placeholder}
                       style={{filter: 'blur(10px)'}}
                       onClick={subscribe}
                />
            </div>
        )
    } else {
        return(
            <div>
                <Image src={post.image}
                       width="300"
                       height="200"
                       alt=""
                       placeholder="blur"
                       blurDataURL={post.placeholder}
                       onClick={handleShowDialog}/>
                {open && (
                    <Dialog onClick={handleShowDialog} open={open} >
                        <img src={post.image} alt="" />
                    </Dialog>
                )}
            </div>
        )
    }
}
