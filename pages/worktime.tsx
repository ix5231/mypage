import { useState, useEffect, CSSProperties } from "react";
import Layout from "../layout/layout";
import { Input, Form } from "semantic-ui-react";

const Article = () => {
    const [res, setRes] = useState(0);
    const timeStyle: CSSProperties = {
        color: 'inherit',
        background: 'linear-gradient(to right, #40E0D0, #FF8C00, #FF0080)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',

        transitionProperty: 'font-size color',
        transitionDuration: '0.8s',
    };
    const timeStyleAvailable: CSSProperties = Object.assign({}, timeStyle, {
        color: 'transparent',

        fontWeight: 'bold',
        fontSize: '64px',
    });

    return (
        <Layout title='働いてやってもいい時間計算ツール'>
            <h2>働いてやってもいい時間計算ツール</h2>
            <Forms onChange={n => setRes(n)}></Forms>
            働いてやってもいい時間の合計: <span style={res == 0 ? timeStyle : timeStyleAvailable}>{res}時間</span>
        </Layout>
    );
};

const Forms = (props: { onChange: (n: number) => void }) => {
    const [workHourPerDay, setWorkHourPerDay] = useState(0);
    const [workDay, setWorkDay] = useState(0);

    useEffect(() => props.onChange(workHourPerDay * workDay), [workDay, workHourPerDay]);

    return (
        <Form>
            <Form.Field>
                <label>1日に働いてやってもいい時間</label>
                <input
                    placeholder="単位: 時間"
                    type='number'
                    onChange={e => setWorkHourPerDay(Number(e.target.value))}
                />
            </Form.Field>
            <Form.Field>
                <label>働いてやってもいい日数</label>
                <input
                    placeholder="単位: 日数"
                    type='number'
                    onChange={e => setWorkDay(Number(e.target.value))}
                />
            </Form.Field>
        </Form>
    );
};

export default Article;