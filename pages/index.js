import Head from 'next/head';
import NavLink from './navLink';

const WelcomePage = () => {
    return (
        <div>
            <Head>
                <title>Books</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
            </Head>
            <h2>
                Browse through Books :
            </h2>
            <ul>
                <NavLink routeURL="horror" title="Horror" />
                <NavLink routeURL="mystery" title="Mystery" />
                <NavLink routeURL="fiction" title="Fiction" />
                <NavLink routeURL="romance" title="Romance" />
            </ul>
        </div>
    )
}

export default WelcomePage;