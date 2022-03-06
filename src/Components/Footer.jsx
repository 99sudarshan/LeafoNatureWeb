import React from 'react';
import Four from '../images/4.jpeg';

const Footer = () => {
    return (
        <div className='bg-slate-100 w-full'>
            <div className="md:flex md:justify-around md:items-baseline pt-16 xl:w-4/5 m-auto">
                <div className="flex justify-center p-2 gap-4 xl:w-4/5">
                    <h2 className='w-36 text-3xl font-bold [text-shadow:1px_1px_0px_#27272a]'>Natural Inspiration</h2>
                    <div className='h-full'>
                        <img src={Four} alt="" className='rounded-full w-48  md:w-64 md:h-80' />
                    </div>
                </div>
                <p className='text-center p-2 md:w-2/5 md:text-left'>Lorem ipsum dolor sitamet consectetur adipisicing elit. Reprehenderit voluptatem, impedit voluptates asperiores laborum molestias commodi odit ea modi dolorem omnis sapiente iure natus neque facilis culpa nostrum voluptas. Nisi suscipit totam saepe consequatur Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, nemo! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, non? </p>
            </div>
        </div>
    );
}

export default Footer;