import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../client';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanityClient);

function urlFor(source){
    return builder.image(source);
}

export default function SinglePost() {
    const [singlePost, setSinglePost] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        sanityClient.fetch(`*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            "name": author->name,
            "authorImage": author->image,
        }`).then((data)=> setSinglePost(data[0]))
        .catch(cosole.error);
    },[slug]);

    if(!singlePost) return <div>Loading...</div>

    return (
        <main>
            <article>
                <header>
                    <div>
                        <div>
                            <h1></h1>
                            <div><img src="" alt=""/></div>
                            <p></p>
                        </div>
                    </div>
                    <img src="" alt=""/>
                </header>
                <div>BLOCK CONTENT</div>
            </article>
        </main>
    )
}