import Head from 'next/head';
import { useState, useEffect } from 'react';
import firestore from '../src/api';
import firebase from 'firebase/app';

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
        <div>
            <Head>
                <title>Diminished 2nd</title>
            </Head>

            <article id="access-counter">
                <p>手動アクセスカウンター: {accessCount}</p>
                <button onClick={
                    () => {
                        setAccessCount("Loading...");
                        addCount();
                    }
                } >Click Here!</button>
            </article>

            <article id="contents">
                <h1>おしながき</h1>
                <a href="https://mag.ix5231.xyz">磁束のアレ</a>
            </article>
        </div>
    );
}

export default Index;