export default function Footer() {
    return (
        <footer className='text-white py-4 mx-auto w-full'>
            <div className='flex justify-between'>
                &copy; mattbratos {new Date().getFullYear()}
                <a
                    href='https://github.com/mattbratos'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-white bh'
                >
                    GitHub/mattbratos
                </a>
            </div>
        </footer>
    )
}
