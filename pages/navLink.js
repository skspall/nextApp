import Link from 'next/link';

export default (props) => {
    return (
        <li>
            <Link as={`/${props.routeURL}`} href={`/books?title=${props.title}`}>
                <a>{props.title}</a>
            </Link>
            <style jsx>{`
                    li{ 
                        margin-bottom: 12px;
                    }
				    a{
						font-size: 18px;
                        font-family: 'Courier';
					}
					`}
				</style>
        </li>
    )
}