import Layout from "../layout/layout";
import { Button, Form } from "semantic-ui-react";
import { useState, FormEvent } from "react";
import Superagent from "superagent";
import { useAsyncFn } from "react-use";

interface TranslateContext {
    text: [string],
    model_id: string,
}

const translate = async (text: string) => {
    const apikey = 'i3EpQ4kPMjAKoeImj-Nqh7RDXeZnb9I3JOyr9HQtnnZ4';
    const url = 'https://api.us-south.language-translator.watson.cloud.ibm.com/instances/b753b0a9-77a1-4b1c-a17a-f813ca4d5a69/v3/translate?version=2018-05-01';
    const data: TranslateContext = {
        text: [text],
        model_id: "ja-en",
    };

    const res = await Superagent
        .post(url)
        .auth('apikey', apikey)
        .send(data);

    return res;
};

const Article = () => {
    const [text, setText] = useState("");
    const [resultState, fetchResult] = useAsyncFn(() => translate(text));

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        fetchResult();
        e.preventDefault();
    };

    const handleAsync = (): string => {
        try {
            if (resultState.loading) {
                return "Loading...";
            } else if (resultState.error) {
                return "ERROR: " + resultState.error.message;
            } else {
                if (resultState.value) {
                    return resultState.value.body;
                } else {
                    return 'ERROR: result is UNDEFINED';
                }
            }
        } catch (e) {
            return "EXCEPTION: " + e;
        }
    }

    return (
        <Layout title="音声機能付き翻訳">
            <Form onSubmit={handleSubmit}>
                <Form.TextArea
                    onChange={(e) => setText(e.currentTarget.value)}
                    value={text}
                    placeholder="Hello, World!"/>
                <Form.TextArea
                    value={handleAsync()}
                    placeholder="Result is here..."/>
                <Button type="submit">翻訳</Button>
            </Form>
        </Layout>
    )
}

export default Article;