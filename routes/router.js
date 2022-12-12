const router = createBrowserRouter([
    {

        element: <Index />,

        path: "technocrazy8.github.io/index.html",

        loader: async ({request, params}) =>{
            return fetch(
                '/dev/index.html',
                {signal: request.signal}
            );
        },
    }
])