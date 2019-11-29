import { Container } from "semantic-ui-react";
import Head from "next/head";
import { FC } from "react";

type LayoutProps = { title?: string };

const Layout: FC<LayoutProps> = props => (
    <Container text>
        <Head>
            <title>
                {props.title ?
                    'Diminished 2nd | ' + props.title :
                    'Diminished 2nd'}
            </title>
        </Head>
        {props.children}
    </Container>
);

export default Layout;