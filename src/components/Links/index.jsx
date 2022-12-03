import classes from 'src/components/Links/Links.module.css'

//Linkの要素を配列で保持しておく
//基本変わらないもの(不変のもの)は大文字で書くと○
const ITEMS = [
    {
        href: 'https://nextjs.org/docs',
        title: 'Documentation →',
        description:
            'Find in-depth information about Next.js features and API.',
    },
    {
        href: 'https://nextjs.org/learn',
        title: 'Learn →',
        description:
            'Learn about Next.js in an interactive course with quizzes!',
    },
    {
        href: 'https://github.com/vercel/next.js/tree/master/examples',
        title: 'Examples →',
        description:
            'Discover and deploy boilerplate example Next.js projects.',
    },
    {
        href: 'https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
        title: 'Deploy →',
        description:
            'Instantly deploy your Next.js site to a public URL with Vercel.',
    },
]

export function Links() {
    return (
        <div className={classes.grid}>
            {ITEMS.map((item) => {
                return (
                    <a
                        key={item.href}
                        href={item.href}
                        className={classes.card}
                    >
                        <h3 className={classes.title}>{item.title}</h3>
                        <p className={classes.description}>
                            {item.description}
                        </p>
                    </a>
                )
            })}
        </div>
    )
}
