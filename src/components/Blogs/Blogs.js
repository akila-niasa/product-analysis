import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='p-3 m-3'>
            <h1>What is Context API</h1>
                <p>The Context API is a way to manage state globally. It used to share data with multiple components, without passing props manually.we need to do is create a context using the createContext function from React.Then we use Provider component to wrap the components that are going to have access to our context.After that,The useContext hook receives a single argument, which is the context that you want to use.</p>
            </div>
            <div className='p-3 m-3'>
                <h1>What is Semantic Tag</h1>
                <p>Semantic HTML tags provide information about the contents of those tags how they look on a page.There are some semantic elements which used to define a web page:   <span className='fw-bolder'>Header ,Nav,Section,Article,Aside,Footer</span> in Html5. Header contains logo, heading element.Nav contains navigation link.Section is used to stored introduction,contact information.Article used to element contains.Aside is used as a sidebar to main content.Footer contains upper related document.</p>
            </div>
        </div>
    );
};

export default Blogs;