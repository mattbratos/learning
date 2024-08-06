export default function HomePage() {
    return (
        <div className='container mx-auto px-4 py-8'>
            <h1 className='text-3xl font-bold mb-4'>
                Welcome to the React Tutorial App
            </h1>
            <p className='mb-4'>
                This is a simple React application designed to demonstrate the
                basics of how React works. Whether you are a beginner looking to
                understand the fundamentals or someone who wants a quick
                refresher, this app serves as a helpful resource.
            </p>
            <p className='mb-4'>
                The app includes examples of components, state management, and
                props, providing a hands-on approach to learning. By exploring
                the code and experimenting with the app, you can gain a deeper
                understanding of React and how to build interactive web
                applications.
            </p>
            <p>
                Feel free to browse through the code on{' '}
                <a
                    href='https://github.com/mattbratos'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-500'
                >
                    GitHub/mattbratos
                </a>
                , and don't hesitate to reach out if you have any questions or
                suggestions. Happy coding!
            </p>
        </div>
    )
}
