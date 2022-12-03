import { Headline } from 'src/components/Headline'
import { Links } from 'src/components/Links'
import classes from 'src/components/Main/Main.module.css'
import { useEffect } from 'react'

export function Main(props) {
    // component里边也可以同样的进行这个操作
    // useEffect(() => {
    //     document.body.style.backgroundColor = 'lightblue'
    //     console.log('mounting')
    //     return () => {
    //         document.body.style.backgroundColor = ''
    //         console.log('unmounting')
    //     }
    // }, [])
    return (
        <main className={classes.main}>
            <Headline page={props.page}>
                <code className={classes.code}>pages/{props.page}.js</code>
            </Headline>
            <Links />
        </main>
    )
}
