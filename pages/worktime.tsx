import { useState, useEffect, CSSProperties } from "react";

const Article = () => {
    const [res, setRes] = useState(0);
    const timeStyle: CSSProperties = {
        float: 'right',

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
        <div style={{width: '40%'}}>
            <h2>働いてやってもいい時間計算ツール</h2>
            <Form onChange={n => setRes(n)}></Form>
            働いてやってもいい時間の合計: <span style={res == 0 ? timeStyle : timeStyleAvailable}>{res}時間</span>
        </div>
    );
};

const Form = (props: { onChange: (n: number) => void }) => {
    const [workHourPerDay, setWorkHourPerDay] = useState(0);
    const [workDay, setWorkDay] = useState(0);

    useEffect(() => props.onChange(workHourPerDay * workDay), [workDay, workHourPerDay]);

    return (
        <div>
            {'1日に働いてやってもいい時間: '}
            <input placeholder="単位: 時間"
                onChange={e => setWorkHourPerDay(Number(e.target.value))}
                type='number' />
            <br />
            {'働いてやってもいい日数: '}
            <input placeholder="単位: 日"
                onChange={e => setWorkDay(Number(e.target.value))}
                type='number' />

            <style jsx>
                {`
                    div > input {
                        float: right;
                    }
                `}
            </style>
        </div>
    );
};

export default Article;