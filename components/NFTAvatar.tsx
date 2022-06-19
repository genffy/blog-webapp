import Image from 'next/image'
import utilStyles from '@/styles/utils.module.css'
import styles from '@/styles/NFTAvatar.module.css';

const NFTAvatar = ({ image }: any) => {
    return <div className={styles.avatar}>
        <div className={styles.rainbowBorder}>
            <main className="main">
                <div className={styles['tss-toma-root']}>
                    <a className={`MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineHover ${styles['mui-toma']}`} href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/94563832762242395404887782841643158043990745318210810796522540943370908336129" target="_blank" rel="noopener noreferrer">
                        <div className={styles['tss-fskt-avilg-root']}>
                            <svg className={styles['tss-fskt-pgcub-root']} width="100%" height="100%" viewBox="0 0 128 128" id="NFTAvatarRing">
                                <defs>
                                    <path id="NFTAvatarRing-path-name" fill="none" stroke="none" strokeWidth="0" d="M9.5 64 A54.5 54.5 0 1 1 118.5 64"></path>
                                    <path id="NFTAvatarRing-path-price" fill="none" stroke="none" strokeWidth="0" d="M9.5 64 A54.5 54.5 0 1 0 118.5 64"></path>
                                    <linearGradient id="NFTAvatarRing-gradient" x1="0%" y1="0%" x2="100%" y2="0">
                                        <stop offset="0%" stopColor="#00f8ff"></stop>
                                        <stop offset="20%" stopColor="#a4ff00"></stop>
                                        <stop offset="40%" stopColor="#f7275e"></stop>
                                        <stop offset="60%" stopColor="#ffd300"></stop>
                                        <stop offset="80%" stopColor="#ff8a00"></stop>
                                        <stop offset="100%" stopColor="#00f8ff"></stop>
                                    </linearGradient>
                                </defs>
                                <circle cx="64" cy="64" r="58" fill="none" stroke="black" strokeWidth="14"></circle>
                                <pattern id="NFTAvatarRing-pattern" x="0" y="0" width="300%" height="100%" patternUnits="userSpaceOnUse">
                                    <circle cx="64" cy="64" r="64" fill="url(#NFTAvatarRing-gradient)">
                                        <animateTransform attributeName="transform" type="rotate" dur="10s" repeatCount="indefinite" from="0 64 64" to="360 64 64"></animateTransform>
                                    </circle>
                                </pattern>
                                <text x="0%" textAnchor="middle" fill="url(#NFTAvatarRing-pattern)" fontFamily="sans-serif">
                                    <textPath xlinkHref="#NFTAvatarRing-path-name" startOffset="50%" rotate="auto">
                                        <tspan fontWeight="bold" fontSize="9"> #945638...6129 </tspan>
                                    </textPath>
                                </text>
                                <text x="0%" textAnchor="middle" fill="url(#NFTAvatarRing-pattern)" fontFamily="sans-serif">
                                    <textPath xlinkHref="#NFTAvatarRing-path-price" startOffset="50%" rotate="auto">
                                        <tspan fontWeight="bold" fontSize="9" dy="0.5em">genffy</tspan>
                                    </textPath>
                                </text>
                            </svg>
                        </div>
                    </a>
                </div>
            </main>
        </div>
        <Image
        priority
        src={image}
        className={utilStyles.borderCircle}
        // layout='fill'
        width={144}
        height={144}
        alt={''}
        />
    </div>
}
export default NFTAvatar