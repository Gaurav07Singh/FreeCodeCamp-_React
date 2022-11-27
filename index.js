// ReactDOM.render(<h3>This is heading three</h3> , document.getElementById('root1'));

// ReactDOM.render(
//     <ul>
//         <li>Dog</li>
//         <li>Cat</li>
//     </ul> , 
//     document.getElementById("root")
// );

function Navbar()
{
    return (
        <h1>I am creating a navbar in react.</h1>
    )
}

//                                                  Challenge => 1
// : Create your own custom React Component!
// Call it MainContent and have it returna a simple
// h1 element thath says I'm learning react

/* Afterward , render it below the Navbar (which you can do inside 
    the ReactDOM.render call below) */

    function MainContent()
    {
        return (
            <h3>I'm learning react.</h3>
        )
    }

    function Practice()
    {
        return(
            <p>This is practice Component</p>
        )
    }
    ReactDOM.render(
        <div>
            <Navbar/>
            <MainContent/>
            <Practice/>
        </div>,
        document.getElementById("root")
    );

//                                                       Challenge => 2
// ................................React is Declarative...........

// Recrate the above line of code in vanilla js

const heading = document.createElement("h1");
h1.textContent = "This is an imperative way to program"
h1.className = "header"
document.getElementById('root').append(heading);


// ....................................................................................

ReactDOM.render(<h1>This is JSX</h1>)

                                                        