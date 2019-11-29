import Link from 'next/link';
import { useState, useEffect } from 'react';
import firestore from '../src/api';
import firebase from 'firebase/app';
import Layout from '../layout/layout'
import { Button } from 'semantic-ui-react'

function addCount(): Promise<void> {
    const increment = firebase.firestore.FieldValue.increment(1);
    return firestore!.collection("global").doc("access-counter").update({ toppage: increment });
}

const Index = () => {
    const [accessCount, setAccessCount] = useState("Loading...");
    
    useEffect(() => {
        return firestore!
            .collection("global")
            .doc("access-counter")
            .onSnapshot((doc) => {
                setAccessCount(doc.get('toppage'));
            });
    }, []);

    return  (
        <Layout>
            <article id="access-counter">
                <p>手動アクセスカウンター: {accessCount}</p>
                <Button
                    onClick={
                        () => {
                            setAccessCount("Loading...");
                            addCount();
                        }
                    }
                >
                    Click Here!
                </Button>
            </article>

            <article id="contents">
                <h1>おしながき</h1>
                <ul>
                    <li>
                        <a href="https://mag.ix5231.xyz">磁束のアレ</a>
                    </li>
                    <li>
                        <Link href='/worktime'><a>働いてやってもいい時間計算ツール</a></Link>
                    </li>
                </ul>
            </article>
        </Layout>
    );
};

export default Index;