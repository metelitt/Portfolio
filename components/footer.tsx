import React from 'react';

function Footer() {
    return (
<footer className='mb-10 px-4 text-center text-gray-500'>
    <small className='mb-2 block text-xs'>
        &copy; 2023 Rinat.Все права защищены.
    </small>
    <p className='text-xs'>
        <span className='font-semibold'>
            О сайте:
        </span>
        разработан с помощью React и Next.js(App Router & Server Actions), TypeScript, Tailwind CSS ,Framer Motion , React Email & Resend , Vercel hosting.
    </p>
</footer>
    );
}

export default Footer;