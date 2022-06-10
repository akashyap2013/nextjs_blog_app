import Format from '../../layout/format'
import Author from '../../components/_child/author'
import Image from 'next/image'
import Ralated from '../../components/_child/ralated'
import getPost from '../../lib/helper'

export default function Page( { title, img, subtitle, description, author }){

    return (
        <Format>
            <section className='container mx-auto md:px-2 py-16 w-1/2'>
                <div className='flex justify-center'>
                    { author ? <Author></Author> : <></>}
                </div>

                <div className="post py-10">
                    <h1 className='font-bold text-4xl text-center pb-5'>{title || "No Title"}</h1>

                    <p className='text-gray-500 text-xl text-center'>{subtitle || "No Title"}</p>

                    <div className="py-10">
                        <Image src={img || "/"} width={900} height={600}></Image>
                    </div>

                    <div className="content text-gray-600 text-lg flex flex-col gap-4">
                        {description || "No Description"}
                    </div>

                </div>  

                <Ralated></Ralated>
            </section>
        </Format>
    )
}


export async function getStaticProps( { params } ){
    const posts = await getPost(params.postId)

    return {
        props : posts
    }
}

export async function getStaticPaths(){
    const posts = await getPost();
    const paths = posts.map(value => {
        return {
            params : {
                postId : value.id.toString()
            }
        }
    })

    return {
        paths,
        fallback : false
    }

}